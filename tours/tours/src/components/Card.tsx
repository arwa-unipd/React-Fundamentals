import { useState } from 'react'

type CardProps = {
  id: string
  title: string
  image: string
  price: string
  description: string
  onRemove: (id: string) => void
}

const Card = ({
  id,
  title,
  image,
  price,
  description,
  onRemove,
}: CardProps) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt={title} />
        <span>${price}</span>
      </div>
      <div className="description">
        <h4>{title}</h4>
        <p>
          {showMore ? description : description.slice(0, 200).concat('...')}{' '}
        </p>
        <button className="info-btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
        <button className="btn btn-block " onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  )
}

export default Card
