import React, {useState, useEffect} from 'react';
import MessageItem from "./features/Components/MessageItem";
import ChatForm from "./features/Components/ChatForm";
import {Message} from "./types";

import {Container, CssBaseline} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./Containers/Home";


const url = 'http://localhost:8000/messages';

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
