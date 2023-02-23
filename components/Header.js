import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" icon={<AiFillHome />} />
        <MenuItem title="ABOUT" address="/about" icon={<BsInfoCircleFill />} />
      </div>
      <div>
        <Link href={"/"}>
          <h2 className="text-2xl">
            <span className="font-blod bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
