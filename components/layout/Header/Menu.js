import Link from "next/link";

export default function Menu() {
  return (
    <>
      <div className="main-menu">
        <div className="menu-action">
          <span className="item menu-back">
            <i className="las la-arrow-left" />
          </span>
          <span className="item menu-close">
            <i className="las la-times" />
          </span>
        </div>

        <ul className="navigation">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="https://trkmad.com/2237554">Download App</Link>
          </li>
          <li>
            <Link href="https://olymptrade.com.in/contact-us/">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
