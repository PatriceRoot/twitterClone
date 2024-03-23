import React from "react";

export default function React({ Csvg, color }) {
  return (
    <div>
      <svg
        viewBox="-4.4 -6.4 27.8 27.8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-4.4"
          y="-6.4"
          width="27.80"
          height="27.80"
          rx="14.4"
          fill={Csvg}
          strokewidth="0"
        />
        <path
          d="M9.00001 16.5317H8.98834C6.83584 16.4917 0.625008 10.88 0.625008 5.565C0.625008 3.01167 2.72917 0.77 5.12751 0.77C7.03584 0.77 8.31918 2.08667 8.99918 3.045C9.67751 2.08833 10.9608 0.77 12.87 0.77C15.27 0.77 17.3733 3.01167 17.3733 5.56583C17.3733 10.8792 11.1617 16.4908 9.00918 16.53H9.00001V16.5317ZM5.12834 2.02083C3.39501 2.02083 1.87584 3.6775 1.87584 5.56667C1.87584 10.35 7.73751 15.23 9.00084 15.2817C10.2658 15.23 16.1258 10.3508 16.1258 5.56667C16.1258 3.6775 14.6067 2.02083 12.8733 2.02083C10.7667 2.02083 9.59001 4.4675 9.58001 4.49167C9.38834 4.96 8.61668 4.96 8.42418 4.49167C8.41251 4.46667 7.23667 2.02083 5.12917 2.02083H5.12834Z"
          fill={color}
        />
      </svg>
    </div>
  );
}