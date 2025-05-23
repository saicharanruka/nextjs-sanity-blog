async function getData() {
	const query = `*[_type == "post"] | order(_createdAt desc) { title,
  smallDescription,
  "currentSlug":slug.current } `;
}

export default function Home() {
	return <div>Hello from index</div>;
}
