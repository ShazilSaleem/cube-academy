import React from 'react'

function rotateIcon(props) {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25"
        stroke="#2B82C0"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19 1C9.059 1 1 9.059 1 19H19V1Z"
        fill="#2B82C0"
        stroke="#2B82C0"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default rotateIcon