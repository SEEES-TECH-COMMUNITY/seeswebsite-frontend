import React, { type FC } from "react";

interface IResourceIcon {
  className?: string;
}

const ResourceIcon: FC<IResourceIcon> = (props) => {
  return (
    <svg
      {...props}
      viewBox="0 0 23 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16504 11.2862L10.8073 16.1073C10.9385 16.1729 11.004 16.2057 11.0728 16.2186C11.1338 16.23 11.1963 16.23 11.2572 16.2186C11.326 16.2057 11.3916 16.1729 11.5228 16.1073L21.165 11.2862M1.16504 6.2862L10.8073 1.46508C10.9385 1.39949 11.004 1.3667 11.0728 1.35379C11.1338 1.34236 11.1963 1.34236 11.2572 1.35379C11.326 1.3667 11.3916 1.39949 11.5228 1.46508L21.165 6.2862L11.5228 11.1073C11.3916 11.1729 11.326 11.2057 11.2572 11.2186C11.1963 11.23 11.1338 11.23 11.0728 11.2186C11.004 11.2057 10.9385 11.1729 10.8073 11.1073L1.16504 6.2862Z"
        stroke="#7E7E7E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ResourceIcon;
