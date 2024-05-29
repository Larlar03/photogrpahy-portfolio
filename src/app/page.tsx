import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	const posts = [
		{
			title: 'Spatial',
			slug: 'spatial',
		},
		{
			title: 'Purpose',
			slug: 'purpose',
		},
	];

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Homepage</h1>

			<div>
				<h2>Mapped List</h2>
				<ul>
					{posts.map((post) => (
						<li key={post.title}>
							<Link href={`/${post.slug}`}>{post.title}</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<h2>Slug Link</h2>
				<Link href={`/blog/a`}>blog link</Link>
			</div>
			<div>
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
			</div>
		</main>
	);
}
