import { Typography } from "@mui/joy";
import AlsoImportantBlockGrid from "./AlsoImportantBlockGrid.tsx";
import ContactUsBtn from "../../components/ContactUsBtn.tsx";
import { Wrapper } from "../../styles/style.ts";

const AlsoImportantBlock = () => {
  return (
    <Wrapper style={{ background: "white" }}>
      <Typography style={{ alignSelf: "center", margin: "5%" }} level="h2">
        Also very important title
      </Typography>
      <AlsoImportantBlockGrid rows={3} />
      <ContactUsBtn style={{ alignSelf: "center", margin: "3%" }} />
    </Wrapper>
  );
};

export default AlsoImportantBlock;
