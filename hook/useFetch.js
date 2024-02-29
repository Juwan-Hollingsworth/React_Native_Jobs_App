import { useState, useEffect } from 'react'
import axios from 'axios'

const rapidAPIKey = 'ea7266ed7bmsh361b7f31e9185bep104572jsnfec9256392cb'

//useFetch will utilize the endpoint prop to fetch data
const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  //template string that take the prop and alters the api call
  //configure options for the API request
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': rapidAPIKey,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
    params: { ...query },
  }
  //fetch data from the API
  const fetchData = async () => {
    setIsLoading(true)

    try {
      //try to make a API request using Axios
      const response = await axios.request(options)
      setData(response.data.data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      alert('There is an error in the request')
    } finally {
      setIsLoading(false)
    }
  }
  //useEffect hook to trigger the fetchData when the component mounts
  useEffect(() => {
    fetchData()
  }, [])
  //function to manually refetch data
  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  //return the state variables and refresh functions
  return { data, isLoading, error, refetch }
}

export default useFetch
