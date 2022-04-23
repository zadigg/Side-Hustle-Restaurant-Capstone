import React from 'react'
import "../Home/Policy.css"

const PolicyUI =props =>{
  return (
    <div className='policy-box'>
      <div className="policy-img">
          <img src={props.img} alt=''/>
      </div>
      <div className="policy-info">
        <h4 className='policy-title'>{props.title}</h4>
        <p> {props.distn}</p>
      </div>
    </div>
  )
}

export default PolicyUI