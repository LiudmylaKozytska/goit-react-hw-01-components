import PropTypes from 'prop-types';

import {
  FriendItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendListItemStyles';

export const FriendsListItems = ({ id, avatar, name, isOnline }) => {
  return (
    <FriendItem key={id}>
      <FriendStatus
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendsListItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
