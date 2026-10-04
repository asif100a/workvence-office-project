import React from "react";
import type { ColorValue } from "react-native";
import Svg, { Path, SvgProps } from "react-native-svg";

type IconProps = SvgProps & {
  size?: number;
  color?: ColorValue;
  strokeWidth?: number;
  active?: boolean;
  /** Color used for details "cut out" of the filled active icon (should match the background) */
  cutoutColor?: ColorValue;
};

const resolve = (p: IconProps) => {
  const {
    size,
    color,
    strokeWidth,
    active,
    cutoutColor,
    width,
    height,
    ...svgProps
  } = p;

  return {
    svgProps,
    width: size ?? width ?? 24,
    height: size ?? height ?? 24,
    color: color ?? "#4A4A4A",
    strokeWidth: strokeWidth ?? 1.5,
    active: !!active,
    cutout: cutoutColor ?? "#FFFFFF",
  };
};

export function HomeIcon(p: IconProps) {
  const x = resolve(p);
  return (
    <Svg
      {...x.svgProps}
      width={x.width}
      height={x.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* House body */}
      <Path
        d="M12.8924 2.80982L21.4876 9.59547C21.8112 9.85095 22 10.2405 22 10.6528C22 11.3969 21.3969 12 20.6528 12H20V15.5C20 18.3284 20 19.7426 19.1213 20.6213C18.2426 21.5 16.8284 21.5 14 21.5H10C7.17157 21.5 5.75736 21.5 4.87868 20.6213C4 19.7426 4 18.3284 4 15.5V12H3.34716C2.60315 12 2 11.3969 2 10.6528C2 10.2405 2.1888 9.85095 2.5124 9.59547L11.1076 2.80982C11.3617 2.60915 11.6761 2.5 12 2.5C12.3239 2.5 12.6383 2.60915 12.8924 2.80982Z"
        fill={x.active ? x.color : "none"}
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Door (cutout when active) */}
      <Path
        d="M14.5 21.5V17C14.5 16.0654 14.5 15.5981 14.299 15.25C14.1674 15.022 13.978 14.8326 13.75 14.701C13.4019 14.5 12.9346 14.5 12 14.5C11.0651 14.5 10.5981 14.5 10.25 14.701C10.022 14.8326 9.83261 15.022 9.70096 15.25C9.5 15.5981 9.5 16.0654 9.5 17V21.5"
        fill={x.active ? x.cutout : "none"}
        stroke={x.active ? x.cutout : x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MessageIcon(p: IconProps) {
  const x = resolve(p);
  return (
    <Svg
      {...x.svgProps}
      width={x.width}
      height={x.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Bubble */}
      <Path
        d="M21.5 12C21.5 17.2467 17.2467 21.5 12 21.5C10.3719 21.5 8.8394 21.0904 7.5 20.3687C5.63177 19.362 4.37462 20.2979 3.26592 20.4658C3.09774 20.4913 2.93024 20.4302 2.80997 20.31C2.62741 20.1274 2.59266 19.8451 2.6935 19.6074C3.12865 18.5818 3.5282 16.6382 2.98341 15C2.6698 14.057 2.5 13.0483 2.5 12C2.5 6.75329 6.75329 2.5 12 2.5C17.2467 2.5 21.5 6.75329 21.5 12Z"
        fill={x.active ? x.color : "none"}
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dots (drawn on top, cutout color when active) */}
      <Path
        d="M12.0045 12H12.0135M16 12H16.009M8.009 12H8.01797"
        fill="none"
        stroke={x.active ? x.cutout : x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function OrdersIcon(p: IconProps) {
  const x = resolve(p);
  return (
    <Svg
      {...x.svgProps}
      width={x.width}
      height={x.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Receipt */}
      <Path
        d="M10.94 21.5124L9.02913 20.3073C8.54415 20.0014 8.30166 19.8485 8.03253 19.8397C7.74172 19.8301 7.49493 19.9768 6.97087 20.3073C6.38395 20.6774 5.21687 21.6971 4.46195 21.2108C4 20.9133 4 20.1575 4 18.6458V8.00002C4 5.17158 4 3.75736 4.82699 2.87868C5.65399 2 6.98501 2 9.64706 2H14.3529C17.015 2 18.346 2 19.173 2.87868C20 3.75736 20 5.17158 20 8.00002V18.6458C20 20.1575 20 20.9135 19.538 21.2108C18.7831 21.6971 17.6161 20.6774 17.0291 20.3073C16.5441 20.0014 16.3017 19.8485 16.0325 19.8397C15.7417 19.8301 15.4949 19.9768 14.9709 20.3073L13.06 21.5124C12.5445 21.8374 12.2868 22 12 22C11.7132 22 11.4554 21.8374 10.94 21.5124Z"
        fill={x.active ? x.color : "none"}
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dollar sign (drawn on top, cutout color when active) */}
      <Path
        d="M12 7.5H13.5C14.3284 7.5 15 8.17157 15 9M12 7.5H10.5C9.67157 7.5 9 8.17157 9 9V9.5C9 10.3284 9.67157 11 10.5 11H13.5C14.3284 11 15 11.6716 15 12.5V13C15 13.8284 14.3284 14.5 13.5 14.5H12M12 7.5V6M12 14.5H10.5C9.67157 14.5 9 13.8284 9 13M12 14.5V16"
        fill="none"
        stroke={x.active ? x.cutout : x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ProjectsIcon(p: IconProps) {
  const x = resolve(p);
  return (
    <Svg
      {...x.svgProps}
      width={x.width}
      height={x.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Back folder: always outline only */}
      <Path
        d="M2 19V7.54902C2 6.10516 2 5.38322 2.24332 4.81647C2.5467 4.10985 3.10985 3.5467 3.81647 3.24332C4.38322 3 5.09805 3 6.54902 3H7.04311C7.64819 3 8.22075 3.27394 8.60041 3.74509L10.4175 6M10.4175 6H16C17.4001 6 18.1002 6 18.635 6.27248C19.1054 6.51217 19.4878 6.89462 19.7275 7.36502C20 7.8998 20 8.59987 20 10V11M10.4175 6H7"
        fill="none"
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Front folder: filled when active */}
      <Path
        d="M3.15802 15.5144L3.45643 14.7717C4.19029 12.9449 4.55723 12.0316 5.3224 11.5158C6.08757 11 7.07557 11 9.05157 11H17.1119C19.8004 11 21.1446 11 21.7422 11.8787C22.3397 12.7575 21.8404 14.0002 20.842 16.4856L20.5436 17.2283C19.8097 19.0551 19.4428 19.9684 18.6776 20.4842C17.9124 21 16.9244 21 14.9484 21H6.88812C4.19961 21 2.85535 21 2.25782 20.1213C1.66029 19.2425 2.15953 17.9998 3.15802 15.5144Z"
        fill={x.active ? x.color : "none"}
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function ProfileIcon(p: IconProps) {
  const x = resolve(p);
  return (
    <Svg
      {...x.svgProps}
      width={x.width}
      height={x.height}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Outer ring: always outline only */}
      <Path
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
        fill="none"
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Shoulders: filled when active */}
      <Path
        d="M18.4984 19.1511C17.3377 17.4018 15.2947 16.2009 12.9313 16.0569L11.9984 16C11.6652 16.0083 11.3547 16.0194 11.0617 16.0325C8.71722 16.1376 6.66598 17.3796 5.5 19.1511"
        fill={x.active ? x.color : "none"}
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Head: filled when active */}
      <Path
        d="M14.9961 10C14.9961 11.6569 13.6529 13 11.9961 13C10.3392 13 8.99609 11.6569 8.99609 10C8.99609 8.34315 10.3392 7 11.9961 7C13.6529 7 14.9961 8.34315 14.9961 10Z"
        fill={x.active ? x.color : "none"}
        stroke={x.color}
        strokeWidth={x.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}