import React from "react";
import { LinearGradient } from "expo-linear-gradient";


interface BackGroundProps {
  colors?: string[];
}

const Background: React.FC<BackGroundProps> = ({ children, colors=["#716750", "#454C2F", "#405F49", "#146784"] }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={colors}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;
