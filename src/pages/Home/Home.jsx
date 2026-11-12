import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import AutoType from '../../components/AutoType'
import CustomButton from '../../commom-components/CustomButton'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import './Home.css'
import LottieAnimation from '../../components/LottieAnimation'
import { motion } from 'framer-motion'
import useRemoteAnimation from '../../hooks/useRemoteAnimation'

const Home = ({ mode, profile }) => {
    const [clicked1, setClicked1] = useState(false)
    const theme = useTheme()
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    )
    const animationUrl =
        mode === 'on'
            ? '/media/Animations/Animation - 1715361331426.json'
            : '/media/Animations/Darkmode_profile.json'
    const { animationData, error: animationError } =
        useRemoteAnimation(animationUrl)
    function handleMail() {
        const subject = "Let's connect"
        window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`
        setClicked1(true)
    }

    function handleCV() {
        window.open(profile.resumeUrl, '_blank', 'noopener,noreferrer')
    }

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: prefersReducedMotion ? 0 : 0.6 },
        },
    }

    return (
        <Box sx={{ maxWidth: 1040, mx: 'auto', py: { xs: 3, md: 5 } }}>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <motion.div
                        initial={prefersReducedMotion ? false : 'hidden'}
                        animate="visible"
                        variants={variants}
                    >
                        <AutoType profile={profile} />
                    </motion.div>
                    <motion.div
                        initial={prefersReducedMotion ? false : 'hidden'}
                        animate="visible"
                        variants={variants}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: 440,
                                height: { xs: 190, sm: 240, md: 280 },
                                mx: 'auto',
                                mt: { xs: 2, sm: 3 },
                            }}
                        >
                            {animationData ? (
                                <LottieAnimation
                                    animationData={animationData}
                                    loop={!prefersReducedMotion}
                                    isStopped={prefersReducedMotion}
                                />
                            ) : animationError ? (
                                <Typography role="alert">
                                    Animation could not be loaded: {animationError}
                                </Typography>
                            ) : null}
                        </Box>
                    </motion.div>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: { xs: 'wrap', sm: 'nowrap' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: { xs: 1, sm: 0 },
                            mt: 4,
                        }}
                    >
                        <Box>
                            <button
                                type="button"
                                className="button"
                                onClick={handleCV}
                            >
                                <span className="button__text">
                                    Download CV
                                </span>
                                <span className="button__icon">
                                    <svg
                                        className="svg"
                                        data-name="Layer 2"
                                        id="bdd05811-e15d-428c-bb53-8661459f9307"
                                        viewBox="0 0 35 35"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                                        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                                        <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                                    </svg>
                                </span>
                            </button>
                        </Box>
                        <Box
                            sx={{
                                ml: { xs: 0, sm: 2 },
                            }}
                        >
                            <CustomButton
                                variant="contained"
                                sx={{
                                    color: '#fff',
                                    backgroundColor: 'blueviolet',
                                    '&:hover': {
                                        backgroundColor: 'darkviolet',
                                    },
                                }}
                                size={isXsScreen ? 'small' : 'large'}
                                startIcon={<EmailIcon />}
                                onClick={handleMail}
                                className={clicked1 ? 'downloadAnimation' : ''}
                            >
                                Let's Talk
                            </CustomButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
