import { useEffect, useState } from 'react'

const useRemoteAnimation = (url) => {
    const [animationData, setAnimationData] = useState(null)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()
        setAnimationData(null)
        setError('')

        fetch(url, { signal: controller.signal })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Animation request returned ${response.status}`)
                }
                return response.json()
            })
            .then(setAnimationData)
            .catch((requestError) => {
                if (requestError.name !== 'AbortError') {
                    setError(requestError.message)
                }
            })

        return () => controller.abort()
    }, [url])

    return { animationData, error }
}

export default useRemoteAnimation
