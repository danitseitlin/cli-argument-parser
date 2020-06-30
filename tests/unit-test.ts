import { cliArguments, filterArguments } from '../index';
import { expect } from 'chai'
describe('Sanity testing', async function() {
    it('Positive: Expected arguments', async () => {
        expect(cliArguments.x).to.equal('10', 'The value of x');
    });
    it('Negative: Expected arguments', async () => {
        expect(cliArguments.y).to.equal(undefined, 'The value of y')
    });
    it('filterArguments function', async () => {
        process.argv = ['x', '--y', 'z=1'];
        let filteredArguments = filterArguments('', '');
        expect(filteredArguments.x).to.equal('', 'The value of x')
        expect(filteredArguments.y).to.equal(undefined, 'The value of y')
        filteredArguments = filterArguments('--', '');
        expect(filteredArguments.x).to.equal(undefined, 'The value of x')
        expect(filteredArguments.y).to.equal('', 'The value of y')
        filteredArguments = filterArguments('', '=');
        expect(filteredArguments.x).to.equal(undefined, 'The value of x')
        expect(filteredArguments.y).to.equal(undefined, 'The value of y')
        expect(filteredArguments.z).to.equal('1', 'The value of z')
    })
});

