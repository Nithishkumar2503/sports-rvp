import { MainLayout } from "./layouts/index";
import { Header } from "./components/index";
import { useState } from "react";
import { ChildrenProps } from "./type";

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
            className="h-[90px] w-[100vw] bg-green-200"
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
          <section
            className="w-screen overflow-y-auto h-[calc(100%-5.6rem)] bg-primary"
            id="main_content"
          >
            {children}
          </section>
        </>
      }
    ></MainLayout>
  );
}

export default App;
