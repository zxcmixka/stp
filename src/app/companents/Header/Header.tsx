import Link from "next/link";
import usericon from "../../../../public/img/usericon.png"

export const Header = () => {
  return (
    <header className="text-white shadow-md p-4 flex justify-between items-center no-select">
      <h1 className="text-xl select-none font-Popins">
        <Link href="/" className="hover:text-gray-400">
          SAH
        </Link>
      </h1>

      <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        <Link href="/sale" className="hover:text-gray-400">
          Sale
        </Link>
        <Link href="/briefcase" className="hover:text-gray-400">
          Game Briefcase
        </Link>
        <Link href="/trading" className="hover:text-gray-400">
          Trading assistant
        </Link>
      </nav>

        <img src={usericon.src} alt="User icon" className="w-8 h-8 rounded-full bg-white" />
      
    </header>
  );
};
