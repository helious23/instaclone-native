import React from "react";
import PropTypes from "prop-types";
import { ActivityIndicator, View } from "react-native";
import { theme } from "../styles";
export const ScreenLayout = ({ loading, children }) => {
  return (
    <View
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <ActivityIndicator color={theme === "dark" ? "#fff" : "#000"} />
      ) : (
        children
      )}
    </View>
  );
};

ScreenLayout.propTypes = {
  loading: PropTypes.bool.isRequired,
};
