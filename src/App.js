import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/NavBar/Navbar'
import Home from './pages/Home/Home'
import './App.css'
import ModeSwitch from './components/BackGround/ModeSwitch'
import { About } from './pages/About/About'
import { Error } from './pages/Error/Error404'
import Loader from './components/Loader/Loader'
import './Loader.css'
import AvatarProfile from './components/AvatarProfile'
import ProjectPage from './pages/Projects/ProjectPage'
import Experience from './pages/Experience/Experience'
import Education from './pages/Education/Education'
import Footer from './components/Footer'
import AchievementsPage from './pages/AchievementsPage'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: process.env.REACT_APP_GTM_ID,
}
TagManager.initialize(tagManagerArgs)

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [mode, setMode] = useState('on')
    const location = useLocation()
    const [portfolio, setPortfolio] = useState(null)
    const [contentError, setContentError] = useState('')
    const [reloadContent, setReloadContent] = useState(0)

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'off' ? 'on' : 'off'))
    }

    useEffect(() => {
        document.body.classList.toggle('dark-mode', mode === 'off')
    }, [mode])

    useEffect(() => {
        setIsLoading(true)
        const timeout = setTimeout(() => {
            setIsLoading(false)
        }, 500)
        return () => clearTimeout(timeout)
    }, [location])

    useEffect(() => {
        const controller = new AbortController()
        setContentError('')

        fetch('/api/portfolio', { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Portfolio API returned ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                if (!data.profile || !Array.isArray(data.projects)) {
                    throw new Error('Portfolio API returned incomplete content')
                }
                setPortfolio(data)
            })
            .catch((error) => {
                if (error.name !== 'AbortError') {
                    setContentError(error.message)
                }
            })

        return () => controller.abort()
    }, [reloadContent])

    const isNavbarVisible = [
        '/',
        '/about',
        '/education',
        '/achievements',
        '/projects',
        '/experience',
    ].includes(location.pathname)

    const isFooterVisible = [
        '/',
        '/about',
        '/education',
        '/achievements',
        '/projects',
        '/experience',
    ].includes(location.pathname)

    if (!portfolio) {
        return (
            <div className={`App ${mode === 'off' ? 'dark-mode' : 'light-mode'}`}>
                {contentError ? (
                    <div role="alert" style={{ maxWidth: 560, margin: '20vh auto', padding: 24 }}>
                        <p>Portfolio content could not be loaded: {contentError}</p>
                        <button type="button" onClick={() => setReloadContent((value) => value + 1)}>
                            Retry
                        </button>
                    </div>
                ) : (
                    <div className="overlay">
                        <div className="centered">
                            <Loader />
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={`App ${mode === 'off' ? 'dark-mode' : 'light-mode'}`}>
            {isLoading && (
                <div className="overlay">
                    <div className="centered">
                        <Loader />
                    </div>
                </div>
            )}

            <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 1000 }}>
                {isNavbarVisible && (
                    <ModeSwitch mode={mode} toggleMode={toggleMode}/>
                )}
            </div>
            {isNavbarVisible && <Navbar mode={mode} />}
            <AvatarProfile profile={portfolio.profile} />
            <Routes>
                <Route exact path="/" element={<Home mode={mode} profile={portfolio.profile} />} />
                <Route
                    exact
                    path="/about"
                    element={
                        <About
                            mode={mode}
                            profile={portfolio.profile}
                            skills={portfolio.skills}
                            projectCount={portfolio.projects.length}
                            certificateCount={portfolio.certificates.length}
                        />
                    }
                />
                <Route
                    exact
                    path="/projects"
                    element={<ProjectPage mode={mode} projects={portfolio.projects} />}
                />
                <Route
                    exact
                    path="/experience"
                    element={<Experience mode={mode} experience={portfolio.experience} />}
                />
                <Route
                    exact
                    path="/education"
                    element={<Education mode={mode} education={portfolio.education} />}
                />
                <Route
                    exact
                    path="/achievements"
                    element={<AchievementsPage mode={mode} certificates={portfolio.certificates} />}
                />
                <Route exact path="*" element={<Error mode={mode} />} />
            </Routes>
            {isFooterVisible && <Footer mode={mode} />}
        </div>
    )
}

export default App
