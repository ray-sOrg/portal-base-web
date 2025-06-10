import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <div className="w-full pl-12 pr-12 pt-6 pb-6 flex justify-between items-center border-b border-[rgba(255,255,255,0.1)]">
        <div className="flex justify-between items-end">
          <div>
            <Link href="/">
              <span className="inline-block mr-6 ml-6 w-0.25 h-9 bg-white opacity-20 transform rotate-30 align-bottom"></span>
              <span className="text-4xl font-bold">Ghost</span>
              <span className="text-xl">&nbsp;.Stockade</span>
            </Link>
          </div>

          <div className="ml-12">
            <ul className="gap-6 flex text-neutral-400 text-xl">
              <li>
                <Link href="/nav1" className="hover:text-white">
                  nav1
                </Link>
              </li>
              <li>
                <Link href="/nav2" className="hover:text-white">
                  nav2
                </Link>
              </li>
              <li>
                <Link href="/nav3" className="hover:text-white">
                  nav3
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>Tt</div>
      </div>
    </header>
  );
};
