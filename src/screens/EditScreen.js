import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state } = useContext(Context)

  const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))

  const [title, setTitle] = useState(blogPost.title)
  const [content, setContent] = useState(blogPost.content)

  return <BlogPostForm />
}

const styles = StyleSheet.create({})

export default EditScreen

