import Card from './Card'
import type { Tour } from './types'
const List = ({
  items,
  onRemoveItem,
  refetch,
}: {
  items: Tour[]
  onRemoveItem: (id: string) => void
  refetch: () => void
}) => {
  console.log(items.length)
  return (
    <div>
      <h2 className="title">
        Our Tours
        <div className="title-underline"></div>
      </h2>
      {items.length > 0 ? (
        <div className="tours">
          {items.map((item) => {
            const { id, image, info, name, price } = item
            return (
              <Card
                id={id}
                key={id}
                title={name}
                image={image}
                price={price}
                description={info}
                onRemove={onRemoveItem}
              />
            )
          })}
        </div>
      ) : (
        <div className="btn-container">
          <button className="btn" onClick={refetch}>
            refetch
          </button>
        </div>
      )}
    </div>
  )
}

export default List
