<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchData } from '@/utils/fetchData'
import { type CommentObj } from '@/models/Message'
import CommentSVG from '@/assets/svg/CommentSVG.vue'
import { useRoute } from 'vue-router'
import { io } from 'socket.io-client'
import SEND from '@/assets/svg/send.svg'

const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const route = useRoute()
const socket = io(BASE_URL)

const comments = ref<CommentObj[]>([])
const topic = ref('')
const newComment = ref('')

const mapCommentData = (data: any[]): CommentObj[] => {
  return data.map((item) => ({
    id: item.id,
    comment: item.attributes.comment
  }))
}

const initComments = async () => {
  try {
    const response = await fetchData(`/api/blogs/${route.params.bid}?populate=comments`)
    const data = response.data
    if (data) {
      // @ts-ignore
      topic.value = data.attributes.message
      // @ts-ignore
      comments.value = mapCommentData(data.attributes.comments.data)
    }
  } catch (error) {
    console.error('Error fetching comments:', error)
    comments.value = []
  }
}

onMounted(() => {
  socket.on('connect', () => {
    initComments()
    socket.emit('joinRoom', route.params.bid)
  })
})

socket.on('recvComments', (newComment) => {
  comments.value.push(newComment)
})

const addNewComment = async (replyComment: string) => {
  const newCommentObj = { data: { comment: replyComment, topic: route.params.bid } }
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/api/blog-comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCommentObj)
    })

    const result = await response.json()
    socket.emit('sendComments', {
      id: result.data.id,
      comment: result.data.attributes.comment,
      topic: newCommentObj.data.topic
    })
  } catch (error) {
    console.error('Error Add new comment:', error)
  }
}

const submitComment = (replyComment: string) => {
  alert('Comment submitted!')
  if (replyComment.trim()) {
    addNewComment(replyComment)
  }
  newComment.value = ''
}
</script>

<template>
  <div class="bg-primary p-3 rounded shadow-lg mb-3">
    <h1 class="font-bold text-3xl mt-4 text-center">{{ topic }}</h1>
    <div class="flex justify-end items-center">
      {{ comments.length }}
      <CommentSVG />
    </div>
  </div>
  <div class="bg-white p-6 rounded shadow-lg">
    <h2 class="font-bold text-xl mb-4">comments</h2>
    <div v-for="comment in comments" :key="comment.id" class="bg-gray-200 p-4 rounded mb-2">
      <p>{{ comment.comment }}</p>
    </div>
    <div class="mt-4 flex justify-center content-center outline rounded outline-zinc-400">
      <input
        v-model="newComment"
        type="text"
        placeholder="Add Comment..."
        class="p-2 w-full focus:outline-none"
        @keypress.enter="submitComment(newComment)"
      />
      <img
        :src="SEND"
        class="m-auto mr-2 p-1 rounded-lg text-white lg:h-10 md:h-10 h-8 cursor-pointer"
        @click="submitComment(newComment)"
      />
    </div>
    <div class="w-full text-center mt-1 text-gray-400">
      <span class="text-gray-400 font-semibold">warning: </span>this is a public comment section.
      once submitted, it cannot be deleted.
      <br />
      <span class="text-gray-400 font-semibold">please be respectful to others!</span>
    </div>
  </div>
</template>

<style scoped></style>
