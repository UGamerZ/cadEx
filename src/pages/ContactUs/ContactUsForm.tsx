import { Button, Card, FormLabel, Input, Textarea } from "@mui/joy";
import { sendContactAction } from "./sendContactActions.ts";
import { ContactForm } from "../../styles/style.ts";

const contactUsForm = () => {
  return (
    <Card>
      <ContactForm
        id="contact-form"
        action={() => console.log(sendContactAction())}
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
  );
};

export default contactUsForm;
