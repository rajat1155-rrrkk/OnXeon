import Image from "next/image";

const LaunchUI = () => {
  return (
    <span className="group relative inline-flex items-center justify-center">
      <Image
        src="/navlogo.png"
        alt="OnXeon Logo"
        width={28}
        height={28}
        priority
        className="relative z-10 transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </span>
  );
};

export default LaunchUI;
