import { data } from "../../data";
import TextIconList from "../lists/textIconList/TextIconList";

const PersonalDetails = () => {
  return <TextIconList title="Details" data={data.personalDetails} />;
};

export default PersonalDetails;
