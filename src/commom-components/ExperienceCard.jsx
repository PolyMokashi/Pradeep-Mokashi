import {
    Card,
    CardContent,
    CardOverflow,
    Typography,
} from '@mui/joy'
import React from 'react'
import ExpCard from './ExpCard'

const ExperienceCard = ({
    Role,
    CompanyName,
    CompanyLogo,
    Months,
    Place,
    Description,
    TechIcon,
    mode,
}) => {
    return (
        <>
            <Card
                size="lg"
                variant={mode === 'on' ? 'soft' : ''}
                orientation="horizontal"
                sx={{
                    width: "100%",
                    resize: 'horizontal',
                    my: 3,
                    background:
                        mode === 'on'
                            ? ''
                            : 'linear-gradient(109.6deg, rgba(0, 0, 0, 0.93) 11.2%, rgb(63, 61, 61) 78.9%)',
                    opacity: 0.6,
                    transition: 'transform 0.3s, color 0.3s',
                    '&:hover': {
                        opacity: 1,
                        transform: 'translateY(-10px)',
                        '& .MuiTypography-root': {
                            color: mode==='on'? 'black':"white",
                        },
                    },
                }}
            >
                <CardOverflow
                    sx={{
                        flex: { sm: '0 0 250px' },
                        display: 'flex',
                        flexDirection: 'column',
                        px: 'var(--Card-padding)',
                    }}
                >
                    <Typography fontSize="xl" fontWeight="xl" textColor="blue">
                        {Months}
                    </Typography>
                    <Typography sx={{ color: mode === 'on' ? '' : 'skyblue' }}>
                        {Place}
                    </Typography>
                </CardOverflow>
                <CardContent>
                    <ExpCard
                        Description={Description}
                        CompanyName={CompanyName}
                        Role={Role}
                        CompanyLogo={CompanyLogo}
                        TechIcon={TechIcon}
                        mode={mode}
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default ExperienceCard
