import { FormWrapper } from "../../styles/style.ts";
import { Typography } from "@mui/joy";
import { sendContactAction } from "./sendContactActions.ts";
import { useState } from "react";

const ContactSuccess = () => {
  const [response, setResponse] = useState();
  sendContactAction().then((resp) => setResponse(resp));

  return (
    <FormWrapper>
      <Typography level="h1">Message generated on the server</Typography>
      {response && <Typography>{response}</Typography>}
    </FormWrapper>
  );
};

export default ContactSuccess;
