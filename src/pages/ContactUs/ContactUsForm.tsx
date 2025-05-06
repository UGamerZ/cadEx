import { Button, Input } from "@mui/joy";

const contactUsForm = () => {
  return (
    <form id="my-form" method="post">
      <Input type="text" name="username" />
      <Input type="text" name="text" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default contactUsForm;
