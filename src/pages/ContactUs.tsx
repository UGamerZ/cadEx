import { FormWrapper } from "../styles/style.ts";
import { Outlet } from "react-router";

const ContactUs = () => {
  return (
    <FormWrapper>
      <Outlet />
    </FormWrapper>
  );
};

export default ContactUs;
