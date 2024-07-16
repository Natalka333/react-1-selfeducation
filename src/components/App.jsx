import Profile from "./Profile/Profile";
import Statistic from "./Statistics/Statistics";
import FriendList from "./FriendListItem/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

// import Counter from "./Counter/Counter";
// import Dropdown from "./Dropdown/Dropdown";

import user from '../Data/user.json'
import data from '../Data/data.json'
import friends from '../Data/friends.json'
import transactions from '../Data/transactions.json'


export const App = () => {
  return (
    <div>

      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;


      {/* <Dropdown/> */}

      {/* <Counter initialValue={5}/> */}

    </div>
  );
};

// rafcp

// import React from 'react'
// import PropTypes from 'prop-types'

// const App = props => {
//   return (
//     <div>App</div>
//   )
// }

// App.propTypes = {}

// export default App