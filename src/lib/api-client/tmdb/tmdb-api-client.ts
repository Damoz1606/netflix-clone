import { ApiMethod } from "../base/api-method.type";
import BaseApiClient from "../base/base-api-client";
import UrlBuilder from "../base/url-builder";
import endpoints from "./endpoints";
import { TmdbApiConfig } from "./tmdb-api-config.type";

type TmdbRequestToken = { request_token: string, expires_at: Date }

class TmdbBaseApiClient
    extends BaseApiClient
    implements TmdbApiConfig {

    public static _instance: TmdbBaseApiClient | null = null;

    private constructor(
        private readonly _apikey: string,
        private _version: string
    ) {
        super(`https://api.themoviedb.org`, endpoints.methods as ApiMethod);
    }

    public static getInstance(apikey: string, version: keyof typeof endpoints.version = 'v3'): TmdbBaseApiClient {
        if (!TmdbBaseApiClient._instance) {
            TmdbBaseApiClient._instance = new TmdbBaseApiClient(apikey, endpoints.version[version]);
        }
        return TmdbBaseApiClient._instance;
    }

    public setVersion(version: keyof typeof endpoints.version): TmdbBaseApiClient {
        this._version = endpoints.version[version];
        return this;
    }

    private _requestToken(): Promise<TmdbRequestToken> {
        return new Promise((resolve, reject) => {
            const url = this._buildUrl(endpoints.authentication.requestToken)
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': this._apikey
                }
            })
                .then(async (res) => {
                    const data: TmdbRequestToken = await res.json();
                    resolve(data);
                })
                .catch(reject);
        });
    }

    public async requestSession(token: string): Promise<any> {
        const url = this._buildUrl(endpoints.authentication.session, {}, { 'api_key': this._apikey })
        try {
            return "";
            /*             const res = await fetch(url, {
                            method: 'POST',
                            body: JSON.stringify({
                                ...credential,
                                request_token: token
                            }),
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        });
                        if (!res.ok) {
                            throw new Error('Something went wrong');
                        }
                        const data = await res.json();
                        return data; */
        } catch (error) {
            throw error
        }
    }

    protected _exec(type: string, params: any, endpoint: string): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve("");
            /* if (!this._token) reject(new Error('Token not found'));
            fetch(endpoint, {
                method: type.toUpperCase(),
                body: JSON.stringify(params),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${this._token}`
                }
            })
                .then(resolve)
                .catch(reject); */
        });
    }

    protected _buildUrl(endpoint: string, params: { [key: string]: string | number } = {}, query: { [key: string]: string | number | boolean } = {}): string {
        return UrlBuilder
            .builder(`${this._baseUrl}/${this._version}/${endpoint}`)
            .param(params)
            .query(query)
            .build();
    };

    configuration: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    find: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchCollection: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchCompany: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchKeyword: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchMovie: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchMulti: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchPerson: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    searchTv: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    collectionDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    collectionimages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    discoverMovie: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    discoverTv: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieAlternativeTitles: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieChanges: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieImages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieKeywords: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieRecommendations: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieReleaseDates: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieReviews: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieSimilar: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieTranslations: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    movieVideos: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvAiringToday: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvOnTheAir: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvChanges: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvImages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvKeywords: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvRecommendations: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvSimilar: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvTranslations: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvVideos: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvSeasonDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvSeasonCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvSeasonImages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvSeasonVideos: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvEpisodeDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvEpisodeCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvEpisodeImages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    tvEpisodeVideos: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personChanges: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personCombinedCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personExternalIds: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personImages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personLatest: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personMovieCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personTvCredits: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personTaggedImages: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    personPopular: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    creditDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    genreMovieList: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    genreTvList: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    keywordInfo: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    companyDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    accountDetails: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    accountFavoriteMovies: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    accountLists: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
    accountMovieWatchlist: (params: any | undefined) => Promise<any> = () => new Promise((resolve) => resolve(null));
}

const TmdbApiClient = TmdbBaseApiClient.getInstance('API_KEY');

export default TmdbApiClient;