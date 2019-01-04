const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
        // throw new Error(`You added 4 and 3. The result was ${result}. Expect 7.`)
});

test('should generate correct greeting from name', () => {
    const result = generateGreeting('Fabio');

    expect(result).toBe('Hello Fabio!');
});

test('should generate correct greeting from no name input', () => {
    const result = generateGreeting();

    expect(result).toBe('Hello Anonymous!');
});