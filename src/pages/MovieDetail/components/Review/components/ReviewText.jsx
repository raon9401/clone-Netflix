
import "./ReviewText.style.css"
import React from 'react'
import ReactMarkdown from "react-markdown";


const ReviewText = ({content}) => {
  // const [isLong, setIsLong] = useState(false);  

  // const handleTextView = () => {
  //   let newlineCnt = content?.match(/(\r\n|\r|\n)/g);
  //   let textCnt = content.length;
  //   if(newlineCnt > 10 || textCnt > 600 ){
  //     setIsLong(false);
  //   } else if (newlineCnt <= 10 || textCnt <= 600 ){
  //     setIsLong(true);
  //   }
  // }

  // useEffect(() => {
  //   handleTextView();
  // },[])

  return (
    <div>
        <ReactMarkdown className="review-content-box">
            {content}
        </ReactMarkdown>
        <div>
          {/* {isLong} */}
        </div>
    </div>
  )
}

export default ReviewText