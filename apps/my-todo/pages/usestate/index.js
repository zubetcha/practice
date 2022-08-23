import { useState } from "react";
import { flushSync } from "react-dom";
import { StyledTodoButton } from "../../components/TodoItem";

const UseState = () => {
  const [num, setNum] = useState(0);
  const [yes, setYes] = useState(0)
  const [no, setNo] = useState(0);

  console.log("useState render");
  
  const onClickButton = () => {
    // DESCRIBE: 일반 업데이트 
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);

    setYes(num + 1);
    setNo(num + 1);

    // DESCRIBE: 함수 업데이트 
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);
    setNum((prev) => prev + 1);

    // DESCRIBE: batch X
    // flushSync(() => {
    //   setNum(num + 1);
    // })

    // flushSync(() => {
    //   setYes(yes + 1);
    // });

    // flushSync(() => {
    //   setNo(no + 1);
    // });
  }

  let origin = { num: 0 };
  const change = Object.assign({}, 
    { num: num + 1 },
    { num: num + 1 },
    { num: num + 1 },
  );
  
  // console.log(origin)
  // console.log(change)

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", rowGap: "24px", padding: "60px 0 0"}}>
        <p style={{ fontSize: "24px", fontWeight: "700", color: "#2962FF" }}>{num}</p>
        <StyledTodoButton onClick={onClickButton} isDelete>버튼</StyledTodoButton>
      </div>
    </>
  );
}

export default UseState;