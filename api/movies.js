import fetch from 'node-fetch';

export default async function handler(req, res) {
    const { query } = req.query;

    const url = query 
        ? `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${query}`
        : `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}&page=1`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch movies' });
    }
}
