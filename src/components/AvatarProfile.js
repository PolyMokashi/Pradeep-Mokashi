import { Avatar, Tooltip } from '@mui/material'
import React from 'react'

const AvatarProfile = ({ profile }) => {
  return (
      <div>
          <Tooltip title={profile.name} arrow>
              <Avatar
                  sx={{
                      width: { xs: 40, md: 72 },
                      height: { xs: 40, md: 72 },
                      mt: 2,
                      ml: 2,
                      overflow: 'hidden',
                  }}
              >
                  <img
                      src={profile.image}
                      alt={profile.name}
                      style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                      }}
                  />
              </Avatar>
          </Tooltip>
      </div>
  )
}

export default AvatarProfile
