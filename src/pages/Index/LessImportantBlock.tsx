import { Typography } from "@mui/joy";
import ContactUsBtn from "../../components/ContactUsBtn.tsx";
import { Wrapper } from "../../styles/style.ts";

const LessImportantBlock = () => {
  return (
    <Wrapper style={{ padding: "5%" }}>
      <Typography style={{ alignSelf: "center" }} level="h2">
        Less important title
      </Typography>
      <ContactUsBtn style={{ alignSelf: "center" }} />
    </Wrapper>
  );
};

export default LessImportantBlock;
