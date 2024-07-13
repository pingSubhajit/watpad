import {MetadataRoute} from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://watpad.xyz',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://watpad.xyz/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		}
	]
}