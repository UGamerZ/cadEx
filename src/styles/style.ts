import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: whitesmoke;
  gap: 1rem;
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  border-bottom: #888888 0.1rem solid;
  z-index: 9;
  padding: 0.7rem;
  background: white;
  .company-link:hover {
    cursor: pointer;
  }
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: white;
  border-top: #888888 0.1rem solid;
  z-index: 9;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 5%;
  padding: 1rex;
`;

export const FormWrapper = styled.div`
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  align-items: center;
`;
