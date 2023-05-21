import PropTypes from "prop-types";
import { Card } from "./../Card/Card";
import { ListStyled } from "./CardList.styled";

export const CardList = ({ displayedUsers }) => {
  return (
    <ListStyled>
      {displayedUsers &&
        displayedUsers.map(({ id, user, avatar, tweets, followers }) => (
          <li key={id}>
            <Card
              name={user}
              avatar={avatar}
              tweets={tweets}
              initialFollowers={followers}
            />
          </li>
        ))}
    </ListStyled>
  );
};

CardList.propTypes = { displayedUsers: PropTypes.array.isRequired };
