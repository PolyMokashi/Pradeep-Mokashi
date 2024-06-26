import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { AwesomeButtonSocial } from 'react-awesome-button'
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import poly from '../../Assets/Images/Poly.jpg'
import { motion } from 'framer-motion'
import Skills from '../../components/Skills'

export function About() {
    const cardVariants = {
        offscreen: {
            x: -300,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.7,
                duration: 1.5,
            },
        },
    }
    return (
        <Box
            sx={{
                width: { md: '60%' },
                position: 'relative',
                ml: { md: 25 },
                overflow: { xs: 'auto', sm: 'initial' },
                my: 4,
            }}
        >
            <motion.div
                initial="offscreen"
                animate="onscreen"
                variants={cardVariants}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: 'block',
                        bgcolor: 'warning.300',
                        left: '500px',
                        top: '-24px',
                        bottom: '-24px',
                        '&::before': {
                            top: '4px',
                            // content: '"vertical"',
                            display: 'block',
                            position: 'absolute',
                            right: '0.5rem',
                            color: 'text.tertiary',
                            fontSize: 'sm',
                            fontWeight: 'lg',
                        },
                        '&::after': {
                            top: '4px',
                            // content: '"horizontal"',
                            display: 'block',
                            position: 'absolute',
                            left: '0.5rem',
                            color: 'text.tertiary',
                            fontSize: 'sm',
                            fontWeight: 'lg',
                        },
                    }}
                />
                <Card
                    orientation="horizontal"
                    sx={{
                        width: '100%',
                        flexWrap: 'wrap',
                        [`& > *`]: {
                            '--stack-point': '500px',
                            minWidth:
                                'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                        },
                        // make the card resizable for demo
                        overflow: 'auto',
                        resize: 'horizontal',
                    }}
                >
                    <AspectRatio
                        flex
                        ratio="1"
                        maxHeight={200}
                        sx={{ minWidth: 200 }}
                    >
                        <img src={poly} loading="lazy" alt="" />
                    </AspectRatio>
                    <CardContent>
                        <Typography fontSize="xl" fontWeight="lg">
                            Pradeep Mokashi
                        </Typography>
                        <Typography
                            level="body-sm"
                            fontWeight="lg"
                            textColor="text.tertiary"
                        >
                            Software Developer
                        </Typography>
                        <Sheet
                            sx={{
                                bgcolor: 'background.level1',
                                borderRadius: 'sm',
                                p: 1.5,
                                my: 1.5,
                                display: 'flex',
                                gap: 2,
                                '& > div': { flex: 1 },
                            }}
                        >
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Projects
                                </Typography>
                                <Typography fontWeight="lg">11</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Certificates
                                </Typography>
                                <Typography fontWeight="lg">12</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Experience
                                </Typography>
                                <Typography fontWeight="lg">1 year</Typography>
                            </div>
                        </Sheet>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1.5,
                                flexWrap: 'wrap',
                            }}
                        >
                            <AwesomeButtonSocial
                                cssModule={AwesomeButtonStyles}
                                type="linkedin"
                                href="https://www.linkedin.com/in/pradeep-mokashi/"
                            >
                                Linkedin
                            </AwesomeButtonSocial>
                            <AwesomeButtonSocial
                                cssModule={AwesomeButtonStyles}
                                type="github"
                                href="https://github.com/PolyMokashi"
                            >
                                GitHub
                            </AwesomeButtonSocial>
                            <AwesomeButtonSocial
                                cssModule={AwesomeButtonStyles}
                                type="instagram"
                                href="https://www.instagram.com/poly_mokashi/"
                            >
                                Instagram
                            </AwesomeButtonSocial>
                            <AwesomeButtonSocial
                                cssModule={AwesomeButtonStyles}
                                type="twitter"
                                href="https://x.com/Poly_Mokashi12"
                            >
                                Twitter
                            </AwesomeButtonSocial>
                        </Box>
                    </CardContent>
                </Card>
            </motion.div>
            <Skills/>
        </Box>
    )
}
