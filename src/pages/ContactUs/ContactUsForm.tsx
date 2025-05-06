import { Button, Input } from "@mui/joy";
import { sendContactAction } from "./sendContactActions.ts";

const contactUsForm = () => {
  return (
    <form id="contact-form" action={() => console.log(sendContactAction())}>
      <Input type="text" name="username" />
      <Input type="text" name="text" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default contactUsForm;
