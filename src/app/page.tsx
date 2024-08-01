import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const pages = [
		{
			title: 'About',
			slug: 'about',
		},
		{
			title: 'Spatial',
			slug: 'spatial',
		},
		{
			title: 'Purpose',
			slug: 'purpose',
		},
		{
			title: 'Reset',
			slug: 'reset',
		},
		{
			title: 'Build',
			slug: 'build',
		},
		{
			title: 'Define',
			slug: 'define',
		},
		{
			title: 'Changing Faces',
			slug: 'changing faces',
		},
		{
			title: 'Crisis',
			slug: 'crisis',
		},
		{
			title: 'Girlyhood',
			slug: 'girlyhood',
		},
	];

	return (
		<main className="min-h-screen p-24 grid grid-cols-3">
			<section className="col-span-2 px-12 ">
				<div className="h-full flex flex-col justify-center gap-y-8">
					<h2 className="text-sm font-garet uppercase tracking-wider">
						Photography by
					</h2>
					<h1 className="text-7xl text-crayola-blue font-maragsa">
						Lana Gordon
					</h1>
					<ul className="text-sm">
						{pages.map((post) => (
							<li
								key={post.title}
								className="inline-block mr-3 underline leading-6"
							>
								<Link href={`/${post.slug}`}>{post.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="col-span-1">
				{' '}
				<div className=" w-full h-full relative">
					<Link href="/spatial">
						<Image
							src="/photography/spatial/spatial-2.jpg"
							alt="Image from the Spatial photoshoot"
							fill={true}
							objectFit="contain"
						/>
					</Link>
				</div>
			</section>

			{/* <div>
				<h2>Mapped List</h2>
				<ul>
					{posts.map((post) => (
						<li key={post.title}>
							<Link href={`/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</div> */}

			{/* <div>
				<Link href="/spatial">
					<Image
						className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
						src="/circle.png"
						alt="Gradient circle"
						width={180}
						height={37}
						priority
					/>
				</Link>
			</div> */}
		</main>
	);
}
