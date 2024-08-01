import React from 'react';

export default function TwoColumnContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
			{children}
		</div>
	);
}
