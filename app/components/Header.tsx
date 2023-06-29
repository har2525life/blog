import Link from "next/link";

import "../styles/header.scss";
export default function Header() {
  const links = ["home", "blog", "create", "training"];
  return (
    <nav className="w-full bg-red">
      <div className="side-space flex justify-between border-b mx-auto h-14">
        <div className="flex flex-col justify-center">アイコン</div>
        <ul className="flex">
          {links.map((link) => (
            <li className="flex ml-5 hover:bg-red-200 hover:cursor-pointer">
              <Link className="h-full flex items-center" href={link === "home" ? "/" : link}>{link.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
