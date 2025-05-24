import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
	const query = `*[_type == "post" &&
  slug.current == "${slug}"]
{title,titleImage,content}[0]`;

	const data = await client.fetch(query);
	return data;
}

export default async function BlogArticle({
	params,
}: {
	params: { slug: string };
}) {
	const { slug } = await params;
	const data: fullBlog = await getData(slug);

	return (
		<div className="mt-6">
			<h1 className="block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
				{data.title}
			</h1>
			<Image
				src={urlFor(data.titleImage).url()}
				alt={data.title}
				width={800}
				height={800}
				priority
				className="rounded-lg object-cover mt-8 border"
			/>
			<div className="my-16 prose prose-lg prose-green dark:prose-invert prose-li:text-primary">
				<PortableText value={data.content} />
			</div>
		</div>
	);
}

// {
// 	params,
// }: {
// 	params: { slug: string };
// }
