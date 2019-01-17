const { functions, reverseString, isAnagram } = require('./functions');

// Basic unit tests
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Phillip Ngo', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Phillip',
        lastName: 'Ngo'
    });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600)
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    usernames = ['Joe', 'Kelly', 'admin']
    expect(usernames).toContain('admin');
});

// Promise testing
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        });
});

// Async testing
test('User fetched name should be Leanna Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
});

test('Does reverse string exist', () => {
    expect(reverseString).toBeDefined();
});

test('Reverse String hello to be olleh', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('Reverse String with Uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('cinema is an anagram of iceman', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('Dormitory is an anagram of dirty room', () => {
    expect(isAnagram('Dormitory', 'dirty room')).toBeTruthy();
});

test('Hello is not an anagram of goodbye', () => {
    expect(isAnagram('Hello', 'Goodbye')).toBeFalsy();
})