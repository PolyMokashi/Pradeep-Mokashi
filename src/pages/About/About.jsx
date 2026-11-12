import * as React from 'react'
import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import Typography from '@mui/joy/Typography'
import Sheet from '@mui/joy/Sheet'
import { AwesomeButtonSocial } from 'react-awesome-button'
import 'react-awesome-button/dist/styles.css'
import { motion } from 'framer-motion'
import Skills from '../../components/Skills'

export function About({
    mode,
    profile,
    skills,
    projectCount,
    certificateCount,
}) {
    const cardVariants = {
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                bounce: 0.7,
                duration: 1.5,
            },
        },
    }
    return (
        <Box
            sx={{
                width: { xs: '100%', md: '80%' },
                maxWidth: 960,
                position: 'relative',
                mx: 'auto',
                px: { xs: 2, sm: 0 },
                overflow: 'hidden',
                my: 4,
            }}
        >
            <motion.div
                initial={false}
                animate="onscreen"
                variants={cardVariants}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        display: { xs: 'none', md: 'block' },
                        bgcolor: 'warning.300',
                        left: '500px',
                        top: '-24px',
                        bottom: '-24px',
                        '&::before': {
                            top: '4px',
                            // content: '"vertical"',
                            display: 'block',
                            position: 'absolute',
                            right: '0.5rem',
                            color: 'text.tertiary',
                            fontSize: 'sm',
                            fontWeight: 'lg',
                        },
                        '&::after': {
                            top: '4px',
                            // content: '"horizontal"',
                            display: 'block',
                            position: 'absolute',
                            left: '0.5rem',
                            color: 'text.tertiary',
                            fontSize: 'sm',
                            fontWeight: 'lg',
                        },
                    }}
                />
                <Card
                    orientation="horizontal"
                    sx={{
                        width: '100%',
                        flexWrap: 'wrap',
                        [`& > *`]: {
                            '--stack-point': '500px',
                            minWidth:
                                'clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)',
                        },
                    }}
                >
                    <AspectRatio
                        flex
                        ratio="1"
                        sx={{ 
                            minWidth: { xs: '100%', sm: 150 },
                            maxHeight: { xs: 'none', sm: 150 },
                            borderRadius: '8px',
                            overflow: 'hidden',
                            '& img': {
                                objectFit: { xs: 'contain', sm: 'cover' },
                            }
                        }}
                    >
                        <img 
                            src={profile.image}
                            loading="lazy" 
                            alt={profile.name}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                        />
                    </AspectRatio>
                    <CardContent sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                        <Typography fontSize="xl" fontWeight="lg">
                            {profile.name}
                        </Typography>
                        <Typography
                            level="body-sm"
                            fontWeight="lg"
                            textColor="text.tertiary"
                        >
                            {profile.headline}
                        </Typography>
                        <Sheet
                            sx={{
                                bgcolor: 'background.level1',
                                borderRadius: 'sm',
                                p: 1.5,
                                my: 1.5,
                                display: 'flex',
                                gap: 2,
                                '& > div': { flex: 1 },
                            }}
                        >
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Projects
                                </Typography>
                                <Typography fontWeight="lg">{projectCount}</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Certificates
                                </Typography>
                                <Typography fontWeight="lg">{certificateCount}</Typography>
                            </div>
                            <div>
                                <Typography level="body-xs" fontWeight="lg">
                                    Experience
                                </Typography>
                                <Typography fontWeight="lg">{profile.experienceSummary}</Typography>
                            </div>
                        </Sheet>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1.5,
                                flexWrap: 'wrap',
                                justifyContent: { xs: 'center', sm: 'flex-start' },
                            }}
                        >
                            {profile.socialLinks.map((link) => (
                                <AwesomeButtonSocial
                                    key={link.type}
                                    type={link.type}
                                    href={link.url}
                                >
                                    {link.label}
                                </AwesomeButtonSocial>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </motion.div>
            <Skills mode={mode} skills={skills} />
        </Box>
    )
}
