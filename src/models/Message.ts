interface CommentObj {
  id: number
  comment: string
}

interface MessageObj {
  id: number
  message: string
  landName: string
  comments: CommentObj[]
}

export { type MessageObj, type CommentObj }
