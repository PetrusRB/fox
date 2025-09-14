import { Dimensions, Platform, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { PostContent } from '../Content'
import { PostType } from 'app/types/post'
const PostWrapper = ({ id, user, title, content, image }: PostType) => {
  return (
    <View>
      <PostContent
        id={id}
        user={user}
        title={title}
        content={content}
        image={image}
      />
    </View>
  )
}
export default PostWrapper
