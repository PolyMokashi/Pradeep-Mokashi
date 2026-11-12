import React, { Component } from 'react'
import { Link } from 'react-router-dom' // Import Link from react-router-dom
import { Tooltip } from '@mui/material'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import FolderCopyOutlinedIcon from '@mui/icons-material/FolderCopyOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined'
import './nav.css'

class Nav extends Component {
    constructor() {
        super()
        this.state = { active: '/' }
    }

    render() {
        return (
            <nav>
                <Tooltip title="Home" placement="top">
                    <Link
                        to="/"
                        onClick={() => this.setState({ active: '/' })}
                        className={
                            this.state.active === '/'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        <HomeOutlinedIcon fontSize="small" />
                    </Link>
                </Tooltip>

                <Tooltip title="Education" placement="top">
                    <Link
                        to="/education"
                        onClick={() => this.setState({ active: '/education' })}
                        className={
                            this.state.active === '/education'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        <SchoolOutlinedIcon fontSize="small" />
                    </Link>
                </Tooltip>

                <Tooltip title="Projects" placement="top">
                    <Link
                        to="/projects"
                        onClick={() => this.setState({ active: '/projects' })}
                        className={
                            this.state.active === '/projects'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        <FolderCopyOutlinedIcon fontSize="small" />
                    </Link>
                </Tooltip>

                <Tooltip title="Experience" placement="top">
                    <Link
                        to="/experience"
                        onClick={() => this.setState({ active: '/experience' })}
                        className={
                            this.state.active === '/experience'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        <WorkOutlineOutlinedIcon fontSize="small" />
                    </Link>
                </Tooltip>

                <Tooltip title="Achievements & Certificates" placement="top">
                    <Link
                        to="/achievements"
                        onClick={() =>
                            this.setState({ active: '/achievements' })
                        }
                        className={
                            this.state.active === '/achievements'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        <EmojiEventsOutlinedIcon fontSize="small" />
                    </Link>
                </Tooltip>

                <Tooltip title="About me" placement="top">
                    <Link
                        to="/about"
                        onClick={() => this.setState({ active: '/about' })}
                        className={
                            this.state.active === '/about'
                                ? 'nav-link active'
                                : 'nav-link'
                        }
                    >
                        <PersonOutlineOutlinedIcon fontSize="small" />
                    </Link>
                </Tooltip>
            </nav>
        )
    }
}

export default Nav
