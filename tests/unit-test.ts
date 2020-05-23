import { cliArguments } from '../index';
test('the data is peanut butter', async () => {
    expect(cliArguments).toEqual({x: '10'});
});