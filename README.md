<IMAGE HERE>
<h1 align='center'>CLI Argument parser<g-emoji class='g-emoji' alias='point_right' fallback-src='https://github.githubassets.com/images/icons/emoji/unicode/1f449.png'>👉</g-emoji> Load your arguments in an easier way!</h1>
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
  <a href='https://dev.to/danitseitlin/simple-deploybot-npm-package-494f'>
    <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands-1/512/84_Dev_logo_logos-512.png' width='25' height='20' target='_blank' />
  </a>
</p>
## Quick Start

### Install the module
Run the following command in your terminal:

`npm i cli-argument-parser`

## How to use
### Basic usage
```
import { cliArguments } from 'cli-argument-parser';
const arg1 = cliArguments.arg1;
const arg2 = cliArguments.arg2;
```
Run a cli with `arg1` and `arg2`
like: `my-command --arg1=2 --arg2=1`
And the values will be inside the variables we declared above.

### Configuration file usage
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
