import './PostCard.css'
import clockIcon from '../../../assets/icons/clock.svg'
import commentIcon from '../../../assets/icons/comment.svg'
import arrowRightIcon from '../../../assets/icons/arrowRight.svg'

type PostCardProps = {
  image: string
  categories: string[]
  title: string
  description: string
  date: string
  comments: number
}

export function PostCard({
  image,
  categories,
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

        <span className="postCardBadge">
          NEW
        </span>
      </div>

      <div className="postCardContent">
        <div className="postCardCategories">
          {categories.map((category, index) => (
            <span
              key={`${category}-${index}`}
              className={
                index === 0
                  ? 'postCardCategory postCardCategoryActive'
                  : 'postCardCategory'
              }
            >
              {category}
            </span>
          ))}
        </div>

        <h3 className="postCardTitle">
          {title}
        </h3>

        <p className="postCardDescription">
          {description}
        </p>

        <div className="postCardMeta">
          <span className="postCardMetaItem">
            <span
              className="postCardMetaIcon"
              aria-hidden="true"
            >
            <img
            src={clockIcon}
            alt=""
            className="postCardMetaIcon"
            />
            </span>

            {date}
          </span>

          <span className="postCardMetaItem">
            <span
              className="postCardMetaIcon"
              aria-hidden="true"
            >
            <img
            src={commentIcon}
            alt=""
            className="postCardMetaIcon"
            />
            </span>

            {comments} comments
          </span>
        </div>

        <a
          href="#learn-more"
          className="postCardLink"
        >
          Learn More

          <span
            className="postCardLinkIcon"
            aria-hidden="true"
          >
            <img
            src={arrowRightIcon}
            alt=""
            className="postCardMetaIcon"
            />
          </span>
        </a>
      </div>
    </article>
  )
}