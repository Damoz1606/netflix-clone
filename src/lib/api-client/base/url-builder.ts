class UrlBuilder {

    public static builder(url: string): UrlBuilder {
        return new UrlBuilder(url);
    }

    private _urlParams: { [key: string]: string | number } = {};
    private _queryParams: { [key: string]: string | number | boolean } = {};

    private constructor(private readonly _url: string) { }

    public query(params: { [key: string]: string | number | boolean }): UrlBuilder {
        this._queryParams = { ...this._queryParams, ...params };
        return this;
    }
    public param(params: { [key: string]: string | number }): UrlBuilder {
        this._urlParams = { ...this._urlParams, ...params };
        return this;
    }

    build(): string {
        let url = this._url;

        Object.entries(this._urlParams).forEach(([key, value]) => {
            url = url.replace(`:${key}`, value.toString());
        });

        const queryParams = new URLSearchParams();
        Object.entries(this._queryParams).forEach(([key, value]) => {
            queryParams.append(key, value.toString());
        });
        const queryString = queryParams.toString();
        if (queryString) {
            url += `?${queryString}`;
        }
        return url;
    }
}

export default UrlBuilder;