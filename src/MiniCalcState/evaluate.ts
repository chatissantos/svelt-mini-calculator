export default function evaluate({
 number1,
 operator,
 currentOutput,
}: any) {
    let output = Number(currentOutput);
    if (number1) {
        switch (operator) {
            case "*":
                output = number1 * output;
                break;
            case "+":
                output = number1 + output;
                break;
            case "-":
                output = number1 - output;
                break;
            case "/":
                output = number1 / output;
                break;
            default:
                break;
        }
    }
    return output;
}
