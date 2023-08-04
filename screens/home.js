import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Pressable, FlatList, Image } from 'react-native'

import axios from 'axios';

import { URL } from '../constant/api';

export default function Home() {
    const [posts, setPosts] = useState();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(URL.getPosts);
                console.log(data);
                setPosts(data['hydra:member'])
            } catch (error) {
                console.log(error);
            }
        }

        fetchPosts();
    }, [])

    const renderPosts = ({ item }) => {
        const { id, content, media } = item

        console.log(media)
        return (
            <Pressable style={styles.container}
            // onPress={() => {
            //     navigation.navigate('Detail',{
            //       id: id
            //     })
            // }}
            >
                <Text>{ content }</Text>
                <Image
                    style={styles.img}
                    source={{
                        uri: media,
                    }}
                />
            </Pressable>
        )
    }

    return (
        <>
            <Text>page de posts</Text>
            <FlatList
                data={posts}
                renderItem={renderPosts}
                keyExtractor={(post) => post.id}
            />

        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    img: {
        resizeMode: 'contain',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
