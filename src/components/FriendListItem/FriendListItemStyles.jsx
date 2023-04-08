import styled from '@emotion/styled';

const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px 100px 20px 20px;
  background-color: snow;
  box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 1);
`;
const FriendStatus = styled.span`
  display: flex;
  height: 25px;
  width: 25px;
  border-radius: 50%;
`;
const FriendAvatar = styled.img`
  display: block;
  width: 100px;
  height: 100px;
`;
const FriendName = styled.p`
  display: block;
  font-size: 32px;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(66, 68, 90, 1);
`;

export { FriendItem, FriendStatus, FriendAvatar, FriendName };
