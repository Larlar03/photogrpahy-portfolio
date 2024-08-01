'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { pages } from '@/utils/const';

export default function Navbar() {
	const pathname = usePathname();
	// You can use usePathname() to determine if a link is active.
	// For example, to add a class to the active link, you can check if the current pathname matches the href of the link:
	return (
		<ul>
			{pages.map((page) => (
				<li
					key={page.title}
					className={`inline-block mr-3 leading-6 ${
						pathname === '/' ? 'uppercase' : 'lowercase'
					}`}
				>
					<Link
						className={`link ${
							pathname === page.slug ? 'active' : ''
						} [&.active]:text-crayola-blue`}
						href={page.slug}
					>
						{page.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
