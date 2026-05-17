import { Fragment, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Width from '../utils/Width';
import ThemeToggle from '../ui/ThemeToggle';
import { links, socials } from '../../lib/navigation';
import Signature from './Signature';

function DesktopNav() {
	return (
		<nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border border-teal-700/40! bg-card/80 px-8 shadow backdrop-blur-sm max-lg:hidden">
			<ul className="flex items-center gap-6">
				{links.map((link, index) => (
					<Fragment key={index}>
						<li >
							<a href={link.href} className="hover:text-primary transition-colors text-xs">
								{link.name}
							</a>
						</li>
						{index < links.length - 1 && (
							<div className="h-2 w-0.5 rounded-full bg-primary"></div>
						)}
					</Fragment>
				))}
				<div className="h-2 w-0.5 rounded-full bg-primary"></div>
				<ThemeToggle />
			</ul>
		</nav>
	);
}

function MobileNav() {
	const [open, setOpen] = useState(false);

	return (
		<div className="lg:hidden">
			<button
				onClick={() => setOpen(!open)}
				className="fixed right-4 top-5 z-50 rounded-lg border bg-card/80 p-2 backdrop-blur-sm"
				aria-label="Toggle menu"
			>
				{open ? <X className="size-6" /> : <Menu className="size-6" />}
			</button>

			{/* Mobile Menu Overlay */}
			{open && (
				<>
					<div
						className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
						onClick={() => setOpen(false)}
					/>
					<div className="fixed right-0 top-0 z-40 h-full w-80 max-w-full border-l bg-card shadow-lg">
						<div className="flex h-full flex-col justify-between p-8 pt-20">
							<div>
								<h2 className="mb-8 text-xl font-bold text-primary">Menu</h2>
								<ul className="mb-8 space-y-4">
									{links.map((link) => {
										const Icon = link.icon;
										return (
											<li key={link.name}>
												<a
													href={link.href}
													onClick={() => setOpen(false)}
													className="flex items-center gap-4 text-lg hover:text-primary hover:underline"
												>
													<Icon className="size-5" />
													{link.name}
												</a>
											</li>
										);
									})}
								</ul>
								<div>
									<h3 className="mb-2 font-semibold">Settings</h3>
									<div className="flex items-center justify-between text-sm">
										<span>Toggle theme</span>
										<ThemeToggle />
									</div>
								</div>
							</div>
							<div className="flex w-full flex-col items-center">
								<ul className="mb-4 flex gap-4">
									{socials.map((social) => {
										const Icon = social.icon;
										return (
											<li key={social.name}>
												<a
													href={social.href}
													target="_blank"
													rel="noopener noreferrer"
													className="grid justify-items-center"
												>
													<Icon className="size-6 hover:text-primary" />
												</a>
											</li>
										);
									})}
								</ul>
								<p className="text-xs text-muted-foreground">
									Copyright &copy; 2025. All rights reserved
								</p>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default function Navbar() {
	return (
		<Width className="z-30">

			<Signature />
			<MobileNav />
			<DesktopNav />
		</Width>
	);
}
