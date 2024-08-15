import { ApiMethod } from "./api-method.type";
import UrlBuilder from "./url-builder";

abstract class BaseApiClient {

    constructor(
        protected _baseUrl: string,
        protected endpoints: ApiMethod
    ) {
        this._initMethods(endpoints);
    }

    protected abstract _exec(type: string, params: { [key: string]: string | number }, endpoint: string): Promise<any>;

    private _initMethods(endpoints: ApiMethod): void {
        Object.keys(endpoints).forEach((method) => {
            (this as any)[method] = (params: any = {}) => {
                return new Promise((resolve, reject) => {
                    const resource: string = endpoints[method].resource;
                    const type: string = endpoints[method].method.toUpperCase();
                    const url: string = this._buildUrl(resource, params);
                    this._exec(url, params, type)
                        .then(resolve)
                        .catch(reject);
                });
            }
        });
    }

    protected _buildUrl(endpoint: string, params: { [key: string]: string | number } = {}): string {
        return UrlBuilder
            .builder(`${this._baseUrl}/${endpoint}`)
            .param(params)
            .build();
    };
}

export default BaseApiClient;