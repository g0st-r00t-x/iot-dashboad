import Link from "next/link"; // Make sure to import Link if you're using Next.js
import NavLinks from "@/app/ui/dashboard/nav-links";
import AcmeLogo from "@/app/ui/acme-logo";
import { PowerIcon } from "@heroicons/react/24/outline";

interface SideNavProps {
	children: React.ReactNode;
}

const SideNav: React.FC<SideNavProps> = ({ children }) => {
	return (
		<div className="flex flex-col justify-between h-full overflow-auto px-3 py-4 md:px-2">
			<Link
				href="/"
				className="mb-2 flex items-end justify-start h-20 rounded-md bg-blue-600 p-4 md:h-40"
			>
				<div className="w-32 text-white md:w-40">
					<AcmeLogo />
				</div>
			</Link>

			<div className="flex-1 md:hidden">{children}</div>

			<div className="fixed bottom-0 left-0 right-0 flex flex-row justify-between space-x-2 bg-gray-50 md:relative md:flex-col md:grow md:space-x-0 md:space-y-2 px-2">
				<NavLinks />
				<div className="hidden w-full h-auto grow rounded-md bg-gray-50 md:block"></div>

				<form>
					<button className="flex items-center justify-center w-full h-[48px] gap-2 p-3 text-sm font-medium rounded-md bg-gray-50 hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
						<PowerIcon className="w-6" />
						<span className="hidden md:block">Sign Out</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default SideNav;
