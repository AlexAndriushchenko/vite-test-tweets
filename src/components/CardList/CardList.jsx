import PropTypes from "prop-types";
import { Card } from "./../Card/Card";
import { ListStyled, ListItem } from "./CardList.styled";

export const CardList = ({ displayedUsers }) => {
  return (
    <ListStyled>
      {displayedUsers &&
        displayedUsers.map(({ id, user, avatar, tweets, followers }) => (
          <ListItem key={id}>
            <Card
              name={user}
              avatar={avatar}
              tweets={tweets}
              initialFollowers={followers}
            />
          </ListItem>
        ))}
    </ListStyled>
  );
};

CardList.propTypes = { displayedUsers: PropTypes.array.isRequired };
