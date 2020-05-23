import { cliArguments } from '../index';
test('Checking for expected arguments list', async () => {
    expect(cliArguments).toEqual({x: '10'});
});
