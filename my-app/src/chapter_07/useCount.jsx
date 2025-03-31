import React, { useState } from "react";

// 초기 count값을 파라미터로 받아서 count라는 이름의 state를 생성하여 값을 제공하고 count 증감을 간단하게 할 수 있도록 함수를 제공하는 Hook 
function useCounter(initialValue) {
  // [변수명, set 함수명]
  const [count, setCount] = useState(initialValue);

  const increaseCount = () => setCount((count) => count + 1);
  const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;