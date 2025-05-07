import { Button, Card, FormLabel, Input, Textarea, Typography } from "@mui/joy";
import { setData } from "./sendContactActions.ts";
import { ContactForm } from "../../styles/style.ts";
import { useNavigate } from "react-router";

const ContactUsForm = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography level="h1">Only CTA on the page</Typography>
      <Card>
        <ContactForm
          id="contact-form"
          action={() => {
            setData();
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
