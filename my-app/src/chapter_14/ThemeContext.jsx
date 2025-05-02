import React from "react";

const ThemeContext = React.createContext();  // 별도로 초기값을 설정하지 않음
ThemeContext.displayName = "ThemeContext";  // Context의 이름을 확인하기 위해 설정

export default ThemeContext;