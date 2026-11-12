import React, { useState } from 'react'
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardHeader,
    Grid,
    Typography,
} from '@mui/material'

const CertificateCard = ({ card, mode }) => {
    const [imageFailed, setImageFailed] = useState(false)

    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                borderRadius: 3,
                background:
                    mode === 'off'
                        ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(22, 33, 62, 0.95) 100%)'
                        : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                border:
                    mode === 'off'
                        ? '1px solid rgba(138, 43, 226, 0.2)'
                        : '1px solid rgba(0, 0, 0, 0.08)',
            }}
        >
            <CardHeader
                avatar={
                    <Avatar
                        src={card.ava_icon}
                        alt=""
                        sx={{ bgcolor: 'transparent' }}
                    />
                }
                title={card.title}
                subheader={card.subheader}
                sx={{ alignItems: 'flex-start', minHeight: 104 }}
                titleTypographyProps={{
                    sx: {
                        color: mode === 'off' ? 'white' : 'inherit',
                        fontWeight: 700,
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                    },
                }}
                subheaderTypographyProps={{
                    sx: { color: mode === 'off' ? '#b0b0b0' : 'text.secondary' },
                }}
            />
            <Box
                sx={{
                    mx: 2,
                    aspectRatio: '4 / 3',
                    display: 'grid',
                    placeItems: 'center',
                    overflow: 'hidden',
                    borderRadius: 2,
                    bgcolor:
                        mode === 'off'
                            ? 'rgba(255,255,255,0.06)'
                            : 'rgba(35,25,55,0.06)',
                }}
            >
                {imageFailed ? (
                    <Typography
                        color="text.secondary"
                        sx={{ px: 2, textAlign: 'center' }}
                    >
                        {card.title}
                    </Typography>
                ) : (
                    <Box
                        component="img"
                        src={card.img}
                        alt={`${card.title} certificate`}
                        loading="lazy"
                        onError={() => setImageFailed(true)}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                        }}
                    />
                )}
            </Box>
            <CardActions sx={{ mt: 'auto', p: 2 }}>
                <Button
                    component="a"
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    variant="outlined"
                    sx={{ color: 'blueviolet', borderColor: 'blueviolet' }}
                >
                    View credential
                </Button>
            </CardActions>
        </Card>
    )
}

const AchievementsCard = ({ mode, certificates }) => (
    <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        sx={{ maxWidth: 1200, mx: 'auto', pb: { xs: 10, md: 12 } }}
    >
        {certificates.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
                <CertificateCard card={card} mode={mode} />
            </Grid>
        ))}
    </Grid>
)

export default AchievementsCard
