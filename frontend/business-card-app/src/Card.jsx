import React from 'react'

const Card = ({name, description, socialMedia, interests}) => {

  return (
    <div className="card">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="social-media">
            {socialMedia.map((media, index) => (
               <button>{media.platform}</button>
            ))}
        </div>
        <div className="interest">
            <h4>Interest</h4>
            <ul>
                {interests.map((interest, index) => (
                     <li key={index}>{interest}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Card