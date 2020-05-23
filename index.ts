import * as file from 'file-exists';

/**
 * A global variable containing a parsed list of loaded CLI arguments by preferred prefix (--) and equality sign (=)
 */
export const cliArguments = loadArguments();

/**
 * Filtering only relevant arguments by preferred prefix (--) and equality sign (=)
 */
function loadArguments(): {[key: string]: string} {
    const loadedArguments: {[key: string]: string} = {};
    const config: config = file.sync('./cli.config.json') ? require('./cli.config.json') : {prefix: '--', equalitySign: '='}
    for(const argument of process.argv) {
        if(argument.indexOf(config.equalitySign) !== -1 && argument.startsWith(config.prefix)) {
            const splitArgument: string[] = argument.split(config.equalitySign);
            const name = splitArgument[0].replace(config.prefix, '');
            const value = splitArgument[1];
            loadedArguments[name] = value;
        }
    }
    return loadedArguments;
}

/**
 * The config structure
 * @param prefix A starting prefix for the arguments (default: --)
 * @param equalitySign An equality sign for the arguments (default: =)
 */
type config = {
    prefix: string,
    equalitySign: string
}