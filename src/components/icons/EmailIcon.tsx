import { theme } from "../../theme/constants";

const EmailIcon = () => {
  return (
    <svg
      width={`${theme.iconSize}px`}
      height={`${theme.iconSize}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
        stroke={theme.colors.main}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
        stroke={theme.colors.main}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default EmailIcon;
