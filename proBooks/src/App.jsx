import './App.css'
import Books from './components/Books'
import { useState, React, useEffect } from 'react'
import axios from 'axios'

function App() {
  let [datas,setData] = useState([])


  useEffect(() => {
    async function getBooks() {
      try {
        const response = await axios.get("https://reactnd-books-api.udacity.com/books", { headers: { 'Authorization': 'whatever-you-want' } });
        console.log(response);
        setData(response.data.books);
      } catch (error) {
        console.log(error);
      }
    }

    getBooks();
  }, []);
  return(
      <div>
          {
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
          }
      </div>
  )

}

export default App
