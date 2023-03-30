import React from "react";
import { Tween } from "react-gsap";

const Logo = () => {
  return (
    <svg
      // width="237"
      // height="172"
      viewBox="0 0 237 172"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* This is scroll path */}
      <path
        d="M43.0005 115.095V53.4361C43.0004 37.9202 63.0008 38.4581 63.0008 53.4361V115.095C63.0008 128.302 43.0005 128.302 43.0005 115.095Z"
        fill="#E36363"
        fillOpacity="0.12"
      />
      {/* This is scroll border */}
      <Tween
        from={{
          svgDraw: 0,
        }}
        to={{
          svgDraw: 1,
        }}
        duration={2}
      >
        <path
          d="M10 126.808V47.5545C10 -2.84921 97.0014 -2.18601 97.0014 47.5545V126.808C97.0014 173.232 10 174.227 10 126.808Z"
          stroke="#D98888"
          strokeWidth="4"
        />
      </Tween>
      {/* This is scroll button */}
      <Tween
        to={{ cy: "115" }}
        delay={2}
        duration={2.5}
        yoyo={true}
        repeat={-1}
        ease="none"
      >
        <ellipse cx="53.0007" cy="55.5" rx="7.00011" ry="7.5" fill="#E36363" />
      </Tween>
      {/* This is play button */}

      <Tween
        from={{
          svgDraw: 0,
        }}
        to={{
          svgDraw: 1,
        }}
        duration={2}
        delay={2}
      >
        <path
          d="M194.766 71.0941C206.388 77.6606 206.254 94.4464 194.529 100.827L138.46 131.34C127.08 137.533 113.232 129.228 113.335 116.272L113.827 54.3594C113.93 41.4034 127.909 33.3202 139.189 39.6937L194.766 71.0941Z"
          stroke="#3fcbb2"
          strokeWidth="4"
        />
      </Tween>
      {/* <defs>
        <filter
          id="filter0_d_2_2"
          x="5"
          y="9"
          width="204.403"
          height="162"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2_2"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_2_2"
          x="42.0006"
          y="44"
          width="22.0002"
          height="23"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_2_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_2_2"
            result="shape"
          />
        </filter>
      </defs> */}
    </svg>
  );
};

export default Logo;
