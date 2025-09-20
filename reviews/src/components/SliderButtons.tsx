const SliderButtons = ({
  onNext,
  onPrev,
}: {
  onNext: () => void
  onPrev: () => void
}) => {
  return (
    <div className="slider-btns">
      <button onClick={onPrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button onClick={onNext}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default SliderButtons
