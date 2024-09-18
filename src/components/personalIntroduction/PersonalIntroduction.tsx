import { data } from "../../data";
import { styles } from "./personalIntroduction.styles";

const PersonalIntroduction = () => {
  return (
    <div style={styles.container}>
      <h2 style={{ color: "white" }}>{data.fullName}</h2>
      <h5 style={{ color: "white" }}>{data.jobRole}</h5>
      <div style={styles.divider} />
      <p style={{ color: "white" }}>{data.personalIntroduction}</p>
    </div>
  );
};

export default PersonalIntroduction;
