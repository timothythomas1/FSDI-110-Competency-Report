import React from 'react'
import "./QuantityPicker.css"
import { useState } from 'react';

const QuantityPicker = (props) => {
  let [currentQnty,setCurrentQnty] = useState(1);

  const increase = () => {
      let nextQty = currentQnty + 1;
      setCurrentQnty(nextQty)
      // console.log(`Added one item. your item count is now ${nextQty}`)
      props.onChange(nextQty);
      
  }

  const decrease = () => {
    if (currentQnty===1) {
        // console.log(`Subtracted one item. Your item count is now ${currentQnty}`)
      
    }
    else{
        let nextQty = currentQnty - 1;
        setCurrentQnty(nextQty)
        // console.log(`Subtracted one item. your item count is now ${nextQty}`)
        props.onChange(nextQty);

      }
  }

  return (
      <div className="qty-picker">
          <div>
            <button className="qty-btn-neg" onClick={decrease}>
              <i className="fa-solid fa-minus"></i>
            </button >
          </div>
          <div className="qty">{currentQnty}</div>
          <div>
            <button className="qty-btn-neg" onClick={increase}>
                  <i className="fa-solid fa-plus"></i>
            </button >
          </div>
      </div>

  )
}

export default QuantityPicker