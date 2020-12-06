/// <reference types="node" />
declare class StructuredDataScraping {
    REGEX_LDJSON: RegExp;
    download(url: string): Promise<string>;
    load(body: string): Promise<string>;
    loadFromBuffer(body: Buffer): Promise<string>;
    loadFromFile(filename: string): Promise<string>;
    parser(body: string): Promise<Array<any>>;
}
declare const _default: StructuredDataScraping;
export default _default;
