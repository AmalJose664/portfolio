import { ArrowRight, Mail } from 'lucide-react';
import Button from '../ui/Button';
import Width from '../utils/Width';
import { contacts, links, socials } from '../../lib/navigation';
import { personalInfo, footerInfo } from '../../lib/data';

export default function Footer() {
	return (
		<footer>
			{/* Thanks for stopping by section */}
			<div className="bg-muted/40 py-32 lg:py-64">
				<Width className="flex flex-col lg:items-center lg:text-center">
					<h2 className="mb-4 w-fit bg-gradient-to-r from-primary via-primary/70 to-primary bg-clip-text text-xl font-bold text-transparent lg:mb-6 lg:text-3xl">
						{footerInfo.thankYouTitle}
					</h2>
					<p className="mb-8 max-w-[700px] text-muted-foreground lg:mb-12">
						{footerInfo.thankYouMessage}
					</p>
					<Button href={`mailto:${personalInfo.email}`}>
						<Mail />
						Say Hello
						<ArrowRight />
					</Button>
				</Width>
			</div>

			{/* Footer content */}
			<Width>
				<div className="flex gap-8 border-b border-muted-foreground/10 py-12 max-lg:flex-col">
					{/* About section */}
					<div className="max-w-[600px] flex-grow">
						<h3 className="mb-4 font-semibold">{personalInfo.name.full}</h3>
						<p className="mb-4 text-muted-foreground text-sm">
							{footerInfo.aboutText}
						</p>

					</div>

					{/* Quick Links */}
					<div className="flex-grow">
						<h3 className="mb-4 font-semibold">Quick Links</h3>
						<ul className="flex flex-col gap-2">
							{links.map((link) => {
								const Icon = link.icon;
								return (
									<li key={link.name}>
										<a
											href={link.href}
											className="flex items-center text-sm gap-2 text-muted-foreground hover:text-foreground hover:underline focus-within:text-foreground focus-within:underline"
										>
											<Icon className="size-5" />
											{link.name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>

					{/* Get in Touch */}
					<div className="flex-grow">
						<h3 className="mb-4 font-semibold">Get in Touch</h3>
						<ul className="flex flex-col gap-2">
							{contacts.map((contact) => {
								const Icon = contact.icon;
								return (
									<li key={contact.name}>
										<a
											href={contact.href}
											className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground hover:underline focus-within:text-foreground focus-within:underline"
										>
											<Icon className="size-5" />
											{contact.value}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="flex-grow">
						<h3 className="mb-4 font-semibold">Connect</h3>
						<ul className="flex gap-4">
							{socials.map((social) => {
								const Icon = social.icon;
								return (
									<li
										key={social.name}
										className="rounded-lg border  bg-background p-2 transition-colors hover:border-primary hover:bg-primary/50 focus-within:border-primary focus-within:bg-primary/50"
									>
										<a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
											<Icon className="size-4" />
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className="py-4">
					<p className="text-muted-foreground text-sm">&copy; {footerInfo.copyright}</p>
				</div>
			</Width>
		</footer>
	);
}
