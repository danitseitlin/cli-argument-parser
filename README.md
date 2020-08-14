<p align='center'><a href='https://github.com/danitseitlin/cli-argument-parser'><img src='.github/resources/logo.png' /></a></p>

<p align='center'>
  <a href='https://github.com/danitseitlin/cli-argument-parser/blob/master/LICENSE'>
    <img src='https://img.shields.io/badge/license-BSD%203%20Clause-blue.svg' target='_blank' />
  </a>
  <a href='https://npmjs.org/package/cli-argument-parser'>
    <img src='http://img.shields.io/npm/v/cli-argument-parser.svg?style=flat' target='_blank' />
  </a>
  <a href='https://npmjs.org/package/cli-argument-parser' style='width:25px;height:20px;'>
    <img src='https://img.shields.io/npm/dm/cli-argument-parser.svg?color=blue' target='_blank' />
  </a>
  <a href='https://npmjs.org/package/cli-argument-parser' style='width:25px;height:20px;'>
    <img src='https://img.shields.io/bitbucket/issues/danitseitlin/cli-argument-parser' target='_blank' />
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

## :speak_no_evil: Easily configurate unique CLI's
Create a file in the root of your project called `cli.config.json`
and paste the following into it:
```
{
    prefix: '--',
    seperator: '='
}
```
The `prefix` is a value which the argument must start with, `--` is the default one. (ex: `--arg=5`) <br>
The `seperator` is a value which seperated between the argument name and argument value. `=` is the default one. (ex: `--arg=5`) <br>
This gives you the abillity to configurate your cli arguments as you wish.