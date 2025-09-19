import { useState } from 'react'
import './index.css'
import data from './data'

function App() {
  const [bData, setBData] = useState(data)

  return (
    <main>
      <div className="container">
        {bData.length === 0 ? (
          <h3>No Birthdays Today</h3>
        ) : (
          <h3>{bData.length} Birthdays Today</h3>
        )}

        {bData.map((person) => {
          const { id, name, age, image } = person
          return (
            <div key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </div>
          )
        })}
        {bData.length !== 0 && (
          <button
            className="btn btn-block btn-hipster"
            onClick={() => setBData([])}
          >
            Clear All
          </button>
        )}
      </div>
    </main>
  )
}

export default App
