import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

import { AppContainer } from './AppStyles';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { Transactions } from 'components/TransactionHistory/Transaction';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <Transactions items={transactions} />
    </AppContainer>
  );
};
