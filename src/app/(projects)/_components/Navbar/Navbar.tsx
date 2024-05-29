'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
	const pathname = usePathname();
	// You can use usePathname() to determine if a link is active.
	// For example, to add a class to the active link, you can check if the current pathname matches the href of the link:
	return (
		<nav>
			Navbar
			<ul>
				<li>
					<Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
						Home
					</Link>
				</li>
				<li>
					<Link
						className={`link ${pathname === '/about' ? 'active' : ''}`}
						href="/about"
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	);
}
