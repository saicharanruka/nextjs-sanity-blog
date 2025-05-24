import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30;

async function getData() {
	const query = `*[_type == "post"] | order(_createdAt desc) { title,
  smallDescription,
  "currentSlug":slug.current,
  titleImage } `;

	const data = await client.fetch(query);
	return data;
}

export default async function Home() {
	const data: simpleBlogCard[] = await getData();
	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 mt- gap-5">
			{data.map((post, idx) => (
				<Card
					key={idx}
					className="shadow-xl hover:shadow-2xl transition dark:shadow-white/20"
				>
					<Image
						src={urlFor(post.titleImage).url()}
						alt={post.title}
						width={500}
						height={500}
						className="rounded-t-lg h-[200px] object-cover"
					/>
					<CardContent className="mt-3">
						<h3 className="text-lg line-clamp-2 font-semibold">{post.title}</h3>
						<p className="mt-2 text-sm font-medium line-clamp-3 opacity-60">
							{post.smallDescription}
						</p>
						<Button asChild className="w-full mt-7 bg-primary dark:bg-primary">
							<Link href={`/blog/${post.currentSlug}`}> Read More</Link>
						</Button>
					</CardContent>
				</Card>
			))}
		</div>
	);
}
