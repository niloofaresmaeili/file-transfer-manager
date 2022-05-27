import * as fs from 'fs';
import * as path from 'path';

export async function  getDirectory(pathInput?: string) {
    const dirPath = pathInput ? path.normalize(path.join(process.cwd(),pathInput)) : process.cwd()
    const dir = fs.readdirSync(dirPath).map((f) => {
        let fPath = fs.statSync(path.normalize(path.join(dirPath,f)));
        return fPath.isDirectory() ? (f+'/') : (fPath.isFile() ? f : null)
    })
    const folders = dir.filter(element => {return element?.includes('/');});
    const files = dir.filter(element => {return !(element?.includes('/'));});

    return {folders,files}
}

export async function getPath(pathInput: string){
    return path.dirname(path.normalize(pathInput));
}

export async function makeDirectory(data: {path : string, new_directory_name: string}) {
    let full_path = path.normalize(path.join(process.cwd(),data.path,data.new_directory_name))
    if (!fs.existsSync(full_path)){
        fs.mkdirSync(full_path);
        return true
    }
    return false
}

