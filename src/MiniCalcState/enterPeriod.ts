export default function enterPeriod(currentOutput: string, setter: any) {
    if (currentOutput.includes('.')) {
        return currentOutput;
    }
    const newOutput = `${currentOutput}.`;
    setter(newOutput);
    return newOutput;
}
