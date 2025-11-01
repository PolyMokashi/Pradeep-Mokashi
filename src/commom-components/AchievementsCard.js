import React, { useState } from 'react'
import {
    Card,
    Box,
    CardMedia,
    CardHeader,
    Avatar,
    IconButton,
    CardActions,
    Grid,
} from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import cardsData from '../Constants/CerticatesInfo'
import { motion } from 'framer-motion';
function AchievementsCard({mode}) {
    const [openCardId, setOpenCardId] = useState(null)

    const cardVariants = {
        offscreenLeft: {
            x: -300,
            opacity: 0,
        },
        offscreenRight: {
            x: 300,
            opacity: 0,
        },
        offscreenTop: {
            y: -300,
            opacity: 0,
        },
        offscreenBottom: {
            y: 300,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.7,
                duration: 2.5,
            },
        },
    }

    const getVariant = (id) => {
        switch (id) {
            case 1:
                return 'offscreenLeft'
            case 2:
                return 'offscreenRight'
            case 3:
                return 'offscreenTop'
            case 4:
                return 'offscreenBottom'
            default:
                return 'offscreenLeft'
        }
    }
    const handleCardClick = (id) => {
        setOpenCardId(openCardId === id ? null : id)
    }

    const handleOutsideClick = () => {
        if (openCardId !== null) {
            setOpenCardId(null)
        }
    }

    return (
        <Grid>
            <div
                onClick={handleOutsideClick}
                style={{
                    position: 'relative',
                    // height: '100vh',
                    // width: '100vw',
                }}
            >
                <div
                    style={{
                        filter: openCardId !== null ? 'blur(3px)' : 'none',
                        transition: 'filter 0.3s',
                        position: 'relative',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: openCardId ? 1 : -1,
                    }}
                ></div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        position: 'relative',
                        ml: -70,
                    }}
                >
                    {cardsData.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={getVariant(card.id)}
                            animate="onscreen"
                            variants={cardVariants}
                            transition={{ delay: index * 0.5 }} // Staggered animation
                        >
                            <Card
                                key={card.id}
                                onClick={(e) => {
                                    e.stopPropagation() // Prevent triggering handleOutsideClick
                                    handleCardClick(card.id)
                                }}
                                sx={{
                                    width: 450,
                                    height: 450,
                                    padding: 2,
                                    transition:
                                        'transform 0.3s, box-shadow 0.3s',
                                    cursor: 'pointer',
                                    position: 'absolute',
                                    zIndex: openCardId === card.id ? 10 : 1,
                                    transform:
                                        openCardId === card.id
                                            ? 'translate(-50%, -50%) scale(1.2)'
                                            : `translate(${
                                                  index * 60
                                              }px, -50%)`,
                                    left: '50%',
                                    top: '50%',
                                    '&:hover': {
                                        transform:
                                            openCardId === card.id
                                                ? 'translate(-50%, -50%) scale(1.2) rotateY(15deg)'
                                                : `translate(${
                                                      index * 60
                                                  }px, -50%) rotateY(15deg)`,
                                        boxShadow: 6,
                                    },
                                    background:
                                        mode === 'off'
                                            ? 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'
                                            : 'white',
                                }}
                            >
                                <CardHeader
                                    avatar={
                                        <Avatar
                                            sx={{
                                                width: 48,
                                                height: 48,
                                                background: 'transparent',
                                            }}
                                            aria-label="Technology Stack"
                                            src={card.ava_icon}
                                        />
                                    }
                                    action={
                                        <IconButton aria-label="Launch">
                                            <Link to={card.link}>
                                                <LinkIcon fontSize="large" />
                                            </Link>
                                        </IconButton>
                                    }
                                    title={card.title}
                                    subheader={card.subheader}
                                    titleTypographyProps={{
                                        sx: {
                                            color:
                                                mode === 'off'
                                                    ? 'white'
                                                    : 'inherit',
                                            fontWeight: 'bold',
                                            fontFamily: 'Verdana',
                                        },
                                    }}
                                    subheaderTypographyProps={{
                                        sx: {
                                            color:
                                                mode === 'off'
                                                    ? 'white'
                                                    : 'inherit',
                                        },
                                        fontFamily: 'Verdana',
                                    }}
                                />
                                <CardMedia
                                    component="img"
                                    height="300"
                                    width="250"
                                    image={card.img}
                                    alt={card.title}
                                />
                                <CardActions sx={{ 
                                    justifyContent: 'center',
                                    padding: '16px',
                                    marginTop: 'auto'
                                }}>
                                    <Link to={card.link} style={{ textDecoration: 'none' }}>
                                        <CustomButton
                                            variant="text"
                                            onClick={() => {}}
                                        >
                                            Click to View
                                        </CustomButton>
                                    </Link>
                                </CardActions>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </div>
        </Grid>
    )
}

export default AchievementsCard
