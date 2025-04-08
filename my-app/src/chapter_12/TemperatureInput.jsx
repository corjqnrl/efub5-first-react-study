const scaleNames = {
  c: "섭씨",
  f: "화씨",
};

function TemperatureInput(props) {  // scale, temperature 를 props로 받음
  const handleChange = (event) => {
    props.onTemperatureChange(event.target.value);  // 상위컴포넌트로 전달된 값 전달
  };

  return (
    <fieldset>
      <legend>
        온도를 입력해주세요(단위:{scaleNames[props.scale]});
      </legend>
      <input value={props.temperature} onChange={handleChange} />
    </fieldset>
  );
}

export default TemperatureInput;