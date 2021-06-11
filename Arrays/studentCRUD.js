const students = [];

const insertRecord = function () {
    let student = {
        name: "Charles",
        rollno: 20,
        age: 17,
        gender: "Male"
    }
    students.push(student);
    console.log("Inserted a student record:", students[students.length - 1]);
}

const deleteRecord = function () {
    console.log("Deleted a student record:", students.pop());
}

const findRecordByName = function (studentName) {
    let record = students.find(student => student.name === studentName);
    if (record === undefined) console.log("No records found!");
    else console.log("Found a student record:", record);
}

const updateRecord = function (studentName, newDataObject) {
    let recordIndex = students.findIndex(student => student.name === studentName);
    let record = students.find(student => student.name === studentName);
    record = { ...newDataObject };
    students.splice(recordIndex, 1, record);
    console.log("Updated a student record:", record);
}

insertRecord();
findRecordByName("Charles");
updateRecord("Charles", { name: "Charles", rollno: 41, age: 18, gender: "Male" });
deleteRecord();

console.log("All Records:", students);