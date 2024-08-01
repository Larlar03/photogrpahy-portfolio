import React from 'react';
import Navbar from '@/app/(projects)/_components/Navbar/Navbar';

export default function ProjectTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="h-screen flex flex-col p-24 overflow-auto">
			<nav className="mb-2 text-left md:text-center">
				<Navbar />
			</nav>
			<section className="flex-1 ">{children}</section>
		</main>
	);
}
