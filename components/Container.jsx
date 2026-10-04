// Shared page container: 1200px content width + responsive side gutter.
// Every section's content lives inside this so all edges line up.
export default function Container({ children, className = "" }) {
  return (
    <div className={`mx-auto w-full max-w-[1248px] px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}
