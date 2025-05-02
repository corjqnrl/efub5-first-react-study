import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  const { theme, toggleTheme } = useContext(ThemeContext); // theme context 값을 가져오기 위해 useContext 훅 사용

  return (
    <div 
        style={{
          width: "100vw",
          hegiht: "100vh",
          padding: "1.5rem",
          backgroundcolor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white",
        }}
    >
      <p>안녕하세요, 테마 변경이 가능한 웹사이트 입니다.</p>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}

export default MainContent;