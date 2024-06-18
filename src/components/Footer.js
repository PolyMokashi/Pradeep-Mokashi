import React from 'react'
import {
    Box,
    Grid,
    Typography,
    IconButton,
    Divider,
} from '@mui/material'

const Footer = ({ mode }) => {
    return (
        <Box
            component="footer"
            sx={{
                px: 2,
                mt: 'auto',
                backgroundColor: mode === 'on' ? 'white' : 'gray',
                color: mode === 'on' ? '#fff' : 'white',
                position: 'relative',
                bottom: 0,
                width: '98%',
            }}
        >
            <Divider />
            <Grid
                container
                spacing={4}
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid
                    item
                    xs={12}
                    md={6}
                    textAlign={{ xs: 'center', md: 'left' }}
                >
                    <Typography
                        sx={{ color: 'black' }}
                        variant="body2"
                        component="p"
                    >
                        &copy; {new Date().getFullYear()} Pradeep Mokashi. All
                        rights reserved.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    textAlign={{ xs: 'center', md: 'right' }}
                >
                    <Box>
                        <IconButton
                            href="https://x.com/Poly_Mokashi12"
                            color="inherit"
                        >
                            <img
                                width="30"
                                height="30"
                                src="https://img.icons8.com/color/48/twitterx--v1.png"
                                alt="twitterx--v1"
                            />
                        </IconButton>
                        <IconButton
                            href="https://m.facebook.com/PradeepMokashi0/"
                            color="inherit"
                        >
                            <img
                                width="30"
                                height="30"
                                src="https://img.icons8.com/color/48/facebook-new.png"
                                alt="facebook-new"
                            />
                        </IconButton>
                        <IconButton
                            href="https://www.instagram.com/poly_mokashi"
                            color="inherit"
                        >
                            <img
                                width="30"
                                height="30"
                                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                                alt="instagram-new--v1"
                            />
                        </IconButton>
                        <IconButton
                            href="https://github.com/PolyMokashi"
                            color="inherit"
                        >
                            <img
                                width="30"
                                height="30"
                                src="https://img.icons8.com/ios-filled/50/github.png"
                                alt="github"
                            />
                        </IconButton>
                        <IconButton
                            href="https://www.linkedin.com/in/pradeep-mokashi"
                            color="inherit"
                        >
                            <img
                                width="30"
                                height="30"
                                src="https://img.icons8.com/color/48/linkedin.png"
                                alt="linkedin"
                            />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer
