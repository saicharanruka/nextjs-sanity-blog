import Link from "next/link";
import { ModeToggle } from "@/components/ThemeToggle";

const NavBar = () => {
	return (
		<nav className="w-full relative flex items-center justify-between py-5">
			<Link href="/" className="font-bold text-2xl">
				NextJS <span className="text-primary">Blog</span>
			</Link>
			<ModeToggle />
		</nav>
	);
};

export default NavBar;
