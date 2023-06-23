import React from 'react';
import ReactDOM from 'react-dom/client';
import user from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics'
import { FriendList } from 'components/Friendlist/Friendlist';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
  <Statistics title="Upload stats" stats={data} />
  <Statistics stats={data} />
  <FriendList friends={friends} />;
  <TransactionHistory items={transactions}/>
  </React.StrictMode>
);
