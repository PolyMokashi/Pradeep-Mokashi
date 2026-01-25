import Lottie from 'react-lottie'
import loadingAnimation from '../../Assets/Animations/loading_animation.json'

const Loader = ({ width = 220, height = 220, text = 'Loading portfolio...' }) => {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
      },
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <div style={{ width, height }}>
        <Lottie options={defaultOptions} height={height} width={width} />
      </div>
      <div style={{ color: '#888', fontSize: 14 }}>{text}</div>
    </div>
  )
}

export default Loader
