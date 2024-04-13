import React from 'react'
import { Alert, Modal, Spinner } from 'react-bootstrap'
import YouTube from 'react-youtube';
import { useMovieYoutubeIdQuery } from '../../hooks/useMovieYoutube';

const PreviewModal = ({show, setShow, id}) => {
  const { data, isLoading, isError, error } = useMovieYoutubeIdQuery({id});
  // console.log(data?.filter((item) => item.type === "Trailer")[0]?.key);
  console.log(data);



  if(isLoading) {
    <div className="spinner-area">
      <Spinner
        animation='border'
        variant="danger"
        style={{width: "5rem", height:"5rem"}}
        />
    </div>
  }
  if(isError){
      <Alert variant="danger">{error.message}</Alert>
  }

  return (
    <div>
        <Modal className='' show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton className=''>
            </Modal.Header>
            <Modal.Body className="p-0 bg-black">
              <YouTube
              //videoId : https://www.youtube.com/watch?v={videoId} 유튜브 링크의 끝부분에 있는 고유한 아이디
                videoId={data?.filter((item) => 
                    item.type === "Trailer")[0]?.key ? data?.filter((item) => 
                      item.type === "Trailer")[0]?.key : data && data[0].key
                }
              //opts(옵션들): 플레이어의 크기나 다양한 플레이어 매개 변수를 사용할 수 있음.
              //밑에서 더 설명하겠습니다.
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1, //자동재생 O
                    rel: 0,
                    modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
                  },
                }}
                style={{height:'100%'}}
                //이벤트 리스너 
                onEnd={(e)=>{e.target.stopVideo(0);}}      
              />
            </Modal.Body>
      </Modal>
    </div>
  )
}

export default PreviewModal