import { createClient } from 'newt-client-js'

interface tag {
  _id: string
  name: string
  slug: string
}

export interface Article {
  title: string
  slug: string
  body: string
  coverImage: {
    _id: string
    altText: string
    description: string
    fileName: string
    fileType: string // TODO: 詳細に定義する
    height: number
    metadata: any // TODO: 型を確認
    src: string
    title: string
    width: number
  }
  _sys: {
    raw: {
      createdAt: Date
      updatedAt: Date
      firstPublishedAt: Date
      publishedAt: Date
    }
  }
  tags: tag[]
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})