import { useLocation } from "react-router";


export const DownArrow = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="#919EAB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export const EyeOff = () => {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5299 9.47004L9.46992 14.53C8.81992 13.88 8.41992 12.99 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C12.9899 8.42004 13.8799 8.82004 14.5299 9.47004Z" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M17.8201 5.76998C16.0701 4.44998 14.0701 3.72998 12.0001 3.72998C8.47009 3.72998 5.18009 5.80998 2.89009 9.40998C1.99009 10.82 1.99009 13.19 2.89009 14.6C3.68009 15.84 4.60009 16.91 5.60009 17.77" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.41992 19.5301C9.55992 20.0101 10.7699 20.2701 11.9999 20.2701C15.5299 20.2701 18.8199 18.1901 21.1099 14.5901C22.0099 13.1801 22.0099 10.8101 21.1099 9.40005C20.7799 8.88005 20.4199 8.39005 20.0499 7.93005" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15.5099 12.7C15.2499 14.11 14.0999 15.26 12.6899 15.52" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.47 14.53L2 22" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L14.53 9.47" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export const EyeOn = () => {

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42004 11.9999 8.42004C13.9799 8.42004 15.5799 10.02 15.5799 12Z" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.0001 20.27C15.5301 20.27 18.8201 18.19 21.1101 14.59C22.0101 13.18 22.0101 10.81 21.1101 9.39997C18.8201 5.79997 15.5301 3.71997 12.0001 3.71997C8.47009 3.71997 5.18009 5.79997 2.89009 9.39997C1.99009 10.81 1.99009 13.18 2.89009 14.59C5.18009 18.19 8.47009 20.27 12.0001 20.27Z" stroke="#918EAF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
};

