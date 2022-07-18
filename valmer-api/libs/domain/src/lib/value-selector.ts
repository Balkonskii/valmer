import { ValueSelectorType } from './value-selector-type';

export interface ValueSelector {
    id: string;
    selector: string;
    type: ValueSelectorType | string;
}
