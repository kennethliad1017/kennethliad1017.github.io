import React from "react";
import { iconPaths } from "./IconPaths";

type SocialProps = {
  icon: keyof typeof iconPaths;
  color?: string;
  size?: string;
};

function SocialIcons({ color = "currentColor", icon, size }: SocialProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={color}
      fill={color}
      style={{
        width: size,
        height: size,
      }}
    >
      <g dangerouslySetInnerHTML={{ __html: iconPaths[icon] }} />
    </svg>
  );
}

export default SocialIcons;
