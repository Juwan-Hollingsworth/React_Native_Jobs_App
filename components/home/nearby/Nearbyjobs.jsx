import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import NearbyjobCard from '../../common/cards/nearby/NearbyJobCard'
import { isLoaded } from 'expo-font'
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter()
  //loading spinner toggle

  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  })

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      {/* where our jobs will be held */}
      <View style={styles.cardsContainer}>
        {/* check if data is still loading - if so, show loading spinner if not display flatlist or error*/}
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyjobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default Nearbyjobs
