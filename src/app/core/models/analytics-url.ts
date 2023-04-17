interface Browser{
    browserName: string;
    clicks: number;
}


export interface AnalyticsUrl{
    longUrl: string;
    shortUrl: string;
    clicks: number;
    browser: Browser[];
}