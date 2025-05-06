import { FlexContainer } from "../../styles/style.ts";
import { Card, CardContent, CircularProgress, Typography } from "@mui/joy";
import ReactPlayer from "react-player";
import { useState } from "react";

const VideoBlock = () => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  return (
    <>
      <FlexContainer style={{ background: "whitesmoke" }}>
        <Card variant="plain">
          <Typography level="h1">Most important title on the page</Typography>
          <CardContent>
            <Typography level="title-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              mattis, leo et condimentum ultricies, sem urna convallis metus,
              vel suscipit nibh lacus tincidunt ante
            </Typography>
          </CardContent>
        </Card>
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
