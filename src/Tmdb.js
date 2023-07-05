const API_KEY = "3931ac0cef768c488115590bdf7641e4"; // variavel para guardar chave key
const API_BASE = "https://api.themoviedb.org/3"; // variavel para guardar a url 

/*
- originais Empire Movie
- recomendados (trending)
- em alta ( top rated)
- ação
- comédia
- terror
- romance
- documentários
- cada uma dessas informações é uma consulta diferente 
*/

//função auxiliar para fazer o fetch e retornar o json
const basicFetch = async (endpoint) => {// recebe a url
    const req = await fetch(`${API_BASE}${endpoint}`); //await recebe a resposta para poder ir para o próximo
    const json = await req.json();
    return json;

}

export default{
    // criar uma função que vai buscar as informações e retornar cada lista em seu espaço
    getHomeList: async () => { // função assincrona que ira nos retornar um array
        return [
            { // objetos
                slug: "originais",
                title: "Originais Empire Movie",
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)//filtro

            },
            {
                slug: "trending",
                title: "Recomendados para você",
                items: await basicFetch(`/trending/all/week?languange=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "toprated",
                title: "Em alta",
                items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "action",
                title: "Ação",
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "comedy",
                title: "Comédia",
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "horror",
                title: "Terror",
                items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "romance",
                title: "Romance",
                items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: "documentary",
                title: "Documentários",
                items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ];
    }

} // exportar json com as funções