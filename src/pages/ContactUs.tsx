import { Typography } from "@mui/joy";
import { FormWrapper } from "../styles/style.ts";
import ContactUsForm from "./ContactUs/ContactUsForm.tsx";

const ContactUs = () => {
  return (
    <FormWrapper>
      <Typography level="h1">Only CTA on the page</Typography>
      <ContactUsForm />
    </FormWrapper>
  );
};

export default ContactUs;
