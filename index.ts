import * as file from 'file-exists';

/**
 * A global variable containing a parsed list of loaded CLI arguments by preferred prefix (--) and seperator (=)
 */
export const cliArguments = loadArguments();

/**
 * Loading the filtered arguments
 */
function loadArguments(): {[key: string]: string} {
    let config: config = file.sync('./cli.config.json') ? require('./cli.config.json'): { prefix: '--', seperator: '=' }
    config = Object.assign(config, filterArguments('--cli-', '='))
    return filterArguments(config.prefix, config.seperator);
}

/**
 * Filtering only relevant arguments by preferred prefix (--) and seperator (=)
 * @param prefix The prefix of the argument
 * @param seperator The seperator of the argument
 */
function filterArguments(prefix: string, seperator: string): {[key: string]: string} {
    const finalArgumentsList = {};
    const argumentsList = process.argv.filter((argument: string) => argument.startsWith(prefix) && argument.indexOf(seperator) !== -1)
    for(const argument of argumentsList) {
        const splitArgument = argument.split(seperator);
        const name = splitArgument[0].replace(prefix, '')
        const value = splitArgument[1]
        finalArgumentsList[name] = value;
    }
    return finalArgumentsList;
}

/**
 * The config structure
 * @param prefix A starting prefix for the arguments (default: --)
 * @param seperator A seperator sign for the arguments (default: =)
 */
type config = {
    prefix: string,
    seperator: string
}