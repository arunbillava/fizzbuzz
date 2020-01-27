const CONFIG = require('../config/config');

const fizzBuzz=(req,res)=>{
    if(req && req.params && req.params.count){
        let count=req.params.count;
        if(isNaN(count)){
            return res.status(400).json({error: {msg:"count should be number."}});
        }
        let fizzBuzzData=getFizzBuzzByCount(count);
        return res.status(200).json({data: fizzBuzzData});
    }
    return res.status(400).json({error: {msg:"bad request."}});
}

const getFizzBuzzByCount=(count)=>{
    let fizzBuzzNum=CONFIG.fizzBuzz;
    let num1=fizzBuzzNum.num1;
    let num2=fizzBuzzNum.num2;
    let fizzBuzzArray=[];
    for(let i=1;i<=count;i++){
        if(i%(num1*num2)==0){
            fizzBuzzArray.push('FizzBuzz');
        }
        else if(i%num2==0){
            fizzBuzzArray.push('Buzz');
        }
        else if(i%num1==0){
            fizzBuzzArray.push('Fizz');
        }
        else{
            fizzBuzzArray.push(i);
        }
    }
    return fizzBuzzArray;
}

module.exports=fizzBuzz;