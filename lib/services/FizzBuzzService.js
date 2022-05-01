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

}

module.exports = FizzBuzzService;