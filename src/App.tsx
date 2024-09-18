import ProfilePhoto from "./components/profilePhoto/ProfilePhoto";
import PersonalIntroduction from "./components/personalIntroduction/PersonalIntroduction";
import PersonalDetails from "./components/personalDetails/PersonalDetails";
import Interests from "./components/interests/Interests";
import RowContainer from "./components/containers/rowContainer/RowContainer";
import ColumnContainer from "./components/containers/columnContainer/ColumnContainer";

const App = () => {
  return (
    <ColumnContainer>
      <RowContainer>
        <ProfilePhoto />
        <PersonalIntroduction />
      </RowContainer>
      <RowContainer>
        <ColumnContainer>
          <PersonalDetails />
          <Interests />
        </ColumnContainer>
      </RowContainer>
    </ColumnContainer>
  );
};

export default App;
