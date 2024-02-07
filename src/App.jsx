import Profile from './Components/Profile';
import user from './data/user.json';

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
    </div>
  );
}

export default App;
