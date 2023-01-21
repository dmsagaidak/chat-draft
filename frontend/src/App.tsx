import React from 'react';
import {Container, CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home";

function App() {
  return (
    <>
      <CssBaseline/>
      <main>
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="*" element={<h1>Not found</h1>}/>
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
