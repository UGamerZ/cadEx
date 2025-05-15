import { Card, CardContent, Typography } from "@mui/joy";
import { memo } from "react";

const VideoBlockCard = memo(() => {
  return (
    <Card variant="plain">
      <Typography level="h1">Most important title on the page</Typography>
      <CardContent>
        <Typography level="title-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          mattis, leo et condimentum ultricies, sem urna convallis metus, vel
          suscipit nibh lacus tincidunt ante
        </Typography>
      </CardContent>
    </Card>
  );
});

export default VideoBlockCard;
