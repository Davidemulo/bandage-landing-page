import './PostCard.css'

type PostCardProps = {
  image: string
  category: string
  title: string
  description: string
  date: string
  comments: number
}

export function PostCard({
  image,
  category,
  title,
  description,
  date,
  comments,
}: PostCardProps) {
  return (
    <article className="postCard">
      <div className="postCardImageWrapper">
        <img
          src={image}
          alt=""
          className="postCardImage"
        />
      </div>

      <div className="postCardContent">
        <p className="postCardCategory">
          {category}
        </p>

        <h3 className="postCardTitle">
          {title}
        </h3>

        <p className="postCardDescription">
          {description}
        </p>

        <div className="postCardMeta">
          <span>{date}</span>

          <span>
            {comments} comments
          </span>
        </div>

        <a
          href="#learn-more"
          className="postCardLink"
        >
          Learn More
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}