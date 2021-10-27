import "./App.css";
import Profile from "./components/Profile/Profile";
import user from "./components/Profile/profile-user.json";
import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./components/Statistics/statistical-data.json";
// import friends from "./components/FriendList/friends.json";
console.log(statisticalData);
export default function App() {
  return (
    <div className="App">
      {/* <Profile
        key={user.tag}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      {/* <FriendList friends={friends} />, */}
    </div>
  );
}
