interface SparkleProps {
  size?: number;
  className?: string;
}

const Sparkle = ({ size = 14, className }: SparkleProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M12 0L13.6 10.4 24 12 13.6 13.6 12 24 10.4 13.6 0 12 10.4 10.4z"
      fill="currentColor"
    />
  </svg>
);

export default Sparkle;
