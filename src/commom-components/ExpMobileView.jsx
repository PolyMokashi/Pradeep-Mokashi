import React from 'react'
import { Box, Typography, Chip, Link, Card } from '@mui/joy'
import { motion } from 'framer-motion'
import { Avatar } from '@mui/material'

const MotionCard = motion.create(Card)

const ExpMobileView = ({
    Role,
    CompanyName,
    CompanyLogo,
    Months,
    Place,
    Description,
    CompanyLink,
    TechIcon,
    mode,
}) => {
    return (
        <MotionCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            sx={{
                p: { xs: 1.75, sm: 2 },
                mx: 1,
                my: { xs: 1.5, sm: 2 },
                boxShadow: 2,
                borderRadius: 2,
                minWidth: 0,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <Box
                    component="img"
                    src={CompanyLogo}
                    alt={`${CompanyName} logo`}
                    sx={{
                        width: 40,
                        height: 40,
                        flex: '0 0 40px',
                        borderRadius: '50%',
                        objectFit: 'scale-down',
                        backgroundColor: '#f5f5f5',
                        padding: '2px'
                    }}
                />
                <Box sx={{ minWidth: 0 }}>
                    <Typography
                        variant="h6"
                        sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' }, lineHeight: 1.25 }}
                    >
                        {Role}
                    </Typography>
                    <Link href={CompanyLink}>
                        {CompanyName}
                    </Link>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: '0.78rem', lineHeight: 1.4 }}
                    >
                        {Months} - {Place}
                    </Typography>
                </Box>
            </Box>
            <Typography
                variant="body2"
                sx={{ mb: 1.5, lineHeight: 1.5, fontSize: '0.875rem' }}
            >
                {Description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                {TechIcon.map((icon, index) => (
                    <Chip
                        key={index}
                        variant="outlined"
                        color="primary"
                        size="sm"
                        startDecorator={
                            <Avatar
                                size="sm"
                                sx={{ objectFit: 'cover', width: 20, height: 20 }}
                                src={icon.component}
                            />
                        }
                        onClick={() => {}}
                        sx={{ mt: 0 }}
                    >
                        {icon.name}
                    </Chip>
                ))}
            </Box>
        </MotionCard>
    )
}

export default ExpMobileView
