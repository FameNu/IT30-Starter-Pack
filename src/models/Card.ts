export type Land = {
  id: number
  attributes: {
    landName: string
    createAt: string
    updateAt: string
    publishedAt: string
    classRoom: string
  }
}

export type Schedule = {
  id: number
  attributes: {
    startClass: string
    endClass: string
    date: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
  }
}
