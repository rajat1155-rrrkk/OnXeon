import Image from "next/image";

const LaunchUI = () => {
  return (
    <span className="group relative inline-flex items-center justify-center">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-brand/25 opacity-0 blur-sm transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
      />
      <Image
        src="/navlogo.png"
        alt="OnXeon Logo"
        width={28}
        height={28}
        priority
        className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full border border-brand/35 opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100"
      />
    </span>
  );
};

export default LaunchUI;
