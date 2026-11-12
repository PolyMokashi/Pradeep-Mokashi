import React from 'react'
import { Box, Typography } from '@mui/material'
import AchievementsCard from '../commom-components/AchievementsCard'

const AchievementsPage = ({ mode, certificates }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Typography variant="h5" color="blueviolet">
                    Certificates
                </Typography>
            </Box>
            <AchievementsCard mode={mode} certificates={certificates} />
        </Box>
    )
}

export default AchievementsPage
