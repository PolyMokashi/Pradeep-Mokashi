import { Avatar, Box, Button, CardActions, Chip, DialogContent, DialogTitle, Drawer, Grid, ModalClose, Typography } from '@mui/joy'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded'

const CommonDrawer = ({
    open,
    toggleDrawer,
    Title,
    Description,
    SubHeader,
    src,
    project_image,
    TechIcon,
    Project_link,
    github_link,
    mode
}) => {
   const TypoStyle = {
    mb: 2,
       color: mode === 'on' ? '' : '#cccccc',
   }

    return (
        <>
            <Drawer
                open={open}
                onClose={toggleDrawer}
                anchor="right"
                color={mode === 'on' ? 'primary' : 'neutral'}
                size="lg"
                variant={mode === 'on' ? 'soft' : 'solid'}
            >
                <ModalClose />
                <DialogTitle>{Title}</DialogTitle>
                <DialogContent>
                    <Grid container sx={{ ml: 3 }}>
                        <Box sx={{ ml: -1 }}>
                            <Typography level="title-md" sx={TypoStyle}>
                                {SubHeader}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                mt: 3,
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            {src ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    width="95%"
                                    height="95%"
                                >
                                    <source src={src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={project_image}
                                    alt="Project Name"
                                    style={{
                                        width: '95%',
                                        height: '95%',
                                    }}
                                ></img>
                            )}
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography sx={TypoStyle} level="h3">
                                About
                            </Typography>
                            <Typography level="body-md" sx={TypoStyle}>
                                {Description}
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 2 }}>
                            <Typography sx={TypoStyle} level="h3">
                                Technologies
                            </Typography>
                            {TechIcon.map((icon, index) => (
                                <Chip
                                    key={index}
                                    variant={
                                        mode === 'on' ? 'solid' : 'outlined'
                                    }
                                    color="primary"
                                    size="lg"
                                    startDecorator={
                                        <Avatar
                                            size="sm"
                                            sx={{ objectFit: 'cover' }}
                                            src={icon.component}
                                        />
                                    }
                                    onClick={() => {}}
                                    sx={{ mr: 2 }}
                                >
                                    {icon.name}
                                </Chip>
                            ))}
                        </Box>
                    </Grid>
                    <Box sx={{ ml: 3, mt: 3 }}>
                        {Project_link ? (
                            <div>
                                <Typography level="h3" sx={TypoStyle}>
                                    <PublicIcon fontSize="medium" /> Website
                                </Typography>
                                <Link to={Project_link}>
                                    <span
                                        style={{
                                            color:
                                                mode === 'on'
                                                    ? 'blue'
                                                    : 'inherit',
                                        }}
                                    >
                                        {'https://redb.vercel.app/'}
                                        <LaunchRoundedIcon fontSize="small" />
                                    </span>
                                </Link>
                            </div>
                        ) : null}
                    </Box>
                </DialogContent>
                <CardActions>
                    {github_link ? (
                        <Button
                            component="a"
                            variant="outlined"
                            sx={{ backgroundColor: 'skyblue' }}
                            startDecorator={
                                <LaunchRoundedIcon fontSize="small" />
                            }
                            href={github_link}
                        >
                            GitHub
                        </Button>
                    ) : (
                        <Button
                            component="a"
                            variant="soft"
                            sx={{ backgroundColor: 'skyblue' }}
                            endDecorator={
                                <LaunchRoundedIcon fontSize="small" />
                            }
                            href={Project_link}
                        >
                            Launch Website
                        </Button>
                    )}
                </CardActions>
            </Drawer>
        </>
    )
}

export default CommonDrawer
