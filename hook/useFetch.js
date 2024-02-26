import { useState, useEffect } from 'react'
import axios from 'axios'

import { RAPID_API_KEY } from '@env'
const rapidAPIKey = RAPID_API_KEY

//useFetch will utilize the endpoint prop to fetch data
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  //template string that take the prop and alters the api call
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidAPIKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  }

  const fetchData = async () => {
    setIsLoading(true)

    try {
      const response = await axios.request(options)
      setData(response.data.data)
      isLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }
}
