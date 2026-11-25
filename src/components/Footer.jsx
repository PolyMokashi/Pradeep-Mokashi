import React from 'react'
import {
    Box,
    Typography,
    IconButton,
    Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = ({ mode, name, links }) => {
    return (
        <Box
            component="footer"
            sx={{
                mt: 'auto',
                background: mode === 'on' 
                    ? 'linear-gradient(180deg, transparent 0%, rgba(228, 232, 240, 0.8) 100%)'
                    : 'linear-gradient(180deg, transparent 0%, rgba(15, 15, 26, 0.9) 100%)',
                color: mode === 'on' ? '#000' : '#fff',
                position: 'relative',
                bottom: 0,
                width: '100%',
                pt: { xs: 1.5, sm: 3 },
                pb: { xs: 10, sm: 3 },
                backdropFilter: 'blur(10px)',
            }}
        >
            <Divider sx={{ 
                borderColor: mode === 'on' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                mb: { xs: 1.5, sm: 2 }
            }} />

            <Box
                sx={{
                    maxWidth: 980,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: { xs: 'center', sm: 'space-between' },
                    gap: { xs: 1, sm: 2 },
                    flexWrap: 'wrap',
                    mx: 'auto',
                    px: { xs: 1, sm: 2 },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: { xs: 'center', sm: 'flex-start' },
                        minWidth: 0,
                    }}
                >
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{
                            color: mode === 'on' ? '#555' : '#aaa',
                            textAlign: { xs: 'center', sm: 'left' },
                            fontSize: { xs: '0.75rem', sm: '0.875rem' },
                            whiteSpace: { xs: 'normal', sm: 'nowrap' },
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        &copy; {new Date().getFullYear()} {name}. All rights reserved.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: { xs: 0.5, sm: 1 }, alignItems: 'center' }}>
                    {links.map((link) => (
                        <IconButton
                            key={link.label}
                            href={link.url}
                            color="inherit"
                            aria-label={link.label}
                            sx={{
                                p: { xs: 0.5, sm: 1 },
                                '& img': {
                                    width: { xs: 22, sm: 28 },
                                    height: { xs: 22, sm: 28 },
                                },
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-3px) scale(1.1)',
                                },
                            }}
                        >
                            <img
                                src={link.icon}
                                alt=""
                            />
                        </IconButton>
                    ))}
                </Box>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{
                            color: mode === 'on' ? '#777' : '#888',
                            whiteSpace: 'nowrap',
                            fontSize: '0.75rem',
                        }}
                    >
                        Icons by <Link to="https://icons8.com/">Icons8</Link>
                    </Typography>
            </Box>
        </Box>
    )
}

export default Footer
