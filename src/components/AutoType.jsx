import { Box, Typography, useMediaQuery } from '@mui/material'
import { ReactTyped } from 'react-typed'

const AutoType = ({ profile }) => {
    const prefersReducedMotion = useMediaQuery(
        '(prefers-reduced-motion: reduce)'
    )

    return (
        <Box sx={{ px: 2, textAlign: 'center' }}>
            <Typography
                component="p"
                variant="overline"
                sx={{
                    color: 'blueviolet',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                }}
            >
                Hello, I&apos;m
            </Typography>
            <Typography
                component="h1"
                sx={{
                    mt: 0.5,
                    mb: 1.5,
                    fontSize: {
                        xs: 'clamp(2rem, 8vw, 3rem)',
                        md: 'clamp(3rem, 5vw, 4.5rem)',
                    },
                    fontWeight: 750,
                    letterSpacing: '-0.045em',
                    lineHeight: 1.08,
                    overflowWrap: 'anywhere',
                }}
            >
                {profile.name}
            </Typography>
            <Typography
                component="p"
                sx={{
                    minHeight: { xs: '2.5rem', sm: '3rem' },
                    color: 'blueviolet',
                    fontSize: { xs: '1.2rem', sm: '1.6rem', md: '1.9rem' },
                    fontWeight: 600,
                    lineHeight: 1.4,
                }}
            >
                {prefersReducedMotion ? (
                    profile.roles[0]
                ) : (
                    <ReactTyped
                        strings={profile.roles}
                        typeSpeed={70}
                        loop
                        backSpeed={25}
                        cursorChar="_"
                        showCursor
                    />
                )}
            </Typography>
            <Typography
                component="p"
                color="text.secondary"
                sx={{
                    mt: 1,
                    mx: 'auto',
                    maxWidth: 620,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.7,
                }}
            >
                {profile.headline}
            </Typography>
        </Box>
    )
}

export default AutoType
