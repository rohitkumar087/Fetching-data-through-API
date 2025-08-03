import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [data,setData] = useState([])

  const fetchDetails = async() =>{
    const Details = await axios.get('https://dummyjson.com/products') 
    console.log(Details)
    setData(Details.data.products)
  }
  
  useEffect(()=>{
    fetchDetails()
  },[])

  return (
    <div>
      <h1>Fetch Data</h1>
      <div style={{display:"flex",flexWrap:"wrap", gap:"20px"}}>
        {data && data.map((item)=>(
        <div style={{border:"2px solid", width:"400px", fontSize:"12px", fontWeight:"700"}}>
          <img src={item.thumbnail} alt="" style={{height:"200px"}}/>
          <h3 key={item.id}>{item.title}</h3>
          <p>{item.description}</p>
          <p>{item.category}</p>
          <p>Item Price : {item.price}</p>
          <p>Discount Price : {item.discountPercentage}</p>
          <p>Rating : {item.rating}</p>
          <p>WArranty : {item.warrantyInformation}</p> 
          {item.reviews && item.reviews.length > 0 ? (
              <div>
                <p><strong>Reviews:</strong></p>
                {item.reviews.map((review, index) => (
                  <div key={index} >
                    <p>⭐ Rating: {review.rating}</p>
                    <p>🗣️ Comment: {review.comment}</p>
                    <p>👤 Reviewer: {review.reviewerName}</p>
                    <p>📧 Email: {review.reviewerEmail}</p>
                    <hr />
                  </div>
                ))}
              </div>
            ) : (
              <p>No reviews available.</p>
            )}         
        </div>
        ))}
      </div>
    </div>
  )
}

export default App
