import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import './NavBar.css'
import WritePost from "./WritePost";



const NavBar = () => {
  return (
    <>
    <div>
    <Navbar  className="nav">
       <Container className="navCont">
         <Navbar.Brand as={Link} to={'/'}>C . L O G</Navbar.Brand>
         <Nav className="me-auto">
           <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
           <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
           <Nav.Link as={Link} to={"/Blog"}>C.log</Nav.Link>
           <Nav.Link as={Link} to={"/WritePost"}>WritePost</Nav.Link>

         </Nav>
       </Container>
     </Navbar>
   </div>
   
   <div className="bodyTo">
   <Routes>
     <Route exact path="/" element={<Home/>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Blog" element={<Blog/>}/>
     <Route path="/WritePost" element={<WritePost/>}/>

   </Routes>
 </div>
 </>
  )
}

export default NavBar