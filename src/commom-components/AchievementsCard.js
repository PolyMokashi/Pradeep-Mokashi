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

function AchievementsCard({mode}) {
    const [openCardId, setOpenCardId] = useState(null)

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
                        position: 'fixed',
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
                        ml: -30,
                    }}
                >
                    {cardsData.map((card, index) => (
                        <Card
                            key={card.id}
                            onClick={(e) => {
                                e.stopPropagation() // Prevent triggering handleOutsideClick
                                handleCardClick(card.id)
                            }}
                            sx={{
                                width: 500,
                                height: 500,
                                padding: 2,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer',
                                position: 'absolute',
                                zIndex: openCardId === card.id ? 10 : 1,
                                transform:
                                    openCardId === card.id
                                        ? 'translate(-50%, -50%) scale(1.2)'
                                        : `translate(${index * 60}px, -50%)`,
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
                                image={card.img}
                                alt={card.title}
                            />
                            <CardActions>
                                <Link to={card.link}>
                                    <CustomButton
                                        variant="text"
                                        onClick={() => {}}
                                    >
                                        View
                                    </CustomButton>
                                </Link>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </div>
        </Grid>
    )
}

export default AchievementsCard
