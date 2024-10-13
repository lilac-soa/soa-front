import Image from "next/image";

export default function Header() {
  return (
    <header className="h-20 bg-black-100 shadow-message-input">
      <div className="mx-auto w-[1120px] h-full flex items-center">
        <Image
          src={"assets/icons/icon-valley.svg"}
          alt={"logo"}
          width={56}
          height={56}
        />
        <p className="text-primary-500 typo-header-1">valley</p>
      </div>
    </header>
  );
}
