// let program = [1, 9, 10, 3, 2, 3, 11, 0, 99, 30, 40, 50];
// let program = [1, 1, 1, 4, 99, 5, 6, 0, 99];
// let program = [2, 4, 4, 5, 99, 0];

for (let input1 = 0; input1 <= 99; input1++) {
    for (let input2 = 0; input2 <= 99; input2++) {
        let program = [1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 2, 19, 13, 23, 1, 23, 10, 27, 1, 13, 27, 31, 2, 31, 10, 35, 1, 35, 9, 39, 1, 39, 13, 43, 1, 13, 43, 47, 1, 47, 13, 51, 1, 13, 51, 55, 1, 5, 55, 59, 2, 10, 59, 63, 1, 9, 63, 67, 1, 6, 67, 71, 2, 71, 13, 75, 2, 75, 13, 79, 1, 79, 9, 83, 2, 83, 10, 87, 1, 9, 87, 91, 1, 6, 91, 95, 1, 95, 10, 99, 1, 99, 13, 103, 1, 13, 103, 107, 2, 13, 107, 111, 1, 111, 9, 115, 2, 115, 10, 119, 1, 119, 5, 123, 1, 123, 2, 127, 1, 127, 5, 0, 99, 2, 14, 0, 0];
        program[1] = input1;
        program[2] = input2;

        let skip = 0;
        for (let i = 0; i < 9999; i++) {
            if (skip > 0) {
                skip--;
                // console.log(`Skip location ${i}`);
                continue;
            }
            if (program[i] === null && program[i] === undefined) {
                break;
            }

            if (program[i] === 99) {
                if (program[0] === 19690720) {
                    console.log('Program Complete:');
                    console.log(program);
                    console.log((100 * input1) + input2)
                }
                break;
            }

            if (program[i] === 1 || program[i] === 2) {
                try {
                    let item1Location = program[i + 1];
                    let item2Location = program[i + 2];
                    let item3Location = program[i + 3];
                    let item1Value = program[item1Location];
                    let item2Value = program[item2Location];
                    let item3Value;
                    if (program[i] === 1) {
                        item3Value = item1Value + item2Value;
                        // console.log(`Add command at location ${i}`);
                    }
                    if (program[i] === 2) {
                        item3Value = item1Value * item2Value;
                        // console.log(`Multiply command at location ${i}`);
                    }
                    // console.log(`Set pos ${item3Location} to ${item3Value}`);
                    program[item3Location] = item3Value;
                    skip = 3;
                } catch (e) {
                    // console.log('Error:');
                    // console.log(program);
                }

            }
        }

    }
}