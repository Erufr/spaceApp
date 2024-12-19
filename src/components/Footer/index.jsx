import styled from "styled-components";


const FooterContainer = styled.footer`
  background-color: #0d1117;
  color: #c9d1d9;
  text-align: center;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
`;

const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
`;

const IconContainer = styled.div`
  margin-top: 10px;
  a {
    color: #c9d1d9;
    margin: 0 10px;
    font-size: 20px;
    transition: color 0.3s ease;
    &:hover {
      color: #58a6ff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        Creado por Erika Frias 💙 | © {new Date().getFullYear()} Space App
      </FooterText>
      <IconContainer>
        <a
          href="https://github.com/Erufr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://vercel.com/erus-projects-76bbb7e6"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vercel"
        >
          <i className="fas fa-cloud"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/erikavfrias/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
