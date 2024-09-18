import EmailIcon from "./components/icons/EmailIcon";
import GithubIcon from "./components/icons/GithubIcon";
import LocationIcon from "./components/icons/LocationIcon";
import PhoneIcon from "./components/icons/PhoneIcon";

interface CVData {
  image: string;
  fullName: string;
  jobRole: string;
  personalIntroduction: string;
  personalDetails: {
    Icon: () => JSX.Element;
    value: string;
  }[];
  workExperience: {
    jobRole: string;
    companyName: string;
    startDate: {
      month: number;
      year: number;
    };
    endDate?: {
      month: number;
      year: number;
    };
  }[];
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
      value: "https://github.com/tomstevens94",
      Icon: GithubIcon,
    },
  ],
  workExperience: [],
};
