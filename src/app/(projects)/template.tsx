import React from 'react';
import Navbar from '@/app/(projects)/_components/Navbar/Navbar';

export default function ProjectTemplate({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-purple-400">
			<Navbar />
			{/* Include shared UI here e.g. a header or sidebar */}
			{children}
		</main>
	);
}
