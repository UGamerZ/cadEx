import { FormWrapper } from "../../styles/style.ts";
import { Typography } from "@mui/joy";

const ContactSuccess = ({ response }: { response: string | undefined }) => {
  return (
    <FormWrapper>
      <Typography level="h1">Message generated on the server</Typography>
      {response && <Typography>{response}</Typography>}
    </FormWrapper>
  );
};

export default ContactSuccess;
