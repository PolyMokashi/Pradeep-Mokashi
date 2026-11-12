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
            variant={variant ?? 'contained'}
            size={size ?? 'medium'}
            startIcon={startIcon}
            sx={sx}
            onClick={onClick}
            className={className}
        >
            {children}
        </Button>
    )
}

export default CustomButton
