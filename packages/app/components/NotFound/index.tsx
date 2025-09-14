import { StyleSheet } from 'react-native'

import { Text, View } from 'app/components/Themed'

export const NotFound = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>This screen does not exist.</Text>
        <Text style={styles.link}>Go to home screen!</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
