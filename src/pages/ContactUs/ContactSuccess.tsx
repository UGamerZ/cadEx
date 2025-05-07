import { FormWrapper } from "../../styles/style.ts";
import { Typography } from "@mui/joy";
import { sendContactAction } from "./sendContactActions.ts";

const ContactSuccess = () => {
  return (
    <FormWrapper>
      <Typography level="h1">Message generated on the server</Typography>
      {sendContactAction().then((response) => (
        <Typography>{response}</Typography>
      ))}
    </FormWrapper>
  );
};

export default ContactSuccess;
