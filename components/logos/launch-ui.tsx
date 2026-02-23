import Image from "next/image";

const LaunchUI = () => {
  return (
    <Image
      src="/navlogo.png"
      alt="OnXeon Logo"
      width={28}
      height={28}
      priority
    />
  );
};

export default LaunchUI;