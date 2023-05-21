import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../assets/icons/logo.svg";
import Avatar from "./Avatar/Avatar";
import {
  Button,
  CardStyled,
  LogoStyled,
  Text,
  UpperContainer,
} from "./Card.styled";

export const Card = ({ name, avatar, tweets, initialFollowers }) => {
  const [followers, setFollowers] = useState(initialFollowers);

  useEffect(() => {
    const storedFollowers = localStorage.getItem(`${name}Followers`);

    if (storedFollowers) {
      setFollowers(parseInt(storedFollowers));
    }
  }, [name]);

  useEffect(() => {
    localStorage.setItem(`${name}Followers`, followers.toString());
  }, [followers, name]);

  const getVisibleFollowers = (followers) => {
    const formatedFollowers = new Intl.NumberFormat("en-US").format(followers);
    return formatedFollowers;
  };

  const getButtonStatus = (followers) => {
    return followers === initialFollowers ? "Follow" : "Following";
  };

  const handleClick = () => {
    if (followers === initialFollowers) {
      setFollowers((prevState) => prevState + 1);
    } else {
      setFollowers((prevState) => prevState - 1);
    }
  };

  const buttonStatus = getButtonStatus(followers);

  return (
    <CardStyled>
      <UpperContainer>
        <LogoStyled src={Logo} alt="Logo" width="76px" height="22px" />
      </UpperContainer>
      <Avatar name={name} avatar={avatar} />
      <Text> {tweets} tweets</Text>
      <Text>{getVisibleFollowers(followers)} Followers</Text>
      <Button type="button" onClick={handleClick} name={buttonStatus}>
        {buttonStatus}
      </Button>
    </CardStyled>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
};
