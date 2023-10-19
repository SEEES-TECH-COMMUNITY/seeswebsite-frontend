import React, { type FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@src/utils/function";

interface NutIcon {
  width?: string;
  height?: string;
  rotateDirection: number;
}

const NutIcon: FC<NutIcon> = ({ width, height, rotateDirection }) => {
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 274 246"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: rotateDirection, opacity: 0.3, x: 100 }}
      animate={{ rotate: 0, opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        duration: 2.5,
        bounce: 0.4,
        ease: "easein",
      }}
    >
      <rect width="274" height="246" fill="#F5F5F5" />
      <rect width="274" height="246" fill="white" />
      <ellipse cx="139" cy="123.5" rx="94" ry="90.5" fill="#001242" />
      <ellipse cx="139" cy="123.5" rx="63" ry="59.5" fill="white" />
      <rect x="123" y="20" width="33" height="25" fill="#001242" />
      <rect
        x="156"
        y="227"
        width="33"
        height="25"
        transform="rotate(180 156 227)"
        fill="#001242"
      />
      <path
        d="M206.706 38L228.411 60.133L211.276 76.9373L189.57 54.8043L206.706 38Z"
        fill="#001242"
      />
      <rect
        x="72.1353"
        y="175"
        width="31"
        height="24"
        transform="rotate(45.5586 72.1353 175)"
        fill="#001242"
      />
      <path
        d="M244.996 112L245.607 144.994L220.611 145.457L220 112.463L244.996 112Z"
        fill="#001242"
      />
      <path
        d="M53.9957 112L54.6066 144.994L29.6109 145.457L29 112.463L53.9957 112Z"
        fill="#001242"
      />
      <path
        d="M50 64.2499L71.5858 42L88.8114 58.7116L67.2257 80.9614L50 64.2499Z"
        fill="#001242"
      />
      <path
        d="M227.5 180.551L207.568 204.293L189.186 188.862L209.119 165.12L227.5 180.551Z"
        fill="#001242"
      />
    </motion.svg>
  );
};
export default NutIcon;
