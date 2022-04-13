import React,{useState,useEffect} from "react"
import styled from "styled-components"
import {getDoc} from "firebase/firestore"
import {userCollectionRef} from "./database"
import {storage} from "./firebase-config"
import {ref} from "firebase/storage"
import {listAll, getDownloadURL} from "firebase/storage"

import Card from "./card"

const imageListRef=ref(storage,"images/")


const Home= ()=>{
    const [users,setUsers]=useState([])
    const [imageList,setImageList]=useState([])
   

    useEffect(
        ()=>{
            listAll(imageListRef).then((response)=>{
                response.items.forEach((item)=>{
                    getDownloadURL(item).then((url)=>{
                      setImageList((prev)=>[...prev,url])
                    })
                })
            })
        },
        ()=>{
          const getUser= async()=>{
              const data=await getDoc(userCollectionRef)
              setUsers(data.doc.map((doc)=>({...doc.data(),id:doc.id})))
          }
          getUser()
        },[]
    )


    return(
        <HomeBody>

            <Content>
                {imageList.map((url)=>{
                    {users.map((user)=>{
                        return(
                            <Card name={user.name} avater={url} Description={user.description} href1={`${user.facebook}`}
                            href2={`${user.linkedin}`}
                            href3={`${user.github}`}
                            href4={`${user.whatsapp}`}
                            href5={`${user.email}`} />
                        )
                    })
                        }
                })}
               
            </Content>
        </HomeBody>
    )
}

const HomeBody=styled.div`
  width:100%;
  height:auto;
  display:grid;
  place-items:center;
  background-color:midnightblue;
`


const Content=styled.div`
width:90%;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
height:auto;
`
export default Home