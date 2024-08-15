import { View, Text, Image } from 'react-native'

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={require('@/assets/logo.png')}
        className="h-8"
        resizeMode="contain"
      />
      <Text className="mt-3 text-center font-regular text-lg text-zinc-400">
        Convide seus amigos e planeje sua{'\n'}próxima viagem
      </Text>
    </View>
  )
}
