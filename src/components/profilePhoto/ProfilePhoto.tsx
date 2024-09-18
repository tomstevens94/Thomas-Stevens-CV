import { data } from "../../data";
import { styles } from "./profilePhoto.styles";

const ProfilePhoto = () => {
  return <img style={styles.container} src={data.image} alt="profile" />;
};

export default ProfilePhoto;
