import React from "react";

export default function Retweet({ Csvg, color }) {
  return (
    <div>
      <svg
        viewBox="-6.4 -9.4 33.8 33.8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-6.4"
          y="-9.4"
          width="32.80"
          height="32.80"
          rx="14.4"
          fill={Csvg}
          strokeWidth="0"
        />
        <path
          d="M19.8083 10.5583C19.565 10.3142 19.1692 10.3142 18.925 10.5583L17.075 12.4083V3.875C17.075 2.15166 15.6725 0.749997 13.95 0.749997H9.07501C8.73001 0.749997 8.45001 1.03 8.45001 1.375C8.45001 1.72 8.73001 2 9.07501 2H13.95C14.9833 2 15.825 2.84166 15.825 3.875V12.4083L13.975 10.5583C13.7308 10.3142 13.335 10.3142 13.0917 10.5583C12.8483 10.8025 12.8467 11.1983 13.0917 11.4417L16.0083 14.3583C16.1292 14.4808 16.2892 14.5417 16.45 14.5417C16.6108 14.5417 16.7692 14.4817 16.8917 14.3583L19.8083 11.4417C20.0533 11.1983 20.0533 10.8025 19.8083 10.5583ZM10.925 13.2917H6.05001C5.01667 13.2917 4.17501 12.45 4.17501 11.4167V2.88333L6.02501 4.73333C6.14834 4.85583 6.30834 4.91666 6.46834 4.91666C6.62834 4.91666 6.78834 4.85583 6.91001 4.73333C7.15417 4.48916 7.15417 4.09333 6.91001 3.85L3.99334 0.93333C3.74917 0.68833 3.35334 0.68833 3.11001 0.93333L0.19334 3.85C-0.0516599 4.09333 -0.0516599 4.48916 0.19334 4.73333C0.43834 4.9775 0.832507 4.9775 1.07667 4.73333L2.92667 2.88333V11.4167C2.92667 13.14 4.32917 14.5417 6.05167 14.5417H10.9267C11.2717 14.5417 11.5517 14.2617 11.5517 13.9167C11.5517 13.5717 11.2708 13.2917 10.9267 13.2917H10.925Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
