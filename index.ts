import * as file from 'file-exists';
import * as fs from 'fs';
import { parse } from 'dotenv'

/**
 * A global variable containing a parsed list of loaded CLI arguments by preferred prefix (--) and separator (=)
 */
export let cliArguments = loadArguments();

/**
 * Reloading CLI arguments via Config file
 * @param filePath The file path
 * @param syncArgv If to sync the new arguments into the process.argv of NodeJS.
 */
export function reloadFromConfigFile(filePath: string, syncArgv = true): void {
    const file = fs.readFileSync(filePath);
    const parsedContens = parse(file);
    if(syncArgv) {
        for(const [key, value] of Object.entries(parsedContens)) {
            const argvItemValue = `--${key}=${value}`;
            const index = process.argv.findIndex(argItem => argItem === argvItemValue);
            if(index >= 0) {
                process.argv[index] = argvItemValue;
            }
            else {
                process.argv.push(argvItemValue);
            }
        }
    }
    cliArguments = parsedContens;
}

/**
 * Reloading the CLI arguments
 */
export function reload(): void {
    cliArguments = loadArguments()
}

/**
 * Extending the existing cli arguments with given JS object
 * @param args A given JS object of arguments
 */
export function extend(args: {[key: string]: any}): void {
    Object.assign(cliArguments, args);
}

/**
 * Loading the filtered arguments
 */
function loadArguments(): {[key: string]: string} {
    let config: Config = file.sync(`${process.env.INIT_CWD}/cli.config.json`) ? require(`${process.env.INIT_CWD}/cli.config.json`): { prefix: '--', separator: '=' }
    config = Object.assign(config, filterArguments('--cli-', '='))
    return filterArguments(config.prefix, config.separator);
}

/**
 * Filtering only relevant arguments by preferred prefix (--) and separator (=)
 * @param prefix The prefix of the argument
 * @param separator The separator of the argument
 */
export function filterArguments(prefix: string, separator: string): {[key: string]: string} {
    const finalArgumentsList = {};
    const argumentsList = filterer(prefix, separator);
    for(const argument of argumentsList) {
        const splitArgument = (separator !== '') ? argument.split(separator): [argument, undefined];
        const name = splitArgument[0].replace(prefix, '')
        const value = (splitArgument[1] !== undefined) ? splitArgument[1]: ''
        finalArgumentsList[name] = value;
    }
    return finalArgumentsList;
}

/**
 * A filter function to filter by dynamic prefix & separator
 * @param prefix The prefix of the argument
 * @param separator The separator of the argument 
 */
function filterer(prefix: string, separator: string): string[] {
    if(prefix !== '' && separator === '')  
        return process.argv.filter((argument: string) => argument.startsWith(prefix))
    else if(prefix === '' && separator !== '')
        return process.argv.filter((argument: string) => argument.indexOf(separator) !== -1)
    else if(prefix !== '' && separator !== '')
        return process.argv.filter((argument: string) => argument.startsWith(prefix) && argument.indexOf(separator) !== -1)
    return process.argv;
}

/**
 * The config structure
 * @param prefix A starting prefix for the arguments (default: --)
 * @param separator A separator sign for the arguments (default: =)
 */
type Config = {
    prefix: string,
    separator: string
}