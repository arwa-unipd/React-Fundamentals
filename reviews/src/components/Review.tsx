import type { TReview } from '../types'
const Review = ({ item }: { item: TReview }) => {
  return (
    <div className="review">
      <div className="img-container">
        <span className="quote">
          <i className="fa-solid fa-quote-right"></i>
        </span>
        <span className="circle"></span>
        <img src={item.image} alt={item.name} />
      </div>
      <div className="description">
        <h3>{item.name}</h3>
        <h4>{item.job}</h4>
        <p>{item.text}</p>
      </div>
    </div>
  )
}

export default Review
