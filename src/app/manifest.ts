import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "The Yard Thai Cuisine",
		short_name: "The Yard Thai",
		description:
			"Authentic Thai Food in Agoura Hills - Women-owned restaurant serving fresh Thai cuisine with traditional recipes",
		start_url: "/",
		display: "standalone",
		background_color: "#FEFBF6",
		theme_color: "#F4D03F",
		icons: [
			{
				src: "/icon-192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
