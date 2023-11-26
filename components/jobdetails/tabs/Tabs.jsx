import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { SIZES } from "../../../constants";

import styles from "./tabs.style";
const TabButton = ({ name, activeTab, handleSearchType }) => (
  <TouchableOpacity
    style={styles.btn(name, activeTab)}
    onPress={handleSearchType}
  >
    <Text style={styles.btnText(name, activeTab)}>{name}</Text>
  </TouchableOpacity>
);
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            handleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
