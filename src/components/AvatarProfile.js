import { Avatar, Tooltip } from '@mui/material'
import React from 'react'
import PradeepAvatar from "../Images/image.png"
const AvatarProfile = () => {
  return (
      <div>
          <Tooltip title="Pradeep Mokashi" arrow>
              <Avatar
                  sx={{
                      width: { xs: 50, md: 82 },
                      height: { xs: 50, md: 82 },
                      mt: 2,
                      ml: 2,
                      overflow: 'hidden',
                  }}
              >
                  <img
                      src={PradeepAvatar}
                      alt="Pradeep Mokashi"
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
