import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";

const query = "Software Engineer";
const Nearbyjobs = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch("search", {
    query,
    num_pages: 1,
  });

  const showAll = () => {
    router.push(`/search/${query}`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn} onPress={showAll}>
            Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
              key={job?.job_id}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
