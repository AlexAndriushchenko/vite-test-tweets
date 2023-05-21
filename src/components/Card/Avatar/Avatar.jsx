import PropTypes from "prop-types";
import {
  AvatarBorderStyled,
  AvatarWrapperStyled,
  WrapperStyled,
} from "./Avatar.styled";

const Avatar = ({ name, avatar }) => {
  return (
    <WrapperStyled>
      <AvatarBorderStyled>
        <AvatarWrapperStyled>
          <img src={avatar} alt={name} width="62px" height="62px" />
        </AvatarWrapperStyled>
      </AvatarBorderStyled>
    </WrapperStyled>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Avatar;
