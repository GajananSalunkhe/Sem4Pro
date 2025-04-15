import React, { useEffect, useState } from 'react'

const Rating = ({initialeRating, onRate}) => {
  const [rating, setRating] = useState(initialeRating || 0)

  const handleRating =(value) =>{
    setRating(value);
    if(onRate) onRate(value)
  }
useEffect(()=>{
  if(initialeRating){
    setRating(initialeRating)
  }
},[initialeRating]);  
  return (
    <div>
      {Array.from({length:5}, (_, index)=>{
        const starValue = index + 1;
        return(
          <span key={index} className={`text-xl sm:text-2xl cursor-pointer transition-colors
           ${starValue <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
           onClick={()=> handleRating(starValue)}>
            &#9733;
          </span>
        )
      })}
    </div>
  )
}

export default Rating
