import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const { blogId } = event.params;
	try {
		const fetchPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${blogId}`);
		if (!fetchPokemon.ok) {
			throw new Error('Sorry, Pokemon not found 😭');
		}
		const pokemon = await fetchPokemon.json();
		return {
			name: `${pokemon.name}`,
			content: `This is ${pokemon.name}, a ${pokemon.types.map((t) => t.type.name).join('/')} type Pokemon!`
		};
	} catch (error) {
		return {
			title: 'Pokemon Not Found',
			content: `Could not find a Pokémon with the ID "${blogId}".`
		};
	}
};
