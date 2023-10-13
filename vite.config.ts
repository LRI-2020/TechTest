// vite.config.js
import path from "path";

// @ts-ignore
console.log(path.resolve(__dirname, 'src'));
export default {

    base: "/TechTest",

    root: path.resolve(__dirname, ''),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    }
       
    // config options
}
