import { LinkItem } from "@/shared/types";

type SuperNav = {
  label: string;
  href: string;
};

interface INavItem extends LinkItem {
  superNav?: SuperNav[];
}

export default function Navigationbar({
  children,
  linklist,
}: {
  children?: React.ReactNode;
  linklist: INavItem[];
}) {
  return (
    <nav className="container mx-auto px-4 pt-2  fixed">
      <div className="bg-black text-white flex items-center justify-between p-3 rounded-lg relative">
        <div className="relative max-w-[100px]">{children}</div>
        <div className={`hidden`}></div>
        <div className={`hidden`}></div>

        {/* mobile */}
        <div className="block">
          <div className="flex items-center justify-center p-2 bg-sky-500 rounded-lg">
            <p>Menu</p>
          </div>
        </div>
      </div>

    <div className={` container `}>
      <ul className="md:hidden rounded-lg 
      mt-4 w-full h-auto overflow-hidden items-center justify-center flex-col gap-2 bg-sky-100 p-4">
        {linklist.map((item, idx) => (
          <li key={idx}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
        <li className="border-t-2 border-sky-200/45 my-3"></li>
        <li className={`flex flex-row gap-3 justify-around items-center`}>
            <a href="">cart</a>
            <a href="">account</a>
            <a href="">sad</a>
        </li>
      </ul>
        <div>
            
        </div>
      </div>
    </nav>
  );
}
