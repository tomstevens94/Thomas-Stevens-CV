import ProfilePhoto from "./components/profilePhoto/ProfilePhoto";
import PersonalIntroduction from "./components/personalIntroduction/PersonalIntroduction";
import PersonalDetails from "./components/personalDetails/PersonalDetails";
import Interests from "./components/interests/Interests";
import ColumnContainer from "./components/containers/columnContainer/ColumnContainer";
import { theme } from "./theme/constants";
import WorkExperience from "./components/workExperience/WorkExperience";
import { styles } from "./app.styles";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div style={styles.gridContainer}>
      <ProfilePhoto />
      <PersonalIntroduction />
      <ColumnContainer gap={theme.gap.xLarge}>
        <PersonalDetails />
        <Skills />
        <Interests />
      </ColumnContainer>
      <WorkExperience />
    </div>
  );
};

export default App;
