import { useEffect, useState } from "react";
import Api from "../../services/Api";
import { PER_PAGE } from "../../constans/Constans";
import { CardList } from "../../components/CardList/CardList";
import { GoBackButton } from "../../components/GoBack/GoBack";
import { BoxTweets, ButtonLoadMore, WrapperLoadMore } from "./Tweets.styled";

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [displayedUsers, setDisplayedUsers] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getUsers();

    async function getUsers() {
      try {
        const fetchUsers = await Api.fetchUsers();
        setUsers(fetchUsers);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    setDisplayedUsers(users.slice(0, (currentPage + 1) * PER_PAGE));
  }, [users, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <BoxTweets>
      <GoBackButton to="/">Back</GoBackButton>

      {/* loader */}
      {isLoading && <b>Request in progress...</b>}

      <CardList displayedUsers={displayedUsers} />

      <WrapperLoadMore>
        {displayedUsers.length < users.length && (
          <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
        )}
      </WrapperLoadMore>
    </BoxTweets>
  );
};

export default Tweets;
