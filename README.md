<p align='center'><a href='https://github.com/danitseitlin/cli-argument-parser'><img src='.github/resources/logo.png' /></a></p>

<p align='center'>
    <a href='https://www.npmjs.com/package/cli-argument-parser'>
    <img src='https://img.shields.io/npm/v/cli-argument-parser/latest?style=plastic' target='_blank' />
  </a>
  <a href='https://npmjs.org/package/cli-argument-parser' style='width:25px;height:20px;'>
    <img src='https://img.shields.io/npm/dm/cli-argument-parser.svg?color=blue&style=plastic' target='_blank' />
  </a>
  <a href='https://github.com/danitseitlin/cli-argument-parser/issues' style='width:25px;height:20px;'>
    <img src='https://img.shields.io/github/issues/danitseitlin/cli-argument-parser?style=plastic' target='_blank' />
  </a>
  <a href='https://npmjs.org/package/cli-argument-parser' style='width:25px;height:20px;'>
    <img src='https://img.shields.io/bundlephobia/min/cli-argument-parser/latest?style=plastic' target='_blank' />
  </a>
  <a href='https://github.com/danitseitlin/cli-argument-parser/commits/master'>
    <img src='https://img.shields.io/github/last-commit/danitseitlin/cli-argument-parser?style=plastic' />
  </a>
  <a href='https://github.com/danitseitlin/cli-argument-parser/blob/master/LICENSE'>
    <img src='https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=plastic' target='_blank' />
  </a>
  <a href='https://dev.to/danitseitlin/manage-your-cli-arguments-easier-4g2b'>
    <img src='.github/resources/dev-logo.png' target='_blank' />
  </a>
</p>

<p align='center'><a href='https://github.com/danitseitlin/cli-argument-parser'><img src='.github/resources/gif.gif' /></a></p>

## :metal: Quick Start
Run `npm i cli-argument-parser`

## :ok_hand: Basic usage
```
import { cliArguments } from 'cli-argument-parser';
const arg1 = cliArguments.arg1;
const arg2 = cliArguments.arg2;
```
Run a cli with `arg1` and `arg2`, ie: `my-command --arg1=2 --arg2=1`
And the values will be inside the variables we declared above.

## :speak_no_evil: Configurate unique CLI's
### Using a configuration file
Create a file in the root of your project called `cli.config.json`
and paste the following into it:
```
{
    prefix: '--',
    separator: '='
}
```
The `prefix` is a value which the argument must start with, `--` is the default one. (ex: `--arg=5`) <br>
The `separator` is a value which seperated between the argument name and argument value. `=` is the default one. (ex: `--arg=5`) <br>
This gives you the abillity to configurate your cli arguments as you wish. <br>

### Using the CLI
If additional files are a mess in your opinion, it is also possible to pass the CLI configuration via CLI arguments.
`--cli-prefix` to configurate the CLI prefix, ie: `--cli-prefix=--`<br>
`--cli-separator` to configurate the CLI separator, ie: `--cli-separator==`

### Using the code
Instead of using the existing `cliArguments`, you are able to also create a custom one, using the following code snippet:
```
import { filterArguments } from 'cli-argument-parser';
const arguments = filterArguments('--', '=');
```
The `arguments` variable will hold a JS object with arguments (just like `cliArguments`) filtered by defined prefix and separator .
