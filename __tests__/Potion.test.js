const Potion= require('../lib/Potion.js');

test('creates a heatlh potion object', () => 
{
    const potion= new Potion('health');

    expect(potion.name).toEqual('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random health object', () => 
{
    const potion= new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});