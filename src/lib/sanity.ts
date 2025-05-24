import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
	apiVersion: "2025-05-23",
	dataset: "production",
	projectId: "67z7k6f2",
	useCdn: false,
});

const builder = imageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
	return builder.image(source);
}
