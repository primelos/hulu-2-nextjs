import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="">
      <div></div>
      <Image
        className="object-contain"
        src="/static/images/hulu-logo-black-and-white-johns-hopkins-logo-white-1267844.png"
        width={200}
        height={100}
        alt=""
      />
    </header>
  );
};

export default Header;
