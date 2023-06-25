import axios from "axios"
import { useEffect, useState } from "react"

export const Home=()=>{
    const [cat,setCat]=useState([])
    useEffect(()=>{
        (async()=>{
            const res = await axios.get('api/categories/')
            console.log(res.data.categories); 
            setCat(res.data.categories)
        })() //this is an IIFE-> Immediately invoked function execution
    },[])
    return(
        <>
            <h1>Home Page</h1>
            {cat.map(item=>(
                <div key={item.id} style={{display:"flex"}}>
                    <div style={{backgroundColor:'purple',height:'100px', width:'100px',borderRadius:'50%'}}></div>
                    <p>{item.categoryName}</p>
                </div>
                )
            )}
        </>
    )
}