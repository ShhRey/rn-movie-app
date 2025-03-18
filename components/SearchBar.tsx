import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

// Defines the types for the Variables we use as Props
interface Props {
    placeholder: string;
    onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress }: Props) => {
  return (
    <View className='flex-row items-center bg-[#221F3D] rounded-full px-5 py-4'>
        <Image source={icons.search} className='size-5' resizeMode='contain' tintColor='#AB8BFF' />
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value=""
            onChangeText={() => {}}
            placeholderTextColor='#A8B5DB'
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar