import { Box, Typography } from '@mui/material';
import {ReactTyped} from 'react-typed';

const AutoType = ({ isXsScreen, profile }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <Typography color={"blueviolet"} variant={isXsScreen ? 'h7' : 'h5'}>
                    Hello I'm
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mb: 3,
                }}
            >

                <Typography variant={isXsScreen ? 'h5' : 'h3'}>
                    {profile.name}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant={isXsScreen ? 'h6' : 'h4'}>
                    {' '}
                    <ReactTyped
                        strings={profile.roles}
                        typeSpeed={110}
                        loop
                        backSpeed={30}
                        cursorChar="_"
                        showCursor={true}
                    />
                </Typography>
            </Box>
        </>
    )
}

export default AutoType
