import { useState, useRef } from "react";

export default function Player() {
  // Refs(참조)를 사용하면 코드가 간결해진다.
  // 처음 랜더링 될때 playerName.current는 정의되지 않는다.
  // Rsfs가 바뀌어도 컴포넌트 함수가 재실행되지 않는다.
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  // const [submitted, setsubmitted] = useState(false);

  // function handleChange(event) {
  //   setsubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    // setsubmitted(true);

    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      {/* <h2>{submitted ? enteredPlayerName : "익명"} 님 환영합니다</h2> */}
      <h2>{enteredPlayerName ?? "익명"} 님 환영합니다</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={handleChange}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>이름 설정</button>
      </p>
    </section>
  );
}
