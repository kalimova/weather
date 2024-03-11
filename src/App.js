import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Detail from "./Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [city, setCity] = useState("Bishkek");

  return (
    <>
      <BrowserRouter>
        <Header setCity={setCity} />
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Detail />} path="/detail" />
          {/* <Main city={city} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
