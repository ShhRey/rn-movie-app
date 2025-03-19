import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
	return (
		<Link href={`/movies/${id}`} asChild>
			<TouchableOpacity className='w-[30%]'>
				<Image
					className='w-full h-52 rounded-lg'
					resizeMode='cover'
					source={{
						uri: poster_path
							? `https://image.tmdb.org/t/p/w500${poster_path}`
							: `https://placehold.co/600x400/1a1a1a/FFFFFF.png`
					}}
				/>

				<Text className='text-md justify-around font-bold text-white mt-2'>{title}</Text>

				<View className="flex-row items-center justify-between mt-2">
					<View className="flex-row items-center gap-x-1">
						<Image source={icons.star} className="size-4" />
						<Text className="text-xs text-white font-bold uppercase">
							{Math.round(vote_average / 2)}
						</Text>
					</View>
					<Text className="text-xs text-white font-medium">
						{release_date?.split("-")[0]}
					</Text>
				</View>
			</TouchableOpacity>
		</Link>
	)
}

export default MovieCard