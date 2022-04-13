import {Link} from "react-router-dom"
import React from "react"
import styled from "styled-components"

const Navigation=()=>{
    return(
        <Nav>
             <Link to="/" style={{textDecoration:"none"}}><li>Home</li></Link>
             <Link to="/enterdetail" style={{textDecoration:"none"}}><li>Enter Detail</li></Link>
        </Nav>
    )
}

const Nav=styled.div`
  width:60%;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  font-size:19px;
  text-decoration:none;
  li{
      text-decoration:none;
      display:inline;
      color:red;
  }

`

export default Navigation