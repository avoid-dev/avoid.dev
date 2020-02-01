import React from "react"
import "./style.scss"

import Emoji from "react-twemoji"
import { format } from "timeago.js"

interface IAuthorProps {
  name: string
  avatar: string
  link: string
}
interface IPostProps {
  emoji: string
  title: string
  time: number
  link: string
  authors: IAuthorProps[]
}

const SAMPLE_ALIREZA: IAuthorProps = {
  name: "Alireza Sheikholmolouki",
  avatar: "https://avatars0.githubusercontent.com/u/2771377?s=64&v=4",
  link: "https://github.com/Alireza29675"
}
const SAMPLE_POUYA: IAuthorProps = {
  name: "Pouya MozaffarMagham",
  avatar: "https://avatars1.githubusercontent.com/u/11475858?s=64&v=4",
  link: "https://github.com/pmzi"
}

const SAMPLE_DATA: IPostProps[] = [
  {
    emoji: "🎇",
    title: "Building Multi-Directional Layouts",
    time: 1580161860146,
    link: "https://google.com",
    authors: [SAMPLE_ALIREZA]
  },
  {
    emoji: "🌾",
    title: "Make services a natural part of redux architecture",
    time: 1579131820146,
    link: "https://medium.com",
    authors: [SAMPLE_POUYA]
  },
  {
    emoji: "🎩",
    title: "The New Racism Is Polite Racism",
    time: 1578061860146,
    link: "https://apple.com",
    authors: [SAMPLE_POUYA, SAMPLE_ALIREZA]
  },
  {
    emoji: "🎇",
    title: "Building Multi-Directional Layouts",
    time: 1580161860146,
    link: "https://google.com",
    authors: [SAMPLE_ALIREZA]
  },
  {
    emoji: "🌾",
    title: "Make services a natural part of redux architecture",
    time: 1579131820146,
    link: "https://medium.com",
    authors: [SAMPLE_POUYA]
  },
  {
    emoji: "🎩",
    title: "The New Racism Is Polite Racism",
    time: 1578061860146,
    link: "https://apple.com",
    authors: [SAMPLE_ALIREZA, SAMPLE_POUYA]
  },
  {
    emoji: "🎇",
    title: "Building Multi-Directional Layouts",
    time: 1580161860146,
    link: "https://google.com",
    authors: [SAMPLE_ALIREZA]
  },
  {
    emoji: "🌾",
    title: "Make services a natural part of redux architecture",
    time: 1579131820146,
    link: "https://medium.com",
    authors: [SAMPLE_POUYA]
  },
  {
    emoji: "🎩",
    title: "The New Racism Is Polite Racism",
    time: 1578061860146,
    link: "https://apple.com",
    authors: [SAMPLE_POUYA, SAMPLE_ALIREZA]
  },
  {
    emoji: "🎇",
    title: "Building Multi-Directional Layouts",
    time: 1580161860146,
    link: "https://google.com",
    authors: [SAMPLE_ALIREZA]
  },
  {
    emoji: "🌾",
    title: "Make services a natural part of redux architecture",
    time: 1579131820146,
    link: "https://medium.com",
    authors: [SAMPLE_POUYA]
  },
  {
    emoji: "🎩",
    title: "The New Racism Is Polite Racism",
    time: 1578061860146,
    link: "https://apple.com",
    authors: [SAMPLE_ALIREZA, SAMPLE_POUYA]
  },
  {
    emoji: "🎇",
    title: "Building Multi-Directional Layouts",
    time: 1580161860146,
    link: "https://google.com",
    authors: [SAMPLE_ALIREZA]
  },
  {
    emoji: "🌾",
    title: "Make services a natural part of redux architecture",
    time: 1579131820146,
    link: "https://medium.com",
    authors: [SAMPLE_POUYA]
  },
  {
    emoji: "🎩",
    title: "The New Racism Is Polite Racism",
    time: 1578061860146,
    link: "https://apple.com",
    authors: [SAMPLE_POUYA, SAMPLE_ALIREZA]
  }
]

export const AuthorIcon = ({ name, avatar, link }: IAuthorProps) => {
  return (
    <div className="author">
      <img src={avatar} alt={name} />
    </div>
  )
}

export const Post = ({ emoji, title, authors, time }: IPostProps) => {
  return (
    <div className="Post">
      <Emoji options={{ className: "emoji" }}>{emoji}</Emoji>
      <h3>{title}</h3>
      <div className="authors">
        {authors.map((authorData, i) => {
          return <AuthorIcon key={i} {...authorData} />
        })}
      </div>
      <time>{format(time)}</time>
    </div>
  )
}

export const Posts = () => {
  const posts = SAMPLE_DATA // TODO: Change this

  return (
    <div className="Posts">
      {posts.map((postData, i) => (
        <Post key={i} {...postData} />
      ))}
    </div>
  )
}
