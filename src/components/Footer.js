import React from 'react'
import {
    Box,
    Typography,
    IconButton,
    Divider,
} from '@mui/material'
import { Link } from 'react-router-dom'

const Footer = ({ mode }) => {
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
                        &copy; {new Date().getFullYear()} Pradeep Mokashi. All rights reserved.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                    <IconButton 
                        href="https://x.com/Poly_Mokashi12" 
                        color="inherit" 
                        aria-label="twitter"
                        sx={{ 
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-3px) scale(1.1)' }
                        }}
                    >
                        <img width="28" height="28" src="https://img.icons8.com/color/48/twitterx--v1.png" alt="twitter" />
                    </IconButton>
                    <IconButton 
                        href="https://m.facebook.com/PradeepMokashi0/" 
                        color="inherit" 
                        aria-label="facebook"
                        sx={{ 
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-3px) scale(1.1)' }
                        }}
                    >
                        <img width="28" height="28" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook" />
                    </IconButton>
                    <IconButton 
                        href="https://www.instagram.com/poly_mokashi" 
                        color="inherit" 
                        aria-label="instagram"
                        sx={{ 
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-3px) scale(1.1)' }
                        }}
                    >
                        <img width="28" height="28" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram" />
                    </IconButton>
                    <IconButton 
                        href="https://github.com/PolyMokashi" 
                        color="inherit" 
                        aria-label="github"
                        sx={{ 
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-3px) scale(1.1)' }
                        }}
                    >
                        <img width="28" height="28" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
                    </IconButton>
                    <IconButton 
                        href="https://www.linkedin.com/in/pradeep-mokashi" 
                        color="inherit" 
                        aria-label="linkedin"
                        sx={{ 
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'translateY(-3px) scale(1.1)' }
                        }}
                    >
                        <img width="28" height="28" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin" />
                    </IconButton>
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
