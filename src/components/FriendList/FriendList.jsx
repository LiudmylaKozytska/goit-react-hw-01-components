import PropTypes from 'prop-types';

import { FriendsListSection } from './FriendListStyles';
import { FriendsListItems } from 'components/FriendListItem/FriendListItem';

export const FriendsList = ({ friends }) => {
  return (
    <FriendsListSection>
      {friends.map(friend => {
        return (
          <FriendsListItems
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          />
        );
      })}
    </FriendsListSection>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
