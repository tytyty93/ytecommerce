import Link from "next/link";
import Logo from "./Logo";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "use-shopping-cart";

export default function Header() {
  const { formattedTotalPrice, cartCount } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-white z-10 shadow">
      <div className="container mx-auto p-6 flex justify-between">
        <Logo />
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0" />
          </div>
          <p className="text-lg">
            {formattedTotalPrice}{" "}
            <span className="text-gray-500 text-sm">({cartCount})</span>
          </p>
        </Link>
      </div>
    </header>
  );
}
