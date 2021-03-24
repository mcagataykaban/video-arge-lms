import React, { useState,useEffect, useRef } from "react";
import "./App.css";
import mov from "./mov_bbb.mp4";
function App() {
  
  const [isAudienceHere, setIsAudienceHere] = useState(true)
  const [isFirst, setIsFirst] = useState(false)
  const videoo = document.getElementById("deneme");
  const vidRef = useRef(null);

  const audienceHereHandler = () => {
    setIsAudienceHere(true)
    vidRef.current.play()
  }

  const timeDeneme = (e) => {
    var curTime = (parseInt(e.target.currentTime))
    var surveyTime = parseInt(e.target.duration) / 2
    if (surveyTime == curTime && !isFirst) {
      vidRef.current.pause()
      setIsAudienceHere(false)
      setIsFirst(true)
    }
  }
  return (
    <div className="App">
      <video ref={vidRef} onTimeUpdate={timeDeneme} id="deneme" width="320" height="240" controls={isAudienceHere}>
        <source src={mov} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isAudienceHere ? <button onClick={audienceHereHandler}>I'm here</button> : null}
      
    </div>
  );
}

export default App;
