const {sum, fromEuroToDollar, fromDollarToYen} = require('./app.js');
test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    const {fromEuroToDollar} = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
});

test("One Dollar should be 105.5 Yen", function (){
    const {fromDollarToYen} = require('./app.js')
    expect(fromDollarToYen(2)).toBe(213); 
});
test("One Yen should be 0.006 Pound", function (){
    const{fromYenToPound} = require('./app.js')
    expect(fromYenToPound(2)).toBe(0.012);
})