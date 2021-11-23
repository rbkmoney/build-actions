"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readDotEnv = void 0;
const env = __importStar(require("dotenv"));
const fs = __importStar(require("fs"));
function readEnv(dotenvFile) {
    if (!fs.existsSync(dotenvFile)) {
        throw new Error('file does not exist');
    }
    const dotenv = env.config({ path: dotenvFile });
    const returnedMap = {};
    for (const key in dotenv.parsed) {
        const value = dotenv.parsed[key];
        const lowercaseKey = key.toLocaleLowerCase();
        returnedMap[lowercaseKey] = value;
    }
    return returnedMap;
}
exports.readDotEnv = readEnv;
