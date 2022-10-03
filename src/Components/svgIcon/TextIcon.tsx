import * as React from "react";
import { SVGProps } from "react";

export const TextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    viewBox="0 0 90 90"
    {...props}
  >
    <path d="M15.4 13.3c-.3.8-.4 4.1-.2 7.3l.3 5.9h4c3.6 0 4-.3 4.3-2.8.3-2.7.4-2.7 7.8-2.7H39v47.9l-2.7.3c-2.5.3-2.8.7-2.8 4.3v4h23v-4c0-3.6-.3-4-2.7-4.3l-2.8-.3V21h7.4c7.4 0 7.5 0 7.8 2.7.3 2.5.7 2.8 4.3 2.8h4v-14l-29.3-.3c-24.1-.2-29.3 0-29.8 1.1z" />
  </svg>
);
