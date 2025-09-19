import Card from './Card'
import type { Tour } from './types'
const List = ({
  items,
  onRemoveItem,
}: {
  items: Tour[]
  onRemoveItem: (id: string) => void
}) => {
  return (
    <div>
      <h2 className="title">
        Our Tours
        <div className="title-underline"></div>
      </h2>
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
    </div>
  )
}

export default List
