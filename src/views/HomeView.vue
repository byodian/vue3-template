<script setup lang="ts">
import { ref } from 'vue'
import { getPosts, getUsers } from '@/api/restapi'
import type { Post, User } from '@/types'

const posts = ref<Post[]>()
const users = ref<User[]>()

getPosts().then((res) => {
  posts.value = res
})

getUsers().then((res) => {
  users.value = res
})
</script>

<template>
  <main>
    <ul v-for="post in posts" :key="post.id">
      <li>{{ post.title }}</li>
    </ul>
  </main>
</template>
