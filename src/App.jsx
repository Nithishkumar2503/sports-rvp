
import { MainLayout } from "./layouts/index";
import { Header } from "./components/index";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
function App({ children }) {
  const [isHead, setHead] = useState(false)
  const handleHeaderVisible = (value) => {
    setHead(value)
  }
  const handleMainScroll = () => {
    console.log('scrolled...')
  }

  return (
    <MainLayout
      children={
        <>
          <section
            onMouseEnter={() => {
              handleHeaderVisible(true)
            }}
            onMouseLeave={() => {
              handleHeaderVisible(false)
            }}
            id="main_header">
            {isHead ? <Header /> : null}

          </section>
          <section id="main_content">
            {children}
          </section>
        </>

      }
    >

    </MainLayout>

  )
}

export default App
