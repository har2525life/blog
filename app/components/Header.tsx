import "../styles/header.scss"
export default function Header() {
  return (
    <nav className="w-full bg-red">
        <div className="side-space flex justify-between border-b mx-auto">
          <div className="">アイコン</div>
          <ul className="flex">
            <li className="">HOME</li>
            <li className="ml-5">BLOG</li>
            <li className="ml-5">PAGE</li>
            <li className="ml-5">TRAINING</li>
            <li className="ml-5">ICON</li>
          </ul>
        </div>
    </nav>
  )
}
