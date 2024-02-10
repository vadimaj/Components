import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import FriendList from './Components/FriendList';
import TransactionHistory from './Components/TransactionHistory';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="bg-slate-300 py-3 h-[100%]">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}

export default App;
