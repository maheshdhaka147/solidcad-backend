const assert = require("chai").assert;
const DataValidator = require("../models/DataValidation"); 

const correctData = {
    'firstName':'Mahesh',
    'lastName': 'Dhaka',
    'email': 'maheshdhaka147@gmail.com',
    'message' : 'Hello there, Just contacting to see if you guys still provide service in Halton area.'
}
const invalidData1 = {
    'firstName':'Some really long first name that never ends',
    'lastName': '',
    'email': 'maheshdhaka147@gmail.comiudfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
    'message' : ''
}

const invalidData2 = {
    'firstName':'Mahesh',
    'lastName': 'Dhaka',
    'email': 'itdoesnotlooklikeemail',
    'message' : 'Hello there, Just contacting to see if you guys still provide service in Halton area'
}

describe('Input Validation', () => {
    it('For Correct Input', async ()=>{
        const result = await DataValidator(correctData);
        assert.strictEqual(true, !result.error);
    })

    it('For Incorrect Input1', async ()=>{
        const result = await DataValidator(invalidData1)
        assert.strictEqual(false, !result.error);
    })

    it('For Incorrect Input2', async ()=>{
        const result = await DataValidator(invalidData2)
        assert.strictEqual(false, !result.error);
    })
});