import Link from "next/link";
import classes from "./Header.module.css";

const NAV_ITEMS = [
  {
    href: "/",
    label: "Index",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/users",
    label: "Users",
  },
  {
    href: "/comment",
    label: "Comment",
  },
  {
    href: "/playground",
    label: "Playground",
  },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} legacyBehavior>
            <a className={classes.anchor}>{item.label}</a>
          </Link>
        );
      })}
    </header>
  );
};
