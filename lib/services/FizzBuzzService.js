class FizzBuzzService {

    static applyValidationInExplorer( explorer ){

        const { name, score } = explorer;

        if( score % 3 === 0 && score % 5 === 0 ){
            return { name, score, trick: "fizzbuzz" };
        }else if( score % 3 === 0 ){
            return { name, score, trick: "fizz" };
        }else if( score % 5 === 0 ){
            return { name, score, trick: "buzz" };
        }else{
            return { name, score, trick: score };
        }

    }

    static applyValidationInNumber( number ){

        if( number % 3 === 0 && number % 5 === 0 ){
            return "FizzBuzz";
        }else if( number % 3 === 0 ){
            return "Fizz";
        }else if( number % 5 === 0 ){
            return "Buzz";
        }else{
            return number;
        }

    }

}

module.exports = FizzBuzzService;