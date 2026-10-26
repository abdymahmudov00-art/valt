interface ArrowIconProps {
  size?: number;
  className?: string;
}

const ArrowIcon = ({ size = 18, className }: ArrowIconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    aria-hidden="true"
  >
    <path d="M4 12h16M14 6l6 6-6 6" />
  </svg>
);

export default ArrowIcon;
