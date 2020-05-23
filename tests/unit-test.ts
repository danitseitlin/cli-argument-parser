import { cliArguments } from '../index';
test('the data is peanut butter', async () => {
    console.log(cliArguments);
    expect(cliArguments).toEqual({x: '10'});
});