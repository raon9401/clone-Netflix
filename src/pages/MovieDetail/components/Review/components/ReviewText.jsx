
import "./ReviewText.style.css"
import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";


const ReviewText = ({content}) => {
  // isLong 에 따라 버튼이 보이고 안보이고 함.
  const [isLong, setIsLong] = useState(false);  
  const [isAllText, setIsAllText] = useState(true);  

  const handleTextView = () => {
    let newlineCnt = content?.match(/(\r\n|\r|\n)/g);
    let textCnt = content.length;
    if(newlineCnt > 10 || textCnt > 800 ){
      return false;
    } else if (newlineCnt <= 10 || textCnt <= 800 ){
      return true;
    }
  }

  useEffect(() => {
    setIsLong(handleTextView());
    // eslint-disable-next-line
  }, [])

  return (
    <div>
        <ReactMarkdown className= {isAllText ? "review-content-box" :"review-content-box on-all-text"}>
            {content}
        </ReactMarkdown>
        <div>
          {isLong ? "" : 
            <button onClick={()=> setIsAllText(!isAllText)} className="review-text-detail-btn">
              { isAllText ? "자세히" : "간략히"}
            </button>
          }
        </div>
    </div>
  )
}

export default ReviewText