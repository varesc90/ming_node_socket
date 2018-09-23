var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',()=>{
    it('Should Generate Correct Message Object',()=>{
        var from = "Ming";
        var text = "Hello";
        var message = generateMessage(from,text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
        //store res in variable
        //assert from match
        //assert text match
        //assert cretedAt is number

    });
});