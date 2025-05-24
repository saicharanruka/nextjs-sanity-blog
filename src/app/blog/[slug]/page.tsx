import { fullBlog } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
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
		<div>
			<h1>{data.title}</h1>
			{/* <p>{data.content}</p> */}
		</div>
	);
}

// {
// 	params,
// }: {
// 	params: { slug: string };
// }
