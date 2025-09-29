import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { posts } from '../data';

export const load: PageServerLoad = ({ params }) => {
	const post = posts.find((post) => post.slug === (params as { slug: string }).slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
