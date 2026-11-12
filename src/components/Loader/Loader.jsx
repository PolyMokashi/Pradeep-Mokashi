import LottieAnimation from '../LottieAnimation'
import useRemoteAnimation from '../../hooks/useRemoteAnimation'

const Loader = ({ width = 220, height = 220, text = 'Loading portfolio...' }) => {
  const { animationData, error } = useRemoteAnimation(
    '/media/Animations/loading_animation.json'
  )
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ width, height, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {animationData ? (
          <LottieAnimation
            animationData={animationData}
            height={height}
            width={width}
          />
        ) : error ? (
          <div role="alert">Could not load loader animation: {error}</div>
        ) : (
          <div className="loader-spinner" role="status" aria-label="Loading" />
        )}
      </div>
      <div style={{ color: '#888', fontSize: 14 }}>{text}</div>
    </div>
  )
}

export default Loader
