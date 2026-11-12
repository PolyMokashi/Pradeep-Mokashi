import React from 'react'
import Button from '@mui/material/Button'

const CustomButton = ({
    className,
    variant,
    size,
    sx,
    startIcon,
    children,
    onClick,
}) => {
    return (
        <Button
            variant={variant === undefined ? 'contained' : variant}
            size={size === undefined ? 'medium' : size}
            startIcon={startIcon === undefined ? false : startIcon}
            sx={sx}
            onClick={onClick === undefined ? false : onClick}
            className={className === undefined ? false : className}
        >
            {children}
        </Button>
    )
}

export default CustomButton
