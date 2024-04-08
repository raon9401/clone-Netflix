import React from 'react'
import "./AgeIcon.style.css"

const AgeIcon = ({isAdult}) => {
  return (
    <div className={isAdult ? "ageicon-adult ageicon-base" : "ageicon-all ageicon-base"}>
        <span>{isAdult ? "18+" : "ALL"}</span>
    </div>
  )
}

export default AgeIcon