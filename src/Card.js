import React from 'react'
import './Card.css'

export default function Card({pos}) {
  return (
    <div className="card">
          <img src={pos.jetpack_featured_media_url} alt={pos.id} height="300px" width="400px"/>
          <div className="card-body">
            <h2 >{pos.title.rendered}</h2>

            {pos.excerpt.rendered.substring(3,200)+"..."}
            
          </div>
        </div>
    )
  
}
