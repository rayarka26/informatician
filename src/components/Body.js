import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import About from "./About";
import Home from "./Home";

import FAQ from "./faq";

import Contact from "./Contactus";


function Body() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/about" element={<About />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default Body;
