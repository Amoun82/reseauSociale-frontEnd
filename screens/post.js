import { StyleSheet, Text, ScrollView, TextInput, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

import axios from 'axios'

import { URL } from '../constant/api'



export default function Commentaire() {
    const [user,setUser] = useState({})
    const [post,setPost] = useState({
        content: "",
        media: "",
        intLike: 0,
        createdAt: new Date().toISOString(),
        user: '/api/users/1'
    })
    
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const { data } = await axios.get(URL.getUsers);
                console.log(data);
                setUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    },[]);

    const handleChange = (index, value) => {
        setPost({ ...post, [index]: value})
    }

    const handleSubmit = async () => {
        await axios.post(URL.postPost, {
            content: post.content,
            media: post.media,
            intLike: 0,
            createdAt: new Date().toISOString(),
            user: '/api/users/1'
        });
    }
    
    return (
        <ScrollView>
            {console.log(post)}
            <Text>Ajouter un post</Text>
            <TextInput
                style={styles.input}
                placeholder='ajouter le nom du posts'
                onChangeText={(value) => handleChange("content", value)}
            />
            <TextInput
                style={styles.input}
                placeholder='ajouter chemin du post'
                onChangeText={(value) => handleChange("media", value)}
            />

            <Button
                onPress={handleSubmit}
                title="Poster"
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
    },
});
