import { Component } from './parentComponent/index';
import { AttributesMap } from './html/assets/AttributeMap';
import { Sleak } from "../main";
import { Default } from "../utils/default";
export declare class Components extends Default {
    private _props;
    private _name;
    private _value;
    private _closed;
    private _isBlock;
    caller: Sleak;
    private _temp;
    private _line;
    private _column;
    private _parent;
    private _count;
    useless: boolean;
    private _stop;
    private _children;
    private _isClosed;
    private _firstRun;
    private _parentComponet;
    private _type;
    private _compiledText;
    isLooped: boolean;
    constructor(props: any);
    get type(): ComponentType;
    set type(value: ComponentType);
    get compiledText(): string;
    set compiledText(value: string);
    get parentComponent(): Component;
    set parentComponent(value: Component);
    get props(): object;
    set props(value: object | AttributesMap);
    get name(): string;
    set name(value: string);
    set __name(value: string);
    get value(): string | any;
    set value(value: string | any);
    get closed(): boolean;
    get isClosed(): boolean;
    set isClosed(value: boolean);
    set closed(value: boolean);
    get isBlock(): boolean;
    set isBlock(value: boolean);
    get temp(): string;
    set temp(value: string);
    set __temp(value: string);
    get line(): number;
    set line(value: number);
    get column(): number;
    set column(value: number);
    get parent(): Components;
    set parent(value: Components);
    get children(): Array<Components>;
    set children(value: Array<Components> | Components);
    get count(): number;
    set count(value: number);
    get stop(): boolean;
    set stop(value: boolean);
    get firstRun(): boolean;
    set firstRun(value: boolean);
    closeComponents(): void;
    compile(...props: any[]): Promise<string>;
}
