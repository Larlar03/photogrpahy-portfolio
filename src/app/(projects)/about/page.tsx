import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TwoColumnContainer from '@/app/(projects)/_components/Container/TwoColumnContainer';

export default function About() {
	return (
		<TwoColumnContainer>
			<section className="flex flex-col justify-center py-4">
				<p className="font-maragsa text-4xl text-dark-grey">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					laoreet mattis purus. Donec iaculis sodales mauris convallis porta.
					Class aptent taciti sociosqu ad litora.
				</p>
			</section>
			<section className="flex flex-col md:flex-row gap-4 py-4">
				<figure className="relative w-full h-[350px] md:w-1/2 md:h-full">
					<Link href="/changing-faces">
						<Image
							src="/photography/changing-faces/changing-1.jpg"
							alt="Image from the Changing Faces photoshoot"
							layout="fill"
							objectFit="cover" // Changed to 'cover' to fill the container
						/>
					</Link>
				</figure>
				<figure className="relative w-full h-[350px] md:w-1/2 md:h-full">
					<Link href="/changing-faces">
						<Image
							src="/photography/changing-faces/changing-9.jpg"
							alt="Image from the Changing Faces photoshoot"
							layout="fill"
							objectFit="cover" // Changed to 'cover' to fill the container
						/>
					</Link>
				</figure>
			</section>
		</TwoColumnContainer>
	);
}
