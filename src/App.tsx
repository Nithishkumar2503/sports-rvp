import { MainLayout } from "./layouts/index";
import { Header } from "./components/index";
import { useState } from "react";
import { ChildrenProps } from "./type";
import "./App.css";

function App({ children }: ChildrenProps) {
  const [isHead, setHead] = useState(false);
  const handleHeaderVisible = (value: boolean) => {
    setHead(value);
  };
  return (
    <MainLayout
      children={
        <>
          <section
            onMouseEnter={() => {
              handleHeaderVisible(true);
            }}
            onMouseLeave={() => {
              handleHeaderVisible(false);
            }}
            id="main_header"
          >
            {isHead ? <Header child={undefined} /> : null}
          </section>
          <section id="main_content">{children}</section>
        </>
      }
    ></MainLayout>
  );
}

export default App;
