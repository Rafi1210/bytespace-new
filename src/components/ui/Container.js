export default function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[1240px] px-5 md:px-8 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}