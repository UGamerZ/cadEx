import { Footer, Header, Wrapper } from "../styles/style.ts";
import { Typography } from "@mui/joy";
import ContactUsBtn from "./ContactUsBtn.tsx";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <Typography
          className={"company-link"}
          onClick={() => navigate("/")}
          level="h3"
        >
          Some Company
        </Typography>
        <ContactUsBtn />
      </Header>
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer>
        <Typography level="h4">Some Company 2025</Typography>
      </Footer>
    </>
  );
};

export default Layout;
