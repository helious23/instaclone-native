import React from "react";
import { Ionicons } from "@expo/vector-icons";
export const TabIcon = ({ iconName, color, focused }) => {
  return (
    <Ionicons
      name={focused ? iconName : `${iconName}-outline`}
      color={color}
      size={26}
    />
  );
};
