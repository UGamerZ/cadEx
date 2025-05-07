import { Button, Card, FormLabel, Input, Textarea, Typography } from "@mui/joy";
import { ContactForm } from "../../styles/style.ts";
import { useNavigate } from "react-router";
import * as React from "react";
import { sendContactAction } from "./sendContactActions.ts";

const ContactUsForm = ({
  setResponseData,
}: {
  setResponseData: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Typography level="h1">Only CTA on the page</Typography>
      <Card>
        <ContactForm
          id="contact-form"
          action={() => {
            sendContactAction().then((response) => setResponseData(response));
            navigate("success");
          }}
        >
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" required={true} />
          <FormLabel>Email</FormLabel>
          <Input type="text" name="email" required={true} />
          <FormLabel>Message</FormLabel>
          <Textarea minRows={2} name="message" required={true} />
          <Button color="neutral" type="submit">
            Submit
          </Button>
        </ContactForm>
      </Card>
    </>
  );
};

export default ContactUsForm;
