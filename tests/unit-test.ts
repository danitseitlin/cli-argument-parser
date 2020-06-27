import { cliArguments } from '../index';
import { expect } from 'chai'
describe('Sanity testing', async function() {
    it('Positive: Expected arguments', async () => {
        expect(cliArguments.x).to.equal('10', 'The value of x');
    });
    it('Negative: Expected arguments', async () => {
        expect(cliArguments.y).to.equal(undefined, 'The value of y')
    });
});

