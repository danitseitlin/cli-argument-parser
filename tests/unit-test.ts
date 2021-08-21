import { cliArguments, filterArguments, extend, reload, reloadFromConfigFile } from '../index';
import { expect } from 'chai'
describe('Sanity testing', async function() {
    it('Positive: Expected arguments', async() => {
        expect(cliArguments.x).to.equal('10', 'The value of x');
    });
    it('Negative: Expected arguments', async() => {
        expect(cliArguments.y).to.equal(undefined, 'The value of y');
    });
    it('filterArguments function', async() => {
        process.argv = ['x', '--y', 'z=1'];
        let filteredArguments = filterArguments('', '');
        expect(filteredArguments.x).to.equal('', 'The value of x');
        expect(filteredArguments.y).to.equal(undefined, 'The value of y');
        filteredArguments = filterArguments('--', '');
        expect(filteredArguments.x).to.equal(undefined, 'The value of x');
        expect(filteredArguments.y).to.equal('', 'The value of y');
        filteredArguments = filterArguments('', '=');
        expect(filteredArguments.x).to.equal(undefined, 'The value of x');
        expect(filteredArguments.y).to.equal(undefined, 'The value of y');
        expect(filteredArguments.z).to.equal('1', 'The value of z');
    })
    it('extend function', async() => {
        extend({myKey: 13});
        expect(cliArguments.myKey).to.equal(13, 'The value of \'myKey\' key');
    })
    it('reload function', async() => {
        process.argv.push('--rKey=5050')
        reload();
        expect(cliArguments.rKey).to.equal('5050', 'The value of \'rKey\' key');
    })
    it('reloadFromConfigFile function', async() => {
        const filePath = process.platform === 'win32' ? `${__dirname}\\configFile`: `${__dirname}/configFile`
        reloadFromConfigFile(filePath)
        expect(cliArguments.envKey).to.equal('env', 'The value of \'envKey\' key');
    })
});

