import { Card, CardContent, Typography } from "@mui/joy";

const ExampleCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <Card>
      <Typography level="title-lg">{title}</Typography>
      <CardContent>
        <Typography level="body-sm">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default ExampleCard;
