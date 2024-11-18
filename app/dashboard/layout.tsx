// page.tsx
import SideNav from "@/app/ui/dashboard/sidenav";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<aside className="w-full h-full flex-none md:w-64">
				<SideNav>{children}</SideNav>
			</aside>
			<main className="hidden md:block flex-grow p-6 md:overflow-y-auto">
				{children}
			</main>
		</div>
	);
};

export default Layout;
