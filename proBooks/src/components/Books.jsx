import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Books = () => {

    let [fet, setfet] = useState();

    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
        .then((res)=>{
            console.log(res.data.books);
            let j = res.data.books
            setfet(j);
            console.log(fet);
        })
        .catch((error)=>{
            console.log(error)
        })
})

    return(
        <div>
            {
                fet.map((item,index)=>{
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
            }
        </div>
    )

}

export default Books
