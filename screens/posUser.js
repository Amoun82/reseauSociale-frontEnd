import { StyleSheet, Text, TextInput, Button, ScrollView  } from 'react-native'
import React, { useState } from 'react'

import axios from 'axios'

import { URL } from '../constant/api'

export default function PostUser() {
    const[user, setUser] = useState({
        email: "",
        pseudo: "",
        password: "",
        roles: ["ROLE_USER"],
    })

    const handleChange = (index, value) => {
        setUser({ ...user, [index]: value})
    }

    const handleSubmit = async () => {
        await axios.post(URL.postUser, {
            email: user.email,
            password: user.password,
            roles: ["ROLE_USER"],
            pseudo: user.pseudo
        });
    }

    return (
        <ScrollView>
            {console.log(user)}
            <Text>Inscription</Text>
            <TextInput
                style={styles.input}
                placeholder='pseudo'
                onChangeText={(value) => handleChange("pseudo",value)}
            />
            <TextInput
                style={styles.input}
                placeholder='email'
                onChangeText={(value) => handleChange("email",value)}
            />
            <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText={(value) => handleChange("password",value)}
            />

            <Button
                onPress={handleSubmit}
                title="S'incrire"
            />            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: 'red',
        padding: 10,
    },
});

