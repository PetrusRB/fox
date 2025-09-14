import LottieView from 'lottie-react'
import loadingAnimation from '../../assets/loading.json'

const Spinner = () => {
  return <LottieView size={20} animationData={loadingAnimation} loop={true} />
}

export default Spinner
