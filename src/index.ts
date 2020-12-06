import * as fs from "fs";
import * as path from "path";
import axios from "axios";

class StructuredDataScraping {
    REGEX_LDJSON = /(<script type="application\/ld\+json">)(.*?)(<\/script>)/gsi;
    
    async download(url: string): Promise<string>{
        const response = await axios.get(url);
        return response.data;
    }

    async load(body: string): Promise<string>{
        return body;
    }

    async loadFromBuffer(body: Buffer): Promise<string>{
        return body.toString();
    }

    async loadFromFile(filename: string): Promise<string>{
        return fs.readFileSync(path.resolve(filename)).toString();
    }   

    async parser(body: string): Promise<Array<any>>{
        const blocks: Array<any> = [];
        let m;

        while ((m = this.REGEX_LDJSON.exec(body)) !== null) {
            if (m.index === this.REGEX_LDJSON.lastIndex) {
                this.REGEX_LDJSON.lastIndex++;
            }
    
            m.forEach((match, groupIndex) => {
                try{
                    if(groupIndex == 2)
                        blocks.push(JSON.parse(match));
                }
                catch(err){}
            });
        }

        return blocks;
    }
}

export default new StructuredDataScraping();