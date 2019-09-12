import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ margin: "0 8px" }}>about</a>
      </Link>
    </div>
  );
};

export default Header;
