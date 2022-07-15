import { PuppeteerLifeCycleEvent } from 'puppeteer';

export interface ValueSourceOptions {
    tryCount: number;
    tryTimeout: number;
    waitUntil?: PuppeteerLifeCycleEvent;
}

export interface ValueSource extends ValueSourceOptions {
    url: string;
    valueSelector: string;
}
