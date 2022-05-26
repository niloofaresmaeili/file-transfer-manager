import * as fs from 'fs';
import * as path from 'path';

export async function  getDirectory() {
    return fs.readdirSync(path.normalize(path.join(__dirname, '../../..')))
}

export async function getPath(pathInput: string){
    return path.dirname(path.normalize(pathInput));
}

