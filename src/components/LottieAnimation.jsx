import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web/build/player/lottie_light'

const LottieAnimation = ({
    animationData,
    loop = true,
    autoplay = true,
    isStopped = false,
    height = '100%',
    width = '100%',
    preserveAspectRatio = 'xMidYMid meet',
}) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container || !animationData) {
            return undefined
        }

        const animation = lottie.loadAnimation({
            container,
            renderer: 'svg',
            loop,
            autoplay: autoplay && !isStopped,
            animationData,
            rendererSettings: { preserveAspectRatio },
        })

        if (isStopped) {
            animation.goToAndStop(0, true)
        }

        return () => animation.destroy()
    }, [animationData, autoplay, isStopped, loop, preserveAspectRatio])

    return (
        <div
            ref={containerRef}
            style={{ width, height }}
            aria-hidden="true"
        />
    )
}

export default LottieAnimation
