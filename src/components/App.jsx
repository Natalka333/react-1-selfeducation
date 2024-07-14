// import Profile from "./Profile/Profile";
// import Statistic from "./Statistics/Statistics";
// import FriendList from "./FriendListItem/FriendList";
// import TransactionHistory from "./TransactionHistory/TransactionHistory";

// import Counter from "./Counter/Counter";
import Dropdown from "./Dropdown/Dropdown";

// import user from '../Data/user.json'
// import data from '../Data/data.json'
// import friends from '../Data/friends.json'
// import transactions from '../Data/transactions.json'


export const App = () => {
  return (
    <div>
      
     <Dropdown/>

 {/* <Counter initialValue={5}/> */}
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />; */}

    </div>
  );
};
