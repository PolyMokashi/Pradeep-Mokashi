import React from 'react'
import { Box, Typography, Chip, Link, Card } from '@mui/joy'
import { motion } from 'framer-motion'
import { Avatar } from '@mui/material'

const MotionCard = motion(Card)

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
            sx={{ p: 3, m: 2, boxShadow: 3, borderRadius: 2 }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <img
                    src={CompanyLogo}
                    alt={`${CompanyName} logo`}
                    style={{ width: '50px', marginRight: '16px' }}
                />
                <Box>
                    <Typography variant="h5">{Role}</Typography>
                    <Link href={CompanyLink}>
                        {CompanyName}
                    </Link>
                    <Typography variant="body2" color="text.secondary">
                        {Months} - {Place}
                    </Typography>
                </Box>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
                {Description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
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
                        sx={{ mr: { md: 2 }, mt: 2 }}
                    >
                        {icon.name}
                    </Chip>
                ))}
            </Box>
        </MotionCard>
    )
}

export default ExpMobileView
