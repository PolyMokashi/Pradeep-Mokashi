import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import AutoType from '../../components/AutoType'
import CustomButton from '../../commom-components/CustomButton'
import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import './Home.css'
import Lottie from 'react-lottie'
import animationData from '../../Images/Animation - 1715361331426.json'
import animationData1 from '../../Images/Darkmode_profile.json'

const Home = ({ mode }) => {
    const [, setClicked] = useState(false)
    const [clicked1, setClicked1] = useState(false)
    const theme = useTheme()
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'))
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    }
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animationData1,
    }
    function handleMail() {
        setTimeout(() => {
            const recipient = 'pradeepmokashi12@gmail.com'
            const subject = 'Subject Here'
            const body = 'Body of the email goes here'
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(body)}`
            window.location.href = mailtoLink
        }, 500)
        setClicked1(true)
    }

    function handleCV() {
        setTimeout(() => {
            const pdfUrl =
                'https://drive.google.com/file/d/1rrWPljg77J-RvZhhFZrpVSJIDIUWwsrY/view?usp=sharing'
            window.open(pdfUrl, '_blank')
        }, 500)
        setClicked(true)
    }

    return (
        <div>
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={12}>
                    <Box sx={{ ml: { xs: 0, sm: 5, md: 10, lg: 20 }, my: 2 }}>
                        <Typography variant="body1" color="red">
                            {'<html>'}
                        </Typography>
                        <Typography variant="body1" color="orange">
                            {'<body>'}
                        </Typography>
                    </Box>
                    <AutoType isXsScreen={isXsScreen} />
                    <Box
                        sx={{
                            height: '30dvh',
                        }}
                    >
                        {mode === 'on' ? (
                            <Lottie options={defaultOptions} />
                        ) : (
                            <Lottie options={defaultOptions1} />
                        )}
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
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
                                        class="svg"
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
                                ml: 2,
                            }}
                        >
                            <CustomButton
                                variant={'outlined'}
                                sx={{
                                    color: 'blueviolet',
                                    borderColor: 'blueviolet',
                                    '&:hover': {
                                        borderColor: 'darkviolet',
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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'right',
                            justifyContent: 'right',
                            mr: { xs: 0, sm: 5, md: 10, lg: 20 },
                            mt: 2,
                        }}
                    >
                        <Box>
                            <Typography variant="body1" color="orange">
                                {'</body>'}
                            </Typography>
                            <Typography variant="body1" color="red">
                                {'</html>'}
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
