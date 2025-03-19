import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import useFetch from '@/services/useFetch'
import { fetchMovies } from '@/services/api'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const { data: movies, refetch: loadMovies, reset, loading, error } = useFetch(() => fetchMovies({ query: searchQuery }), false);

	// Load Movies as per searchQuery from the User
	useEffect(() => {
		const func = async () => {
			if (searchQuery.trim()) {
				await loadMovies();
			}
			else {
				reset();
			}
		}

		func();
	}, [searchQuery]);

	return (
		<View className='flex-1 bg-primary'>
			<Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode='cover' />
			<FlatList
				className='px-5'
				data={movies}
				renderItem={({ item }) => <MovieCard {...item} />}
				keyExtractor={(item) => item.id.toString()}
				numColumns={3}
				columnWrapperStyle={{
					justifyContent: 'flex-start',
					gap: 16,
					marginVertical: 16,
				}}
				contentContainerStyle={{ paddingBottom: 100 }}
				ListHeaderComponent={
					<>
						<View className='w-full flex-row justify-center items-center mt-20'>
							<Image source={icons.logo} className='w-12 h-10' />
						</View>

						<View className='my-5'>
							<SearchBar
								placeholder='Search for a Movie'
								value={searchQuery}
								onChangeText={(text: string) => setSearchQuery(text)}
							/>
						</View>

						{loading && (
							<ActivityIndicator
								size='large'
								className='my-3'
								color='#0000ff'
							/>
						)}

						{error && (
							<Text className='text-red-500 px-5 py-3' >Error: {error.message}</Text>
						)}

						{!loading && !error && searchQuery.trim() && movies?.length > 0 && (
							<Text className='text-xl text-white font-bold'>
								Search results for{' '}
								<Text className='text-accent'>{searchQuery}</Text>
							</Text>

						)}
					</>
				}
			/>
		</View>
	)
}

export default Search