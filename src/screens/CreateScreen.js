import React, { useContext, useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context)

}

const styles = StyleSheet.create({
})

export default CreateScreen
