import CookingIcon from "./components/icons/CookingIcon";
import EmailIcon from "./components/icons/EmailIcon";
import GithubIcon from "./components/icons/GithubIcon";
import HikingIcon from "./components/icons/HikingIcon";
import LocationIcon from "./components/icons/LocationIcon";
import PhoneIcon from "./components/icons/PhoneIcon";
import { TextWithIcon } from "./components/lists/textIconList/TextIconList";

interface CVData {
  image: string;
  fullName: string;
  jobRole: string;
  personalIntroduction: string;
  personalDetails: TextWithIcon[];
  interests: TextWithIcon[];
}

export const data: CVData = {
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocIb9bsAXxCDwtz8ydYNjIgWC2r-flkqOGYPlrh_yFKvomLM1VQ=s576-c-no",
  fullName: "Thomas Stevens",
  jobRole: "Full Stack Mobile Developer",
  personalIntroduction:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate, eveniet deserunt sed nisi quidem ab est soluta sint nam ad quia magniaccusamus ratione sequi, debitis doloribus fuga facere?",
  personalDetails: [
    {
      value: "07707513924",
      Icon: PhoneIcon,
    },
    {
      value: "tommstevens94@gmail.com",
      Icon: EmailIcon,
    },
    {
      value: "Eastbourne, East Sussex",
      Icon: LocationIcon,
    },
    {
      value: "github.com/tomstevens94",
      Icon: GithubIcon,
      isHyperlink: true,
    },
  ],
  interests: [
    {
      value: "Cooking/Baking",
      Icon: CookingIcon,
    },
    {
      value: "Hiking",
      Icon: HikingIcon,
    },
  ],
};
