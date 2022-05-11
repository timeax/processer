import { Components } from "..";
import { AttributesMap } from "./assets/AttributeMap";
export declare class Html extends Components {
    private _attributes;
    private _attr;
    private _lookup;
    private _words;
    private _preserveText;
    private _attrTemp;
    isComponent: boolean;
    constructor(props: any);
    closing(char: string): boolean;
    close(): void;
    parseAttr(char: string): void;
    compile(...props: any[]): Promise<string>;
    get attr(): AttributesMap;
    set attr(value: AttributesMap);
    get attrTemp(): string;
    set attrTemp(value: string);
    get attributes(): AttributesMap[];
    set attributes(value: AttributesMap[] | AttributesMap);
    set name(value: string);
    get name(): string;
    get lookup(): boolean;
    set lookup(value: boolean);
    get words(): string;
    set words(value: string);
    get preserveText(): boolean;
    set preserveText(value: boolean);
}