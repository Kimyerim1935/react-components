import { RefObject } from '../../../node_modules/react';
export interface TabContextType {
    linkRefs: RefObject<HTMLButtonElement>[];
}
export declare const TabContext: import('../../../node_modules/react').Context<TabContextType | undefined>;
