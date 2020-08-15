import * as file from 'file-exists';

/**
 * A global variable containing a parsed list of loaded CLI arguments by preferred prefix (--) and separator (=)
 */
export const cliArguments = loadArguments();

/**
 * Loading the filtered arguments
 */
function loadArguments(): {[key: string]: string} {
    let config: config = file.sync('./cli.config.json') ? require(`${process.env.INIT_CWD}/cli.config.json`): { prefix: '--', separator: '=' }
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
type config = {
    prefix: string,
    separator: string
}