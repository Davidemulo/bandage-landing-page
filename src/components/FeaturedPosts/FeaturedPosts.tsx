import postOneImage from '../../assets/images/posts/postOne.jpg'
import postTwoImage from '../../assets/images/posts/postTwo.jpg'
import postThreeImage from '../../assets/images/posts/postThree.jpg'

import { Container } from '../common/Container/Container'
import { PostCard } from '../PostCard/PostCard'

import './FeaturedPosts.css'

type Post = {
  image: string
  category: string
  title: string
  description: string
  date: string
  comments: number
}

const posts: Post[] = [
  {
    image: postOneImage,
    category: 'Google',
    title: 'Loudest à la Madison #1',
    description:
      'We focus on ergonomics and meeting you where you work.',
    date: '22 April 2021',
    comments: 10,
  },
  {
    image: postTwoImage,
    category: 'Trending',
    title: 'Loudest à la Madison #2',
    description:
      'We focus on ergonomics and meeting you where you work.',
    date: '22 April 2021',
    comments: 10,
  },
  {
    image: postThreeImage,
    category: 'Trending',
    title: 'Loudest à la Madison #3',
    description:
      'We focus on ergonomics and meeting you where you work.',
    date: '22 April 2021',
    comments: 10,
  },
]

export function FeaturedPosts() {
  return (
    <section className="featuredPosts">
      <Container>
        <header className="featuredPostsHeader">
          <p className="featuredPostsEyebrow">
            Practice Advice
          </p>

          <h2 className="featuredPostsTitle">
            Featured Posts
          </h2>
        </header>

        <div className="featuredPostsGrid">
          {posts.map((post) => (
            <PostCard
              key={post.title}
              {...post}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}