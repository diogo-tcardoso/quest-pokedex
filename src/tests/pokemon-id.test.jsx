    import { getPokemonIDs } from "../services/pokemon-id";
    
    it('should return array of Pokemon IDs when API request is successful', async () => {
        const mockResponse = {
            data: {
                results: [
                    { url: 'https://pokeapi.co/api/v2/pokemon/1/' },
                    { url: 'https://pokeapi.co/api/v2/pokemon/2/' }
                ]
            }
        };
        jest.spyOn(axios, 'get').mockResolvedValue(mockResponse);

        const result = await getPokemonIDs();

        expect(result).toEqual([1, 2]);
        expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon?limit=151');
    });