import React from "react";
import ProfilePhoto from "./components/profilePhoto/ProfilePhoto";
import PersonalIntroduction from "./components/personalIntroduction/PersonalIntroduction";
import { theme } from "./theme/constants";

const App = () => {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: theme.gap,
        padding: theme.gap,
      }}>
      <ProfilePhoto />
      <PersonalIntroduction />
    </div>
  );
};

export default App;
