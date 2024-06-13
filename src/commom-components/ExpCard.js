import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { Chip } from '@mui/joy'

const ExpCard = ({ CompanyLogo, CompanyName, Role, Description,TechIcon, mode }) => {
    return (
        <>
            <Card variant="outlined" sx={{ background: 'transparent', width:"100%" }}>
                <CardHeader
                    avatar={<Avatar src={CompanyLogo} />}
                    action={
                        <IconButton aria-label="settings">
                            <ArrowOutwardIcon />
                        </IconButton>
                    }
                    title={CompanyName}
                    subheader={Role}
                    titleTypographyProps={{
                        sx: {
                            color: mode === 'off' ? 'white' : 'inherit',
                            fontWeight: 'bold',
                            fontFamily: 'Verdana',
                        },
                    }}
                    subheaderTypographyProps={{
                        sx: { color: mode === 'off' ? 'white' : 'inherit' },
                        fontFamily: 'Verdana',
                    }}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color={mode === 'on' ? 'text.secondary' : '#cccccc'}
                    >
                        {Description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row" useFlexGap flexWrap="wrap">
                        {TechIcon.map((icon, index) => (
                            <Chip
                                key={index}
                                variant="outlined"
                                color="primary"
                                size="sm"
                                startDecorator={
                                    <Avatar
                                        size="sm"
                                        sx={{ objectFit: 'cover' }}
                                        src={icon.component}
                                    />
                                }
                                onClick={() => {}}
                                sx={{ mr: {md:2}, mt: 2 }}
                            >
                                {icon.name}
                            </Chip>
                        ))}
                    </Stack>
                </CardActions>
            </Card>
        </>
    )
}

export default ExpCard
