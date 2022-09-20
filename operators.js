let allStudents = ['A', 'B-', 1, 4, 5, 2]

let allStudentsWhoPass = [];

console.log('Grades:')
for (let i = 0; i < allStudents.length; i++) {
    const element = allStudents[i];

    if (allStudents[i] == 'A') {
        allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
    } else {
        if (allStudents[i] == 'A-') {
            allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
        } else {
            if (allStudents[i] == 'B-') {
                allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
            } else {
                if (allStudents[i] == 'B-') {
                    allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
                } else {
                    if (allStudents[i] == 'C') {
                        allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
                    } else {
                        if (allStudents[i] == 'C-') {
                            allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
                        } else {
                            if (allStudents[i] >= 3) {
                                allStudentsWhoPass[i] = 'Pass: ' + allStudents[i]
                            } else {
                                /*allStudentsWhoPass[i] = 'Fail: ' + allStudents[i]*/
                                allStudentsWhoPass[i] = '-'
                            }
                        }
                    }
                }
            }
        }
    }

    console.log(allStudentsWhoPass[i]);
}

