import backSpace from "./backSpace";
import BLANC from "./BLANC";
import enterNumber from "./enterNumber";
import enterPeriod from "./enterPeriod";
import clear from "./clear";
import evaluate from "./evaluate";

export default function MiniCalcState({ screenSetter }: any) {
    let status: 'default' | 'clear-next' = 'default';
    let output = BLANC;
    let number1: number | null;
    let operator: '*' | '+' | '-' | '/' | null;
    return {
        clear: () => {
            output = clear(screenSetter);
            number1 = null;
            operator = null;
        },
        backSpace: () => {
            output = backSpace(output, screenSetter);
        },
        enterNumber: (value: string) => {
            if (status === "clear-next") {
                output = clear(screenSetter);
                status = 'default';
            }
            output = enterNumber(value, output, screenSetter)
        },
        times: () => {
            if (number1) {
                number1 = evaluate({number1, operator, currentOutput: output, setter: screenSetter});
            } else {
                number1 = Number(output);
            }
            operator = '*'
            status = "clear-next";
        },
        plus: () => {
            if (number1) {
                number1 = evaluate({number1, operator, currentOutput: output, setter: screenSetter});
            } else {
                number1 = Number(output);
            }
            operator = '+'
            status = "clear-next";
        },
        minus: () => {
            if (number1) {
                number1 = evaluate({number1, operator, currentOutput: output, setter: screenSetter});
            } else {
                number1 = Number(output);
            }
            operator = '-'
            status = "clear-next";
        },
        divide: () => {
            if (number1) {
                number1 = evaluate({number1, operator, currentOutput: output, setter: screenSetter});
            } else {
                number1 = Number(output);
            }
            operator = '/'
            status = "clear-next";
        },
        enterPeriod: () => {
            output = enterPeriod(output, screenSetter)
        },
        evaluate: () => {
            if (operator) {
                number1 = evaluate({number1, operator, currentOutput: output});
                output = `${number1}`;
                screenSetter(output);
                status = "clear-next";
                operator = null;
            }
        }
    }
}
