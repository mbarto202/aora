import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black" }}>
      <FlatList
        //data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 30, color: "white" }}>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View
            style={{
              flex: 1,
              marginVertical: 24,
              paddingHorizontal: 16,
              gap: 24,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 24,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "Poppins-Medium",
                    fontSize: 14,
                    color: "#f3f4f6",
                  }}
                >
                  Welcome Back
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-SemiBold",
                    fontSize: 24,
                    color: "#ffffff",
                  }}
                >
                  JSMastery
                </Text>
              </View>
              <View style={{ marginTop: 6 }}>
                <Image
                  style={{ width: 36, height: 40 }}
                  source={images.logoSmall}
                  resizeMode="contain"
                />
              </View>
            </View>
            <SearchInput
              title={""}
              value={""}
              placeholder="Search for a video topic"
              handleChangeText={function (text: string): void {
                throw new Error("Function not implemented.");
              }}
            />
            <View>
              <Text
                style={{
                  color: "#f3f4f6",
                  fontSize: 18,
                  fontFamily: "Poppins-Regular",
                  marginBottom: 12,
                }}
              >
                Latest Videos
              </Text>
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={{ color: "white" }}>
            <EmptyState />
          </Text>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
