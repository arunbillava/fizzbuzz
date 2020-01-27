const assert = require('assert');
const fizzBuzz = require('../src/controller/fizzbuzz');

describe('fizzbuzz',()=>{
    let res;
    beforeEach(()=>{
        res={
            status:function (statusCode) {
               function json(msg){
                    return msg;
                }
                return {
                    json:json
                }
            }
        };
    });

    it('should get bad request if req is not proper',()=>{
        let req={
        };
        let result=fizzBuzz(req,res);
        assert.equal('bad request.',result.error.msg);
    });

    it('should get error if count is not a number',()=>{
        let req={
            params:{
                count:"not a number"
            }
        };
        let result=fizzBuzz(req,res);
        assert.equal('count should be number.',result.error.msg);
    });

    it('should get first 15 fizz buzz number on count 15',()=>{
        let req={
            params:{
                count:15
            }
        };
        const  res={
            status:function (statusCode) {
               function json(msg){
                    return msg;
                }
                return {
                    json:json
                }
            }
        }
        let result=fizzBuzz(req,res);
        assert.equal('Fizz',result.data[2]);
        assert.equal('Buzz',result.data[4]);
        assert.equal('FizzBuzz',result.data[14]);
    });
});