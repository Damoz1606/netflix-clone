import endpoints from "./endpoints";

type TmdbMethod = keyof typeof endpoints.methods;
type TmdbApi = {
    [key in TmdbMethod]: (params: any | undefined) => Promise<any>;
};

export interface TmdbApiConfig extends TmdbApi { }