export const Dashboard = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1667 7.58081V3.87748C20.1667 2.41998 19.58 1.83331 18.1225 1.83331H14.4192C12.9617 1.83331 12.375 2.41998 12.375 3.87748V7.58081C12.375 9.03831 12.9617 9.62498 14.4192 9.62498H18.1225C19.58 9.62498 20.1667 9.03831 20.1667 7.58081Z" stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.62516 7.80998V3.64831C9.62516 2.35581 9.0385 1.83331 7.581 1.83331H3.87766C2.42016 1.83331 1.8335 2.35581 1.8335 3.64831V7.80081C1.8335 9.10248 2.42016 9.61581 3.87766 9.61581H7.581C9.0385 9.62498 9.62516 9.10248 9.62516 7.80998Z" stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.62516 18.1225V14.4192C9.62516 12.9617 9.0385 12.375 7.581 12.375H3.87766C2.42016 12.375 1.8335 12.9617 1.8335 14.4192V18.1225C1.8335 19.58 2.42016 20.1667 3.87766 20.1667H7.581C9.0385 20.1667 9.62516 19.58 9.62516 18.1225Z" stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.75 14.2083H19.25" stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13.75 17.875H19.25" stroke={pathname === "/" ? "#00AE60" : "#B0AEC3"} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};
export const AddBook = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_58_1719)">
                <path d="M7.3335 14.6666H4.97766C2.8785 14.6666 1.8335 13.6216 1.8335 11.5225V4.97748C1.8335 2.87831 2.8785 1.83331 4.97766 1.83331H9.16683C11.266 1.83331 12.311 2.87831 12.311 4.97748" stroke={pathname === "/add_book" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.0223 20.1666H12.8331C10.734 20.1666 9.68896 19.1216 9.68896 17.0225V10.4775C9.68896 8.37831 10.734 7.33331 12.8331 7.33331H17.0223C19.1215 7.33331 20.1665 8.37831 20.1665 10.4775V17.0225C20.1665 19.1216 19.1215 20.1666 17.0223 20.1666Z" stroke={pathname === "/add_book" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.6309 13.75H16.6192" stroke={pathname === "/add_book" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.125 15.2442V12.2559" stroke={pathname === "/add_book" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_58_1719">
                    <rect width="22" height="22" fill="white" />
                </clipPath>
            </defs>
        </svg>

    );
};
export const BookList = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1668 15.345V4.28084C20.1668 3.18084 19.2685 2.36501 18.1777 2.45668H18.1227C16.1977 2.62168 13.2735 3.60251 11.6418 4.62918L11.486 4.73001C11.2202 4.89501 10.7802 4.89501 10.5143 4.73001L10.2852 4.59251C8.6535 3.57501 5.7385 2.60334 3.8135 2.44751C2.72266 2.35584 1.8335 3.18084 1.8335 4.27168V15.345C1.8335 16.225 2.5485 17.05 3.4285 17.16L3.69433 17.1967C5.6835 17.4625 8.75433 18.4708 10.5143 19.4333L10.551 19.4517C10.7985 19.5892 11.1927 19.5892 11.431 19.4517C13.191 18.48 16.271 17.4625 18.2693 17.1967L18.5718 17.16C19.4518 17.05 20.1668 16.225 20.1668 15.345Z" stroke={pathname === "/book_list" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 5.03247V18.7825" stroke={pathname === "/book_list" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.104 7.78247H5.0415" stroke={pathname === "/book_list" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.7915 10.5325H5.0415" stroke={pathname === "/book_list" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const Invoice = () => {
    const { pathname } = useLocation();

    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1665 5.49998V7.71831C20.1665 9.16664 19.2498 10.0833 17.8015 10.0833H14.6665V3.67581C14.6665 2.65831 15.5007 1.83331 16.5182 1.83331C17.5173 1.84248 18.434 2.24581 19.094 2.90581C19.754 3.57498 20.1665 4.49165 20.1665 5.49998Z" stroke={pathname === "/invoice" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M1.8335 6.41665V19.25C1.8335 20.0108 2.69516 20.4416 3.30016 19.9833L4.86766 18.81C5.23433 18.535 5.74766 18.5716 6.07766 18.9016L7.59933 20.4325C7.95683 20.79 8.5435 20.79 8.901 20.4325L10.441 18.8925C10.7618 18.5716 11.2752 18.535 11.6327 18.81L13.2002 19.9833C13.8052 20.4325 14.6668 20.0016 14.6668 19.25V3.66665C14.6668 2.65831 15.4918 1.83331 16.5002 1.83331H6.41683H5.50016C2.75016 1.83331 1.8335 3.47415 1.8335 5.49998V6.41665Z" stroke={pathname === "/invoice" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 11.9258H11" stroke={pathname === "/invoice" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.25 8.25916H11" stroke={pathname === "/invoice" ? "#FFF" : "#918EAF"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.49609 11.9167H5.50433" stroke={pathname === "/invoice" ? "#FFF" : "#918EAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.49609 8.25H5.50433" stroke={pathname === "/invoice" ? "#FFF" : "#918EAF"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
export const Sell = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.82236 14.025L7.97486 18.1775C9.67986 19.8825 12.4482 19.8825 14.1624 18.1775L18.1865 14.1534C19.8915 12.4484 19.8915 9.68005 18.1865 7.96588L14.0249 3.82255C13.154 2.95171 11.9532 2.48421 10.7249 2.54838L6.14153 2.76838C4.30819 2.85088 2.85069 4.30838 2.75903 6.13255L2.53903 10.7159C2.48403 11.9534 2.95153 13.1542 3.82236 14.025Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8.70817 11C9.97382 11 10.9998 9.97401 10.9998 8.70835C10.9998 7.4427 9.97382 6.41669 8.70817 6.41669C7.44252 6.41669 6.4165 7.4427 6.4165 8.70835C6.4165 9.97401 7.44252 11 8.70817 11Z" stroke="white" strokeLinecap="round" />
        </svg>
    );
};

export const TotatBooks = () => {
    return (
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bii_1_6970)">
                <rect x="5.80005" y="11.2712" width="40" height="40" rx="4" transform="rotate(-10.4735 5.80005 11.2712)" fill="#15B112" fillOpacity="0.1" />
            </g>
            <rect x="12.8" y="12" width="40" height="40" rx="4" fill="#15B112" />
            <g clipPath="url(#clip0_1_6970)">
                <path d="M43 36.74V24.67C43 23.47 42.02 22.58 40.83 22.68H40.77C38.67 22.86 35.48 23.93 33.7 25.05L33.53 25.16C33.24 25.34 32.76 25.34 32.47 25.16L32.22 25.01C30.44 23.9 27.26 22.84 25.16 22.67C23.97 22.57 23 23.47 23 24.66V36.74C23 37.7 23.78 38.6 24.74 38.72L25.03 38.76C27.2 39.05 30.55 40.15 32.47 41.2L32.51 41.22C32.78 41.37 33.21 41.37 33.47 41.22C35.39 40.16 38.75 39.05 40.93 38.76L41.26 38.72C42.22 38.6 43 37.7 43 36.74Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33 25.49V40.49" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.75 28.49H26.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.5 31.49H26.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_bii_1_6970" x="-16.7882" y="-18.5882" width="91.7812" height="91.7813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.2941" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_6970" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_6970" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7.70174" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.694118 0 0 0 0 0.0705882 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_6970" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4.40099" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0823529 0 0 0 0 0.694118 0 0 0 0 0.0705882 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow_1_6970" result="effect3_innerShadow_1_6970" />
                </filter>
                <clipPath id="clip0_1_6970">
                    <rect x="21" y="20" width="24" height="24" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export const TotatPublishers = () => {
    return (
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bii_1_6983)">
                <rect x="5.6001" y="11.2712" width="40" height="40" rx="4" transform="rotate(-10.4735 5.6001 11.2712)" fill="#3F96FE" fillOpacity="0.1" />
            </g>
            <rect x="12.6001" y="12" width="40" height="40" rx="4" fill="#3F96FE" />
            <g clipPath="url(#clip0_1_6983)">
                <path d="M24.3 38V27C24.3 23 25.3 22 29.3 22H36.3C40.3 22 41.3 23 41.3 27V37C41.3 37.14 41.3 37.28 41.29 37.42" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.15 35H41.3V38.5C41.3 40.43 39.73 42 37.8 42H27.8C25.87 42 24.3 40.43 24.3 38.5V37.85C24.3 36.28 25.58 35 27.15 35Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.8 27H36.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M28.8 30.5H33.8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_bii_1_6983" x="-16.9881" y="-18.5882" width="91.7812" height="91.7813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.2941" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_6983" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_6983" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7.70174" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.588235 0 0 0 0 0.996078 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_6983" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4.40099" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.247059 0 0 0 0 0.588235 0 0 0 0 0.996078 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow_1_6983" result="effect3_innerShadow_1_6983" />
                </filter>
                <clipPath id="clip0_1_6983">
                    <rect x="20.8" y="20" width="24" height="24" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export const AvgBookPrice = () => {
    return (
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bii_1_7009)">
                <rect x="5.19995" y="11.2712" width="40" height="40" rx="4" transform="rotate(-10.4735 5.19995 11.2712)" fill="#FF6D00" fillOpacity="0.1" />
            </g>
            <rect x="12.2" y="12" width="40" height="40" rx="4" fill="#FF6D00" />
            <g clipPath="url(#clip0_1_7009)">
                <path d="M24.5698 35.3L29.0998 39.83C30.9598 41.69 33.9798 41.69 35.8498 39.83L40.2398 35.44C42.0998 33.58 42.0998 30.56 40.2398 28.69L35.6998 24.17C34.7498 23.22 33.4398 22.71 32.0998 22.78L27.0998 23.02C25.0998 23.11 23.5098 24.7 23.4098 26.69L23.1698 31.69C23.1098 33.04 23.6198 34.35 24.5698 35.3Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M29.8999 32.0001C31.2806 32.0001 32.3999 30.8808 32.3999 29.5001C32.3999 28.1193 31.2806 27.0001 29.8999 27.0001C28.5192 27.0001 27.3999 28.1193 27.3999 29.5001C27.3999 30.8808 28.5192 32.0001 29.8999 32.0001Z" stroke="white" strokeLinecap="round" />
            </g>
            <defs>
                <filter id="filter0_bii_1_7009" x="-17.3883" y="-18.5882" width="91.7812" height="91.7813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.2941" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_7009" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_7009" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7.70174" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.427451 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_7009" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4.40099" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.427451 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow_1_7009" result="effect3_innerShadow_1_7009" />
                </filter>
                <clipPath id="clip0_1_7009">
                    <rect x="20.3999" y="20" width="24" height="24" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export const InventoryValue = () => {
    return (
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bii_1_7022)">
                <rect x="5" y="11.2712" width="40" height="40" rx="4" transform="rotate(-10.4735 5 11.2712)" fill="#FF0000" fillOpacity="0.1" />
            </g>
            <rect x="12" y="12" width="40" height="40" rx="4" fill="#FF0000" />
            <g clipPath="url(#clip0_1_7022)">
                <path d="M28.8718 34.3298C28.8718 35.6198 29.8618 36.6598 31.0918 36.6598H33.6018C34.6718 36.6598 35.5418 35.7498 35.5418 34.6298C35.5418 33.4098 35.0118 32.9798 34.2218 32.6998L30.1918 31.2998C29.4018 31.0198 28.8718 30.5898 28.8718 29.3698C28.8718 28.2498 29.7418 27.3398 30.8118 27.3398H33.3218C34.5518 27.3398 35.5418 28.3798 35.5418 29.6698" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.2 26V38" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.2 42C37.7228 42 42.2 37.5228 42.2 32C42.2 26.4772 37.7228 22 32.2 22C26.6771 22 22.2 26.4772 22.2 32C22.2 37.5228 26.6771 42 32.2 42Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_bii_1_7022" x="-17.5882" y="-18.5882" width="91.7812" height="91.7813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.2941" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_7022" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_7022" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7.70174" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_7022" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4.40099" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow_1_7022" result="effect3_innerShadow_1_7022" />
                </filter>
                <clipPath id="clip0_1_7022">
                    <rect x="20.2" y="20" width="24" height="24" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export const RecentInventoryAdd = () => {
    return (
        <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bii_1_6996)">
                <rect x="5.40015" y="11.2712" width="40" height="40" rx="4" transform="rotate(-10.4735 5.40015 11.2712)" fill="#1C43CC" fillOpacity="0.1" />
            </g>
            <rect x="12.4001" y="12" width="40" height="40" rx="4" fill="#1C43CC" />
            <g clipPath="url(#clip0_1_6996)">
                <path d="M43.6001 38C43.6001 38.75 43.3901 39.46 43.0201 40.06C42.8101 40.42 42.5401 40.74 42.2301 41C41.5301 41.63 40.6101 42 39.6001 42C38.3801 42 37.2901 41.45 36.5701 40.59C36.5501 40.56 36.5201 40.54 36.5001 40.51C36.3801 40.37 36.2701 40.22 36.1801 40.06C35.8101 39.46 35.6001 38.75 35.6001 38C35.6001 36.74 36.1801 35.61 37.1001 34.88C37.7901 34.33 38.6601 34 39.6001 34C40.6001 34 41.5001 34.36 42.2001 34.97C42.3201 35.06 42.4301 35.17 42.5301 35.28C43.1901 36 43.6001 36.95 43.6001 38Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M41.0901 37.98H38.1101" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M39.6001 36.52V39.51" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23.77 27.44L32.6 32.55L41.37 27.47" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M32.6001 41.61V32.54" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42.21 29.17V34.83C42.21 34.88 42.21 34.92 42.2 34.97C41.5 34.36 40.6 34 39.6 34C38.66 34 37.79 34.33 37.1 34.88C36.18 35.61 35.6 36.74 35.6 38C35.6 38.75 35.81 39.46 36.18 40.06C36.27 40.22 36.38 40.37 36.5 40.51L34.67 41.52C33.53 42.16 31.67 42.16 30.53 41.52L25.19 38.56C23.98 37.89 22.99 36.21 22.99 34.83V29.17C22.99 27.79 23.98 26.11 25.19 25.44L30.53 22.48C31.67 21.84 33.53 21.84 34.67 22.48L40.01 25.44C41.22 26.11 42.21 27.79 42.21 29.17Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <filter id="filter0_bii_1_6996" x="-17.1881" y="-18.5882" width="91.7812" height="91.7813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="11.2941" />
                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_6996" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_6996" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="7.70174" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.262745 0 0 0 0 0.8 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="shape" result="effect2_innerShadow_1_6996" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4.40099" />
                    <feGaussianBlur stdDeviation="2.2005" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.109804 0 0 0 0 0.262745 0 0 0 0 0.8 0 0 0 0.16 0" />
                    <feBlend mode="normal" in2="effect2_innerShadow_1_6996" result="effect3_innerShadow_1_6996" />
                </filter>
                <clipPath id="clip0_1_6996">
                    <rect x="20.6001" y="20" width="24" height="24" rx="2" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}

export const AddIcon = () => {
    const { pathname } = useLocation();

    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.45453 12H18.5454Z" fill={pathname === "add_book" ? "#FFF" : "#05A043"} />
            <path d="M5.45453 12H18.5454" stroke={pathname === "add_book" ? "#FFF" : "#05A043"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 5.45453V18.5454" stroke={pathname === "add_book" ? "#FFF" : "#05A043"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export const Upload = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.31995 6.5L11.8799 3.94L14.4399 6.5" stroke="#FFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.88 14.18V4.01001" stroke="#FFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12V18C4 18.5523 4.44772 19 5 19H19C19.5523 19 20 18.5523 20 18V12" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
}

export const Close = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="close-circle">
                <g id="close-circle_2">
                    <path id="Vector" d="M7 17L17 7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path id="Vector_2" d="M17 17L7 7" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </g>
        </svg>
    );
}

export const More = () => {
    return (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4994 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.4709 16.0017 14.5006 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1666 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM16 9.5C16.2967 9.5 16.5867 9.41203 16.8334 9.24721C17.08 9.08238 17.2723 8.84812 17.3858 8.57403C17.4994 8.29994 17.5291 7.99834 17.4712 7.70737C17.4133 7.41639 17.2704 7.14912 17.0607 6.93934C16.8509 6.72956 16.5836 6.5867 16.2926 6.52882C16.0017 6.47094 15.7001 6.50065 15.426 6.61418C15.1519 6.72771 14.9176 6.91997 14.7528 7.16665C14.588 7.41332 14.5 7.70333 14.5 8C14.5 8.39783 14.658 8.77936 14.9393 9.06066C15.2206 9.34197 15.6022 9.5 16 9.5ZM16 22.5C15.7033 22.5 15.4133 22.588 15.1666 22.7528C14.92 22.9176 14.7277 23.1519 14.6142 23.426C14.5006 23.7001 14.4709 24.0017 14.5288 24.2926C14.5867 24.5836 14.7296 24.8509 14.9393 25.0607C15.1491 25.2704 15.4164 25.4133 15.7074 25.4712C15.9983 25.5291 16.2999 25.4993 16.574 25.3858C16.8481 25.2723 17.0824 25.08 17.2472 24.8334C17.412 24.5867 17.5 24.2967 17.5 24C17.5 23.6022 17.342 23.2206 17.0607 22.9393C16.7794 22.658 16.3978 22.5 16 22.5Z" fill="#918EAF" />
        </svg>
    );
}



export const BurgerMenu = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="8" width="12" height="2" rx="1" fill="#060415" />
            <rect x="3" y="13" width="18" height="2" rx="1" fill="#060415" />
        </svg>
    )
}