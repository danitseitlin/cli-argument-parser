# cli
Working with CLI arguments the way you like it

### Basic usage
```
import { cliArguments } from 'cli';
const arg1 = cliArguments.arg1;
const arg2 = cliArguments.arg2;
```
Run a cli with `arg1` and `arg2`
like: `my-command` --arg1=2 --arg2=1
And the values will be inside the variables we declared above.

### CLI configuration
Create a file in the root of your project called `cli.config.json`
and paste the following into it:
```
{
    prefix: '--',
    equalitySign: '='
}
```
The `prefix` is a value which the argument must start with, `--` is the default one. (ex: `--arg=5`)
The `equalitySign` is a value which the argument must start with, `=` is the default one. (ex: `--arg=5`)
This gives you the abillity to configurate your cli arguments as you wish.