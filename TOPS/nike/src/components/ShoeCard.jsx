import React from 'react'

const ShoeCard = ({ imgURl, changeBigShoeImage, bigShoeImag }) => {
 return (
  <div>
   <div className=
    {`border-2
     rounded-xl
    ${
    bigShoeImag === imgURl
    ? 'border-red-400'
    :
    } 
     
     
     `}  >

   </div>
  </div>
 )
}

export default ShoeCard