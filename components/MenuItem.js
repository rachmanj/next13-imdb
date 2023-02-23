import Link from "next/link";

const MenuItem = ({ title, address, icon }) => {
  return (
    <div>
      <Link href={address} className="mx-4 lg:mx-6 hover:text-amber-600">
        <div className="text-2xl sm:hidden mx-4">{icon}</div>
        <p className="hidden sm:inline my-2">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
