import Profile from './Components/Profile';
import Statistics from './Components/Statistics';
import user from './data/user.json';
import data from './data/data.json';

function App() {
  return (
    <div className="bg-slate-300 py-3 h-dvh">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
}

export default App;
