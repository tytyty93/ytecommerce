import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            $0.00 <span className="text-gray-500 text-sm">(0)</span>
          </p>
        </Link>
      </div>
    </header>
  );
}
