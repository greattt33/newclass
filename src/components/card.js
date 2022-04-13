import React from 'react'
import styled from "styled-components"
import {FaFacebookSquare,FaGithub,FaLinkedin,FaWhatsappSquare} from "react-icons/fa"
import {MdEmail} from "react-icons/md"



const Card = props => {
  
  return (
     <Cardcontainer>
         <ImagesPosition><image src={props.avater} alt="pics"/></ImagesPosition>
         <NamePosition>{props.name}</NamePosition>
         <Social>
            <div className="icon"><a href={props.href1}><FaFacebookSquare/></a></div> 
             <div className="icon"><a href={props.href2}><FaGithub/></a></div> 
             <div className="icon"><a href={props.href3}><FaLinkedin/></a></div>
             <div className="icon"><a href={props.href4}><FaWhatsappSquare/></a></div>
             <div className="icon"><a href={props.href5}><MdEmail/></a></div>
         </Social>
         <Details>{props.Description}</Details>
     </Cardcontainer>
  )
}

const Cardcontainer=styled.div`
  width:250px;
  height:auto;
  display:flex;
  border:orange;
  background-color:midnightblue;
  box-shadow:1px 1px 1px 1px lightblue;
  color:white;
  font-family:sans-serif,helvetica,vandana;
  flex-direction:column;
  justify-content:center;
  align-items:space-around;
  @media screen and (max-width:860px){
      width:85%;
      height:auto;
  }
`
const NamePosition=styled.div`
  width:100%;
  height:auto;
  display:flex;
  font-size:24px;
  font-weight:bold;
  flex-direction:row;
  align-content:center;
  justify-content:space-evenly;
  @media screen and (max-width:860px){
      font-weight:19px;
  }
`
const Social=styled.div`
  width:100%;
  height:auto;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  .icon{
      width:50px;
      height:50px;
      color:blue;
  }
`
const Details=styled.p`
 width:85%;
 height:auto;
 font-size:19px;
 @media screen and (max-width:860px){
     font-size:15px;
 }
`
const ImagesPosition=styled.div`
  width:100px;
  height:100px;
  border-radius:50%;
  background-color:gainsboro;
  image{
    width:100px;
  height:100px;
  border-radius:50%;
  }
`


export default Card