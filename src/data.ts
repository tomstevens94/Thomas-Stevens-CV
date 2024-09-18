import CookingIcon from "./components/icons/CookingIcon";
import EmailIcon from "./components/icons/EmailIcon";
import GithubIcon from "./components/icons/GithubIcon";
import HikingIcon from "./components/icons/HikingIcon";
import LocationIcon from "./components/icons/LocationIcon";
import PhoneIcon from "./components/icons/PhoneIcon";
import { TextWithIcon } from "./components/lists/textIconList/TextIconList";

// Software Developer
// AXA Health | Royal Tunbridge Wells
// Sep 2022 - Present
// Employed as apprentice, but completed with a maximum grade of 'Distinction' in August 2024.
// Received 'Excellent' end-of-year rating during 2023 performance review.
// Worked within the Mobile App Team, following internal standards/conventions, and within GDPR principles. Migrated entire data caching/fetching behaviour from Redux Sagas to RTK Query.
// Implemented custom component design system, creating reusable, accessible components throughout a large codebase.
// Followed UI/UX designs, ensuring ideal customer/user experience and app performance

interface CVData {
  image: string;
  fullName: string;
  jobRole: string;
  personalIntroduction: string;
  personalDetails: TextWithIcon[];
  interests: TextWithIcon[];
  workExperience: {
    jobRole: string;
    companyName: string;
    location: string;
    startDate: {
      month: number;
      year: number;
    };
    endDate: {
      month: number;
      year: number;
    } | null;
    responsibilities: string[];
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
  workExperience: [
    {
      jobRole: "Software Developer",
      companyName: "AXA Health",
      location: "Tunbridge Wells",
      startDate: {
        month: 8,
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
  ],
};
