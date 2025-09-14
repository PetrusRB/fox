declare module 'app/components/Icons/Icon' {
  import { FC } from 'react'
  import { ViewProps } from 'react-native'

  interface IconProps extends ViewProps {
    name: string
    size?: number
    color?: string
  }

  const Icon: FC<IconProps>
  export default Icon
}
declare module 'app/components/Home/Home' {
  import { FC } from 'react'
  import { ViewProps } from 'react-native'

  const Home: FC<ViewProps>
  export default Home
}
declare module 'app/components/Post/Wrapper/PostWrapper' {
  import { FC } from 'react'
  import { ViewProps } from 'react-native'
  import { User } from 'app/types/user'

  interface WrapperProps {
    id: string
    user: User
    title: string
    content: string
    image?: string
  }

  const PostWrapper: FC<WrapperProps>
  export default PostWrapper
}
declare module 'app/components/Image/Image' {
  import { FC } from 'react'
  import { ViewProps, ImageProps as ReactImageProps } from 'react-native'
  import { ImageSize } from 'app/types'
  interface ImageProps extends ReactImageProps {
    src: string
    style?: StyleProp<ImageStyle>
    size?: ImageSize
    alt?: string
  }

  const Image: FC<ImageProps>
  export default Image
}
declare module 'app/components/loading/Spinner' {
  import { FC } from 'react'
  import { ViewProps } from 'react-native'

  interface SpinnerProps extends ViewProps {
    size?: number
    color?: string
  }

  const Spinner: FC<SpinnerProps>
  export default Spinner
}
