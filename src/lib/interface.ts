export interface simpleBlogCard {
	title: string;
	smallDescription: string;
	currentSlug: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	titleImage: any;
}

export interface fullBlog {
	title: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	content: any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	titleImage: any;
}
