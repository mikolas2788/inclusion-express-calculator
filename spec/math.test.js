const math = require("../math");


test('tests add function with 1 + 2 = 3',  () => {
    expect(math.add(1, 2)).toBe(3); 
})

test('tests add function with strings',  () => {
    expect(math.add("dog", "cat")).toBe("dogcat"); 
})

//Subtract
