import styled from '@emotion/styled';

const ProfileContainer = styled.div`
  display: block;
  margin: 40px;
  box-shadow: 1px 2px 10px -4px rgba(66, 68, 90, 1);
`;

const Description = styled.div`
  display: block;
  text-align: center;
  padding: 80px 120px;
  background-color: GhostWhite;
  border: 1px solid lavender;
  border-bottom: none;
`;
const UserAvatar = styled.img`
  display: block;
  height: 200px;
  width: 200px;
  margin: auto;
  border-radius: 50%;
`;
const Name = styled.p`
  display: block;
  margin: 12px;
  margin-top: 32px;
  font-size: 28px;
  font-weight: 700;
  text-shadow: 1px 1px 3px rgba(66, 68, 90, 1);
`;
const UserTag = styled.p`
  display: block;
  margin: 10px;
  font-size: 22px;
  color: grey;
  font-weight: 500;
`;
const UserLocation = styled.p`
  display: block;
  margin: 10px;
  font-size: 22px;
  color: grey;
  font-weight: 500;
`;
const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: AliceBlue;
`;
const StatsItem = styled.li`
  display: block;
  width: 33.3%;
  text-align: center;
  padding: 28px;
  border: 1px solid lavender;
`;
const LabelStats = styled.span`
  display: block;
  color: grey;
  font-size: 20px;
  margin: 5px;
  text-shadow: 1px 1px 1px rgba(66, 68, 90, 1);
`;
const QuantityStats = styled.span`
  display: block;
  font-size: 22px;
  font-weight: 700;
  text-shadow: 1px 1px 2px rgba(66, 68, 90, 1);
`;

export {
  ProfileContainer,
  Description,
  UserAvatar,
  Name,
  UserTag,
  UserLocation,
  StatsList,
  StatsItem,
  LabelStats,
  QuantityStats,
};
