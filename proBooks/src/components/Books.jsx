import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Books = () => {

    let [datas,setData] = useState()

    // axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
    // .then((res)=>{
    //     console.log(res);
    //     let j = res.data.books
    //     console.log(j);
    //     setData(j)
    //     console.log(datas);
    // })
    // .catch((error)=>{
    //     console.log(error)
    // })

    async function getBooks(){
        try{
            const response = await axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
            console.log(response)
        } catch(error){
            console.log(error);
        }
    }

    return(
        <div>
            {/* {
                datas.map((item,index)=>{
                    return(
                        <div key={index}>
                            {item.title}
                            <br /><br />
                            <img src={item.imageLinks.thumbnail} />
                            <div>
                                {item.authors}
                            </div>
                            <br />
                            {item.description}
                            
                            <br />
                            <br />

                            <hr />

                        </div>
                    )
                })  
            } */}
        </div>
    )

}

export default Books
