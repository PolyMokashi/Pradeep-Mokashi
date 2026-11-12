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
                py: 3,
                backdropFilter: 'blur(10px)',
            }}
        >
            <Divider sx={{ 
                borderColor: mode === 'on' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)',
                mb: 2
            }} />

            <Box
                sx={{
                    maxWidth: 980,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 2,
                    flexWrap: 'wrap',
                    mx:1
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, minWidth: 0, mx:1}}>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{
                            color: mode === 'on' ? '#555' : '#aaa',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                        }}
                    >
                        &copy; {new Date().getFullYear()} {name}. All rights reserved.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    {links.map((link) => (
                        <IconButton
                            key={link.label}
                            href={link.url}
                            color="inherit"
                            aria-label={link.label}
                            sx={{
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-3px) scale(1.1)',
                                },
                            }}
                        >
                            <img
                                width="28"
                                height="28"
                                src={link.icon}
                                alt=""
                            />
                        </IconButton>
                    ))}
                </Box>
                    <Typography
                        variant="body2"
                        component="p"
                        sx={{ color: mode === 'on' ? '#777' : '#888', whiteSpace: 'nowrap' }}
                    >
                        Icons by <Link to="https://icons8.com/">Icons8</Link>
                    </Typography>
            </Box>
        </Box>
    )
}

export default Footer
