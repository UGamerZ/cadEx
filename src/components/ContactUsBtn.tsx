import { useNavigate } from "react-router";
import { Button } from "@mui/joy";
import type { CSSProperties } from "react";

const ContactUsBtn = ({ style }: { style?: CSSProperties }) => {
  const navigate = useNavigate();
  return (
    <Button
      style={Object.assign({ width: "20rex" }, style)}
      variant="solid"
      color="neutral"
      onClick={() => navigate("/contact-us")}
    >
      Contact us
    </Button>
  );
};

export default ContactUsBtn;
