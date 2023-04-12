import { useNavigate } from "react-router-dom";

import Icon from "../Icon/Icon";

import { HeaderContainer } from "./Style";

const Header = () => {
  const iconConfig = {
    icon: "https://ninjatalentweb.s3.eu-west-1.amazonaws.com/uploads/2020/12/30001543/propuesta-logo-NinjaTalent-04-web-300x106-1.png",
    width: "150px",
    height: "50px",
    alt: "ninja-talente-logo",
  };

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Icon {...iconConfig} onClick={() => navigate("/")} />
    </HeaderContainer>
  );
};

export default Header;
