
import "./ReviewText.style.css"
import React, { useRef } from 'react'
import ReactMarkdown from "react-markdown";


const ReviewText = ({content}) => {
  const textRef = useRef(null);
//   console.log(textRef)

  return (
    <div ref={textRef}>
        <ReactMarkdown  className="review-content-box">
            {content}
        </ReactMarkdown>
    </div>
  )
}

export default ReviewText