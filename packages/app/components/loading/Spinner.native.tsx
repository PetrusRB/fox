import LottieView from 'lottie-react-native'

const Spinner = () => {
  return (
    <LottieView source={require('../../assets/loading.json')} autoPlay loop />
  )
}
export default Spinner
