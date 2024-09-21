import CookingIcon from "./components/icons/CookingIcon";
import EmailIcon from "./components/icons/EmailIcon";
import GithubIcon from "./components/icons/GithubIcon";
import HikingIcon from "./components/icons/HikingIcon";
import LocationIcon from "./components/icons/LocationIcon";
import PhoneIcon from "./components/icons/PhoneIcon";
import { TextWithIcon } from "./components/lists/textIconList/TextIconList";

interface WorkExperience {
  jobRole: string;
  companyName: string;
  location: string;
  startDate: {
    month: string;
    year: number;
  };
  endDate: {
    month: string;
    year: number;
  } | null;
  responsibilities?: string[];
}

interface Skill {
  title: string;
  level: number;
}

interface CVData {
  image: string;
  fullName: string;
  jobRole: string;
  personalIntroduction: string;
  personalDetails: TextWithIcon[];
  interests: TextWithIcon[];
  workExperience: WorkExperience[];
  skills: Skill[];
}

export const data: CVData = {
  image:
    "https://lh3.googleusercontent.com/a/ACg8ocIb9bsAXxCDwtz8ydYNjIgWC2r-flkqOGYPlrh_yFKvomLM1VQ=s576-c-no",
  fullName: "Thomas Stevens",
  jobRole: "Full Stack Mobile Developer",
  personalIntroduction:
    "Passionate Software Developer skilled in full-stack mobile development, specialising in React Native, NodeJS, JavaScript, HTML and CSS. Commended for strong problem-solving skills and excellent communication. \n\nCurrently solo developing Prove It, a production iOS App focused on bread baking.",
  personalDetails: [
    {
      value: "07707 513924",
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
      value: "https://www.github.com/tomstevens94",
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
  workExperience: [
    {
      jobRole: "Software Developer",
      companyName: "AXA Health",
      location: "Tunbridge Wells",
      startDate: {
        month: "September",
        year: 2022,
      },
      endDate: null,
      responsibilities: [
        'Employed as apprentice, but completed with a maximum grade of "Distinction" in August 2024.',
        'Received "Excellent" end-of-year rating during 2023 performance review.',
        "Worked within the Mobile App Team, following internal standards/conventions, and within GDPR principles. Migrated entire data caching/fetching behaviour from Redux Sagas to RTK Query.",
        "Implemented custom component design system, creating reusable, accessible components throughout a large codebase.",
        "Followed UI/UX designs, ensuring ideal customer/user experience and app performance",
      ],
    },
    {
      jobRole: "Warehouse Manager",
      companyName: "Bonners LTD",
      location: "Eastbourne",
      startDate: { month: "September", year: 2019 },
      endDate: { month: "September", year: 2022 },
    },
    {
      jobRole: "Assistant Manager",
      companyName: "Mitchells & Butlers",
      location: "Bexhill-on-Sea",
      startDate: { month: "October", year: 2016 },
      endDate: { month: "September", year: 2019 },
    },
  ],
  skills: [
    { title: "React Native", level: 1 },
    { title: "React", level: 1 },
    { title: "Typescript/Javascript", level: 0.95 },
    { title: "React", level: 0.9 },
    { title: "NodeJS", level: 0.85 },
    { title: "HTML / CSS", level: 0.8 },
    { title: "Jest / Native Testing Library", level: 0.6 },
    { title: "BrowserStack", level: 0.4 },
    { title: "Azure", level: 0.3 },
  ],
};
