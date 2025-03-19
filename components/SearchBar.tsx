import { View, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

// Defines the types for the Variables we use as Props
interface Props {
	placeholder: string;
	onPress?: () => void;
	value?: string;
	onChangeText?: (text: string) => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
	return (
		<View className='flex-row items-center bg-[#221F3D] rounded-full px-5 py-4'>
			<Image source={icons.search} className='w-5 h-5' resizeMode='contain' tintColor='#AB8BFF' />
			<TextInput
				className='flex-1 ml-2 text-white'
				onPress={onPress}
				placeholder={placeholder}
				value={value}
				onChangeText={onChangeText}
				placeholderTextColor='#A8B5DB'
			/>
		</View>
	)
}

export default SearchBar