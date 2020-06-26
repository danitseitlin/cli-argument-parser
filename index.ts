import * as file from 'file-exists';

/**
 * A global variable containing a parsed list of loaded CLI arguments by preferred prefix (--) and equality sign (=)
 */
export const cliArguments = loadArguments();

/**
 * Filtering only relevant arguments by preferred prefix (--) and equality sign (=)
 */
function loadArguments(): {[key: string]: string} {
    let config: config = file.sync('./cli.config.json') ? require('./cli.config.json'): {prefix: '--', seperator: '='}
    console.log(config)
    config = Object.assign(config, filterArguments('--cli-', '='))
    console.log(config)
    return filterArguments(config.prefix, config.seperator);
}

function filterArguments(prefix: string, seperator: string) {
    const json = {};
    const cliArguments = process.argv.filter((argument: string) => argument.startsWith(prefix) && argument.indexOf(seperator) !== -1)
    for(const argument of cliArguments) {
        const splitArgument: string[] = argument.split(seperator);
        const name = splitArgument[0].replace(prefix, '')
        const value = splitArgument[1]
        json[name] = value;
    }
    return json;
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