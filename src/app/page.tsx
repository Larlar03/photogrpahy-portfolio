import Image from 'next/image';
import Link from 'next/link';

import Navbar from '@/app/(projects)/_components/Navbar/Navbar';

import { pages } from '@/utils/const';

export default function Home() {
	return (
		<main className="min-h-screen p-24 grid grid-cols-1 md:grid-cols-3 gap-y-6 text-center md:text-left">
			<section className="col-span-2 px-12 h-full flex flex-col justify-center gap-y-8 ">
				<h2 className="text-sm font-garet uppercase tracking-wider">
					Photography by
				</h2>
				<h1 className="text-7xl text-crayola-blue font-maragsa">Lana Gordon</h1>
				{/* <ul className="text-sm">
					{pages.map((page) => (
						<li
							key={page.title}
							className="inline-block mr-3 underline leading-6"
						>
							<Link href={page.slug}>{page.title}</Link>
						</li>
					))}
				</ul> */}
				<nav className="mb-2">
					<Navbar />
				</nav>
			</section>
			<section className="col-span-1 ">
				{' '}
				<div className="w-full h-[450px] md:h-full relative">
					<Link href="/spatial">
						<Image
							src="/photography/spatial/spatial-2.jpg"
							alt="Image from the Spatial photoshoot"
							layout="fill"
							objectFit="contain"
						/>
					</Link>
				</div>
			</section>
		</main>
	);
}
