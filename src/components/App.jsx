import { Profile } from './Profile/Profile';
import user from './Datalist/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Datalist/data.json';

import { FriendList } from './FriendList/FriendList';
import friends from './Datalist/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './Datalist/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
