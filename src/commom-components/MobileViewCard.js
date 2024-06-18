import React from 'react'
import {
    Card,
    Container,
    Box,
    CardMedia,
    CardHeader,
    Avatar,
    IconButton,
    CardActions,
} from '@mui/material'
import LinkIcon from '@mui/icons-material/Link'
import CustomButton from './CustomButton'
import { Link } from 'react-router-dom'
import cardsData from '../Constants/CerticatesInfo'
import { motion } from 'framer-motion'

function MoblieViewCard({ mode }) {
    const cardVariants = {
        offscreen: {
            y: 300,
            opacity: 0,
        },
        onscreen: {
            y: 50,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
            },
        },
    }
    return (
        <Container>
            <Box
                sx={{
                    flexDirection: 'column',
                    mb: 10,
                    ml:{xs:-2}
                }}
            >
                {cardsData.map((card) => (
                    <motion.div
                        key={card.id}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                        variants={cardVariants}
                    >
                        <Card
                            key={card.id}
                            sx={{
                                width: '100%',
                                height: '100%',
                                marginBottom: 3,
                                padding: 2,
                                background:
                                    mode === 'off'
                                        ? 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)'
                                        : 'white',
                                        boxShadow: 6,
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
                    </motion.div>
                ))}
            </Box>
        </Container>
    )
}

export default MoblieViewCard
