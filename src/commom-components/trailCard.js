import React, { useState } from 'react'
import { Card, Box, CardMedia, CardHeader, Avatar, IconButton, CardActions, Grid } from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import cardsData from '../Constants/CerticatesInfo'

function App() {
    const [openCardId, setOpenCardId] = useState(null)
    const [clickedOutside, setClickedOutside] = useState(false)

    const handleCardClick = (id) => {
        setOpenCardId(openCardId === id ? null : id)
        setClickedOutside(false) // Reset clickedOutside state
    }

    const handleOutsideClick = () => {
        if (openCardId !== null) {
            setOpenCardId(null)
            setClickedOutside(true)
        }
    }

    return (
        <Grid>
            <div onClick={handleOutsideClick}>
                <div
                    style={{
                        filter:
                            openCardId !== null || clickedOutside
                                ? 'blur(3px)'
                                : 'none',
                        transition: 'filter 0.3s',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 1,
                    }}
                ></div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            sx={{
                                width: 500,
                                height: 500,
                                padding: 2,
                                ml:1,
                                transition: 'transform 0.3s, box-shadow 0.3s',
                                cursor: 'pointer',
                                position: 'absolute',
                                zIndex: openCardId === card.id ? 10 : 1,
                                transform:
                                    openCardId === card.id
                                        ? 'translate(-50%, -50%) scale(1.2)'
                                        : 'none',
                                left: '50%',
                                top: '50%',
                                ...(openCardId !== card.id && {
                                    left: `${(card.id - 1) * 200}px`,
                                    transform: 'none',
                                }),
                                '&:hover': {
                                    transform: `rotateY(15deg)`,
                                    boxShadow: 6,
                                    ...(openCardId === card.id && {
                                        // Conditionally apply hover effect
                                        transform:
                                            'translate(-50%, -50%) scale(1.2) rotateY(15deg)', // Apply hover effect only for the clicked card
                                    }),
                                },
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

export default App
