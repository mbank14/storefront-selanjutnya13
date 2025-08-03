import VerticalLinkList from "./vertical-link-list";
import type { LinkItem } from "@/shared/types";

export default function Footer() {
  const collectionsLink: LinkItem[] = [
    {
      label: "Telur",
      href: "/",
    },
    {
      label: "Sarang",
      href: "/",
    },
    {
      label: "Kitty",
      href: "/",
    },
  ];
  const staticLink: LinkItem[] = [
    {
      label: "About",
      href: "/",
    },
    {
      label: "Policy",
      href: "/",
    },
    {
      label: "FAQ",
      href: "/",
    },
  ];

  return (
    <footer className={`px-3 py-5 bg-rose-800 text-white`}>
      <div className="border-t-2 border-solid border-rose-300 w-full "></div>
      <div className=" grid grid-rows-3 md:grid-cols-3">
        <div></div>
        <div className="flex justify-between">
          <VerticalLinkList title="Collections" data={collectionsLink} />
          <VerticalLinkList title="Company" data={staticLink} />
        </div>
        <div></div>
      </div>
      <div className="border-t-2 border-solid border-rose-300 w-full "></div>
    </footer>
  );
}
