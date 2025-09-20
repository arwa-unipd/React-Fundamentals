import { useState } from 'react'
import reviews from './data'
import Review from './components/Review'
import SliderButtons from './components/SliderButtons'
import Button from './components/Button'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNext = () => {
    if (currentIndex === reviews.length - 1) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(reviews.length - 1)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleClick = () => {
    const newIndex = Math.random() * (reviews.length - 1)
    setCurrentIndex(Math.round(newIndex))
  }
  return (
    <div className="slider">
      <Review item={reviews[currentIndex]} />
      <SliderButtons onNext={handleNext} onPrev={handlePrev} />
      <Button text={'Surprise Me'} onClick={handleClick} />
    </div>
  )
}

export default App
