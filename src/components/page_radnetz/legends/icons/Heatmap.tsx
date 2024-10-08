export const Heatmap = () => {
  return (
    <svg viewBox="0 0 30 30" width={30} height={30} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient
          cx="42.627%"
          cy="40.866%"
          fx="42.627%"
          fy="40.866%"
          r="69.525%"
          gradientTransform="matrix(0 1 -.94816 0 .814 -.018)"
          id="b"
        >
          <stop stopColor="#952809" offset="0%" />
          <stop stopColor="#952709" stopOpacity=".1" offset="100%" />
        </radialGradient>
        <filter
          x="-11.7%"
          y="-12.4%"
          width="123.5%"
          height="124.8%"
          filterUnits="objectBoundingBox"
          id="a"
        >
          <feGaussianBlur stdDeviation="1" in="SourceGraphic" />
        </filter>
      </defs>
      <path
        d="M249.54 255.296c-4.349 2.853-9.815 7.118-6.543 13.118 3.271 6 6.972 8.108 11.032 6 4.059-2.107 2.607-7.322 2.607-9.161 0-1.839 2.446-3.734 4.995-3.734 2.548 0 8.76-8.105 4.38-9.105s-7.927-2-11.244-1-.878 1.03-5.227 3.882z"
        filter="url(#a)"
        transform="translate(-240 -249)"
        fill="url(#b)"
        fillRule="evenodd"
      />
    </svg>
  )
}
