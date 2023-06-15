import React from 'react'

export default function Preloader() {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{ margin: "auto", background: "#fff", display: "block" }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
      >
          <circle
              cx={50}
              cy={50}
              fill="none"
              stroke="#000000"
              strokeWidth={4}
              r={15}
              strokeDasharray="70.68583470577033 25.561944901923447"
          >
              <animateTransform
                  attributeName="transform"
                  type="rotate"
                  repeatCount="indefinite"
                  dur="500ms"
                  values="0 50 50;360 50 50"
                  keyTimes="0;1"
              />
          </circle>
      </svg>

  )
}
