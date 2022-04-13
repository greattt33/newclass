import React,{useState} from "react"
import styled from "styled-components"
import {addDoc} from "firebase/firestore"
import {userCollectionRef} from "./database"
import {storage} from "./firebase-config"
import {ref,uploadBytes} from "firebase/storage"

const EnterDetail=()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [facebook,setFacebook]=useState("")
    const [github,setGithub]=useState("")
    const [whatsapp,setWhatsapp]=useState("")
    const [description,setDescription]=useState("")
    const [linkedin,setLinkedin]=useState("")
    const [imageUpload,setImageUpload]=useState(null)

    const uploadImage=()=>{
        if(imageUpload==null) return;
        const imageRef=ref(storage,`image/${imageUpload.name + Math.random()}`)
        uploadBytes(imageRef,imageUpload).then(()=>{
          alert("picture uploaded")
        })

    }
      
    const addUser= async()=>{
       await addDoc(userCollectionRef,{name:setName,email:setEmail,facebook:setFacebook,github:setGithub,whatsapp:setWhatsapp,description:setDescription,linkedin:setLinkedin})
    }

    return (
      <DetailBody>
          <div>
              <label>Name</label>
              <Name value={name} onChange={(e)=>{setName(e.target.value)}}></Name>
              <label>Email</label>
              <Email value={email} onChange={(e)=>{setEmail(e.target.value)}}></Email>
              <label>Facebook</label>
              <Facebook value={facebook} onChange={(e)=>{setFacebook(e.target.value)}}></Facebook>
              <label>Github</label>
              <Github value={github} onChange={(e)=>{setGithub(e.target.value)}}></Github>
              <label>Linkedin</label>
              <Linkedin value={linkedin} onChange={(e)=>{setLinkedin(e.target.value)}}></Linkedin>
              <label>Whatsapp</label>
              <Whatspp value={whatsapp} onChange={(e)=>{setWhatsapp(e.target.value)}}></Whatspp>
              <label>Description</label>
              <Description value={description} onChange={(e)=>{setDescription(e.target.value)}}></Description>
              <label>Upload Pictures</label>
              <span><input type="file" onChange={(e)=>{setImageUpload(e.target.files[0])}}/><Button onClick={uploadImage}></Button></span>
              <Button onClick={addUser}>ADD</Button>

          </div>
          
      </DetailBody>
    )
}

const Button=styled.button`
  width:150px;
  height:50px;
  border:none;
  background-color:orange;
  color:white;
  border-radius:5px;
  &:focus{
      background-color:none;
      color:blue;
      border:1px solid blue;
  }
`

const Name=styled.input`
 width:80%;
 height:50px;
 border:none;
 background-color:whitesmoke;
 &:focus{
     border:1px solid blue;
 }
`
const Email=styled.input`
width:80%;
 height:50px;
 border:none;
 background-color:whitesmoke;
 &:focus{
     border:1px solid blue;
 }
`
const Linkedin=styled.input`
 width:80%;
 height:50px;
 background-color:whitesmoke;
 border:none;
 &:focus{
     border:1px solid blue;
 }
`
const Facebook=styled.input`
 width:80%;
 height:50px;
 background-color:whitesmoke;
 border:none;
 &:focus{
     border:1px solid blue;
 }
`
const Description=styled.textarea`
 font-family:sans-serif;
 font-size:19px;
 width:80%;
 height:200px;
 background-color:whitesmoke;
 border:none;
 &:focus{
     border:1px solid blue;
 }
`
const Github=styled.input`
 width:80%;
 height:50px;
 background-color:whitesmoke;
 border:none;
 &:focus{
     border:1px solid blue;
 }
`
const Whatspp=styled.input`
 width:80%;
 height:50px;
 background-color:whitesmoke;
 border:none;
 &:focus{
     border:1px solid blue;
 }
`
const DetailBody=styled.div`
   width:100vw;;
   height:100vh;
   display:grid;
   place-items:center;
   div{
       width:400px;
       height:auto;
       border-radius:10px;
       border:1px solid orange;
       box-sizing:1px 1px 1px 1px lightblue;
       display:flex;
       flex-direction:column;
       align-items:space-around;
       justify-content:center;
       span{
           width:80%;
           display:flex;
           flex-direction:row;
       }
   }
`


export default EnterDetail