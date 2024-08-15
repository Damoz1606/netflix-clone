const TmdbVersionEndpoint = {
    v3: '3',
    v4: '4'
}

const TmdbAuthenticationEndpoint = {
    requestToken: 'authentication/token/new',
    session: 'authentication/session/new'
}

const TmdbMethodEndpoint = {
    configuration: { resource: "configuration", method: "get" },
    find: { resource: "find/:id", method: "get" },
    searchCollection: { resource: "search/collection", method: "get" },
    searchCompany: { resource: "search/company", method: "get" },
    searchKeyword: { resource: "search/keyword", method: "get" },
    searchMovie: { resource: "search/movie", method: "get" },
    searchMulti: { resource: "search/multi", method: "get" },
    searchPerson: { resource: "search/person", method: "get" },
    searchTv: { resource: "search/tv", method: "get" },
    collectionDetails: { resource: "collection/:id", method: "get" },
    collectionimages: { resource: "collection/:id/images", method: "get" },
    discoverMovie: { resource: "discover/movie", method: "get" },
    discoverTv: { resource: "discover/tv", method: "get" },
    movieDetails: { resource: "movie/:id", method: "get" },
    movieAlternativeTitles: { resource: "movie/:id/alternative_titles", method: "get" },
    movieChanges: { resource: "movie/:id/changes", method: "get" },
    movieCredits: { resource: "movie/:id/credits", method: "get" },
    movieImages: { resource: "movie/:id/images", method: "get" },
    movieKeywords: { resource: "movie/:id/keywords", method: "get" },
    movieRecommendations: { resource: "movie/:id/recommendations", method: "get" },
    movieReleaseDates: { resource: "movie/:id/release_dates", method: "get" },
    movieReviews: { resource: "movie/:id/reviews", method: "get" },
    movieSimilar: { resource: "movie/:id/similar_movies", method: "get" },
    movieTranslations: { resource: "movie/:id/translations", method: "get" },
    movieVideos: { resource: "movie/:id/videos", method: "get" },
    tvAiringToday: { resource: "tv/airing_today", method: "get" },
    tvOnTheAir: { resource: "tv/on_the_air", method: "get" },
    tvDetails: { resource: "tv/:id", method: "get" },
    tvChanges: { resource: "tv/:id/changes", method: "get" },
    tvCredits: { resource: "tv/:id/credits", method: "get" },
    tvImages: { resource: "tv/:id/images", method: "get" },
    tvKeywords: { resource: "tv/:id/keywords", method: "get" },
    tvRecommendations: { resource: "tv/:id/recommendations", method: "get" },
    tvSimilar: { resource: "tv/:id/similar", method: "get" },
    tvTranslations: { resource: "tv/:id/translations", method: "get" },
    tvVideos: { resource: "tv/:id/videos", method: "get" },
    tvSeasonDetails: { resource: "tv/:id/season/:season_number", method: "get" },
    tvSeasonCredits: { resource: "tv/:id/season/:season_number/credits", method: "get" },
    tvSeasonImages: { resource: "tv/:id/season/:season_number/images", method: "get" },
    tvSeasonVideos: { resource: "tv/:id/season/:season_number/videos", method: "get" },
    tvEpisodeDetails: { resource: "tv/:id/season/:season_number/episode/:episode_number", method: "get" },
    tvEpisodeCredits: { resource: "tv/:id/season/:season_number/episode/:episode_number/credits", method: "get" },
    tvEpisodeImages: { resource: "tv/:id/season/:season_number/episode/:episode_number/images", method: "get" },
    tvEpisodeVideos: { resource: "tv/:id/season/:season_number/episode/:episode_number/videos", method: "get" },
    personDetails: { resource: "person/:id", method: "get" },
    personChanges: { resource: "person/:id/changes", method: "get" },
    personCombinedCredits: { resource: "person/:id/combined_credits", method: "get" },
    personExternalIds: { resource: "person/:id/external_ids", method: "get" },
    personImages: { resource: "person/:id/images", method: "get" },
    personLatest: { resource: "person/latest", method: "get" },
    personMovieCredits: { resource: "person/:id/movie_credits", method: "get" },
    personTvCredits: { resource: "person/:id/tv_credits", method: "get" },
    personTaggedImages: { resource: "person/:id/tagged_images", method: "get" },
    personPopular: { resource: "person/popular", method: "get" },
    creditDetails: { resource: "credit/:id", method: "get" },
    genreMovieList: { resource: "genre/movie/list", method: "get" },
    genreTvList: { resource: "genre/tv/list", method: "get" },
    keywordInfo: { resource: "keyword/:id", method: "get" },
    companyDetails: { resource: "company/:id", method: "get" },
    accountDetails: { resource: "account", method: "get" },
    accountFavoriteMovies: { resource: "account/:id/favorite_movies", method: "get" },
    accountLists: { resource: "account/:id/lists", method: "get" },
    accountMovieWatchlist: { resource: "account/:id/watchlist/movies", method: "get" },
}

const endpoints = {
    version: TmdbVersionEndpoint,
    authentication: TmdbAuthenticationEndpoint,
    methods: TmdbMethodEndpoint
}

export default endpoints;