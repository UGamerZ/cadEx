import { FlexContainer } from "../../styles/style.ts";
import { CircularProgress } from "@mui/joy";
import ReactPlayer from "react-player";
import { useState } from "react";
import VideoBlockCard from "./VideoBlockCard.tsx";

const VideoBlock = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  return (
    <>
      <FlexContainer style={{ background: "whitesmoke" }}>
        <VideoBlockCard />
        {!isPlayerReady && <CircularProgress color="neutral" />}
        <ReactPlayer
          onReady={() => setIsPlayerReady(true)}
          width="100rem"
          height="37rex"
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        />
      </FlexContainer>
    </>
  );
};

export default VideoBlock;
