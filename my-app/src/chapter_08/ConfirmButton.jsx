import React, { useState } from "react";

// 함수 컴포넌트 사용
function ConfirmButton(props) {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
  };

  return (
    <button onClick={handleConfirm} disabled={isConfirmed}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}

/*
class ConfirmButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {  // 확인 여부 저장
      isConfirmed: false,
    };

    // this.handleConfirm = this.handleConfirm.bind(this); // bind 사용
  }

  handleConfirm = () => {  // Arrow function 사용
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }
  

  
  // bind 사용
  handleConfirm() {  
    this.setState((prevState) => ({
      isConfirmed: !prevState.isConfirmed,
    }));
  }
  

  render() {
    return (
      <button
        onClick={this.handleConfirm}
        disabled={this.state.isConfirmed}
      >
        {this.state.isConfirmed ? "확인됨" : "확인하기"}
      </button>
    );
  }
}
*/
export default ConfirmButton;