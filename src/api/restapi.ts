import { request } from '@/utils/http'
import type { Post, User } from '@/types'

export function getPosts() {
  return request<Post[]>({
    url: '/posts',
    method: 'get',
    showFailToast: false,
  })
}

export function getUsers() {
  return request<User[]>({
    url: '/users',
    method: 'get',
  })
}

