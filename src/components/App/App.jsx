import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from '../../data/user';
import statistics from '../../data/statistics';
import friends from '../../data/friends';
import transactions from '../../data/transactions';
import css from './App.module.css';

export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={statistics} />
      <Statistics data={statistics} />
      <FriendList data={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};
