 import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./comp/Navbar/navbar"
//import TeamMember from "./comp/TeamMember/TeamMember"
import { Helmet } from "react-helmet";

import Home from "./pages/home"
import Mint from "./pages/mint"
import NewsLetter from "./comp/newsLetter/newsLetter";
import Footer from "./comp/footer/footer"
import Roadmap from "./pages/roadmap";


const App= () => {
    return (
        
            
        <Router>
            <Helmet>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
            </Helmet>
            <NavBar/>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/mint" element={<Mint />} />
                <Route path="/roadmap" element={<Roadmap />} />
                    
            </Routes>

            <div className={"Container"}>
                <NewsLetter></NewsLetter>
                <Footer></Footer>

            </div>
        </Router>
        
       
    )
}

export default App;