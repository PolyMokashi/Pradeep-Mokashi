import React from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import AchievementsCard from '../commom-components/AchievementsCard'
import MobileViewCard from '../commom-components/MobileViewCard'

const AchievementsPage = ({ mode, certificates }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
      <div>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant="h5" color={'blueviolet'}>
                  Certificates
              </Typography>
          </Box>
          {isMobile ? (
              <MobileViewCard mode={mode} certificates={certificates} />
          ) : (
              <AchievementsCard mode={mode} certificates={certificates} />
          )}
      </div>
  )
}

export default AchievementsPage
