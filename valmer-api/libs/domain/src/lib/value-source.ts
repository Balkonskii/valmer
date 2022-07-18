import { PuppeteerLifeCycleEvent } from 'puppeteer';
import { ValueSelector } from './value-selector';

export interface ValueSource {
    id: string;
    url: string;
    loadTryCount: number;
    loadTryTimeout: number;
    timeoutAfterNavigation?: number;
    waitUntil?: PuppeteerLifeCycleEvent;
    selectors: ValueSelector[];
}
