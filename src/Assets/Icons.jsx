import { useLocation } from "react-router";

export const DownArrow = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10L12 15L17 10"
        stroke="#919EAB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeOff = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.47 14.53L2 22"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L14.53 9.47"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const EyeOn = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z"
        stroke="#918EAF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Dashboard = () => {
  const { pathname } = useLocation();

  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.1667 7.58081V3.87748C20.1667 2.41998 19.58 1.83331 18.1225 1.83331H14.4192C12.9617 1.83331 12.375 2.41998 12.375 3.87748V7.58081C12.375 9.03831 12.9617 9.62498 14.4192 9.62498H18.1225C19.58 9.62498 20.1667 9.03831 20.1667 7.58081Z"
        stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62516 7.80998V3.64831C9.62516 2.35581 9.0385 1.83331 7.581 1.83331H3.87766C2.42016 1.83331 1.8335 2.35581 1.8335 3.64831V7.80081C1.8335 9.10248 2.42016 9.61581 3.87766 9.61581H7.581C9.0385 9.62498 9.62516 9.10248 9.62516 7.80998Z"
        stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.62516 18.1225V14.4192C9.62516 12.9617 9.0385 12.375 7.581 12.375H3.87766C2.42016 12.375 1.8335 12.9617 1.8335 14.4192V18.1225C1.8335 19.58 2.42016 20.1667 3.87766 20.1667H7.581C9.0385 20.1667 9.62516 19.58 9.62516 18.1225Z"
        stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 14.2083H19.25"
        stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.75 17.875H19.25"
        stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const ProjectRequest = () => {
  const { pathname } = useLocation();
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3335 1.83331V4.58331"
        stroke={pathname === "/project_request" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6665 1.83331V4.58331"
        stroke={pathname === "/project_request" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.4165 11.9167H13.7498"
        stroke={pathname === "/project_request" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.4165 15.5833H10.9998"
        stroke={pathname === "/project_request" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 3.20831C17.7192 3.37331 19.25 4.53748 19.25 8.84581V14.5108C19.25 18.2875 18.3333 20.1758 13.75 20.1758H8.25C3.66667 20.1758 2.75 18.2875 2.75 14.5108V8.84581C2.75 4.53748 4.28083 3.38248 7.33333 3.20831H14.6667Z"
        stroke={pathname === "/project_request" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Blog = () => {
  const { pathname } = useLocation();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14"
        stroke={pathname === "/add_blog" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 10H18C15 10 14 9 14 6V2L22 10Z"
        stroke={pathname === "/add_blog" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const Remove = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.6585 1.83331H8.34183C7.7185 1.83331 6.83849 2.19998 6.39849 2.63998L2.64017 6.39832C2.20017 6.83832 1.8335 7.71832 1.8335 8.34165V13.6583C1.8335 14.2816 2.20017 15.1616 2.64017 15.6016L6.39849 19.36C6.83849 19.8 7.7185 20.1666 8.34183 20.1666H13.6585C14.2818 20.1666 15.1618 19.8 15.6018 19.36L19.3602 15.6016C19.8002 15.1616 20.1668 14.2816 20.1668 13.6583V8.34165C20.1668 7.71832 19.8002 6.83832 19.3602 6.39832L15.6018 2.63998C15.1618 2.19998 14.2818 1.83331 13.6585 1.83331Z"
        stroke="#FF1F00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.7915 14.2084L14.2082 7.79169"
        stroke="#FF1F00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2082 14.2084L7.7915 7.79169"
        stroke="#FF1F00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Close = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="close-circle">
        <g id="close-circle_2">
          <path
            id="Vector"
            d="M7 17L17 7"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M17 17L7 7"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export const More = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4994 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.4709 16.0017 14.5006 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1666 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM16 9.5C16.2967 9.5 16.5867 9.41203 16.8334 9.24721C17.08 9.08238 17.2723 8.84812 17.3858 8.57403C17.4994 8.29994 17.5291 7.99834 17.4712 7.70737C17.4133 7.41639 17.2704 7.14912 17.0607 6.93934C16.8509 6.72956 16.5836 6.5867 16.2926 6.52882C16.0017 6.47094 15.7001 6.50065 15.426 6.61418C15.1519 6.72771 14.9176 6.91997 14.7528 7.16665C14.588 7.41332 14.5 7.70333 14.5 8C14.5 8.39783 14.658 8.77936 14.9393 9.06066C15.2206 9.34197 15.6022 9.5 16 9.5ZM16 22.5C15.7033 22.5 15.4133 22.588 15.1666 22.7528C14.92 22.9176 14.7277 23.1519 14.6142 23.426C14.5006 23.7001 14.4709 24.0017 14.5288 24.2926C14.5867 24.5836 14.7296 24.8509 14.9393 25.0607C15.1491 25.2704 15.4164 25.4133 15.7074 25.4712C15.9983 25.5291 16.2999 25.4993 16.574 25.3858C16.8481 25.2723 17.0824 25.08 17.2472 24.8334C17.412 24.5867 17.5 24.2967 17.5 24C17.5 23.6022 17.342 23.2206 17.0607 22.9393C16.7794 22.658 16.3978 22.5 16 22.5Z"
        fill="#918EAF"
      />
    </svg>
  );
};
export const BurgerMenu = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="8" width="12" height="2" rx="1" fill="#060415" />
      <rect x="3" y="13" width="18" height="2" rx="1" fill="#060415" />
    </svg>
  );
};

export const Calendar = () => {
  const { pathname } = useLocation();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2V5"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 2V5"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 9.08997H20.5"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.9955 13.7H12.0045"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29431 13.7H8.30329"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.29431 16.7H8.30329"
        stroke={pathname === "/schedule" ? "#00AE60" : "#B0AEC3"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
