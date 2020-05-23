import { cliArguments } from '../index';
test('the data is peanut butter', async () => {
    console.log(cliArguments);
    const data = 'peanut butter'
    expect(cliArguments).toEqual({x: '10'});
});