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
const core = __importStar(require("@actions/core"));
const dotenv_1 = require("./dotenv");
try {
    const dotenvFile = core.getInput('path');
    const logVariables = core.getInput('log-variables').toLowerCase() === 'true';
    const maskVariables = core.getInput('mask-variables').toLowerCase() === 'true';
    const variables = (0, dotenv_1.readDotEnv)(dotenvFile);
    if (maskVariables) {
        for (const key in variables) {
            const value = variables[key];
            core.setSecret(value);
        }
    }
    if (logVariables) {
        core.info(`${variables}`);
    }
    else {
        core.info(`loaded ${Object.keys(variables).length} values into the environment`);
    }
    core.setOutput('generic', 'please check for actual outputs');
    for (const key in variables) {
        const value = variables[key];
        core.setOutput(key, value);
    }
}
catch (error) {
    core.setFailed(error.message);
}
