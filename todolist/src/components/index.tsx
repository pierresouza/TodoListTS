import React, { useState } from "react";
import { DivData } from "./DivData";
import { Header } from "./Header";
import { Container } from "./style";

export const MainApp = () => {
  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState<string[]>([]);
  const [removed, setRemoved] = useState<string[]>([]);
  const [value, setValue] = useState("");

  return (
    <Container>
      <Header />
      <DivData
        ischecked={check}
        setischecked={setCheck}
        istodos={todos}
        setistodos={setTodos}
        isremoved={removed}
        setisremoved={setRemoved}
        isvalue={value}
        setisvalue={setValue}
      />
    </Container>
  );
};
