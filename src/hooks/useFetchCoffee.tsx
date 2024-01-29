import { useState, useEffect } from 'react'
import { coffee } from '../utils/interfaces'

const useFetchCoffee = (): coffee[] | [] => {
  const [data, setData] = useState<coffee[] | []>([])
  const url = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(error => console.error(`Error when fetch api: ${error}`))
  }, [])

  return data
}

export default useFetchCoffee