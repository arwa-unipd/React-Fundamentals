import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import './index.css'
import List from './components/List'
import type { Tour } from './components/types'

function App() {
  const [tours, setTours] = useState<Tour[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const getData = async () => {
    const url = 'https://www.course-api.com/react-tours-project'
    try {
      setIsLoading(true)
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
      }

      const result: Tour[] = await response.json()
      console.log(result)
      setTours(result)
    } catch (error: unknown) {
      console.error(
        error instanceof Error ? error.message : 'An error occurred'
      )
    } finally {
      setIsLoading(false)
    }
  }

  const handleRemove = (id: string) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="main">
      {isLoading ? (
        <Loader />
      ) : (
        <List items={tours} onRemoveItem={handleRemove} refetch={getData} />
      )}
    </div>
  )
}

export default App
