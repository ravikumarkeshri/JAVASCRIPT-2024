// console.log("Hello World")

const person1 = ({ name: "Ravi", age: 24 })
const person2 = person1;
person2.age = 25;
// console.log(person1);
// console.log(person2);

const increment = (personObj) => {
    personObj.age += 1;
}
// console.log(person1);
increment(person1);
// console.log(person2)

// Array-Object Hybrid
const student = [
    { id: 1, name: "Ravi", grade: "A" },
    { id: 2, name: "Ravi2", grade: "B" },
    { id: 3, name: "Ravi3", grade: "C" }
]
const student1 = student[0].name;
// console.log(student1)
const addStudent = (id, name, grade) => {
    const newStudent = { id: id, name: name, grade: grade };
    student.push(newStudent);
}
addStudent(4, "Ravi4", "D");


const updateStudentGrade = (id, newGrade) => {
    const studentFound = student.find((std) => {
        return std.id === id;
    })
    if (studentFound) {
        studentFound.grade = newGrade
    } else {
        console.log("Student Not found")
    }
}
updateStudentGrade(2, "E");
// console.log(student)

const updateStudentName = (id, newName) => {
    const studetfound = student.find((std) => {
        return std.id === id;
    })
    if (studetfound) {
        studetfound.name = newName;
    } else {
        console.log("Student Not found")
    }

}
updateStudentName(1, "Amit");
// console.log(student)

const todoList = {
    title: "To do list app",
    tasks: [
        { id: 1, desc: "task1", completed: false },
        { id: 2, desc: "task2", completed: true },
        { id: 3, desc: "task3", completed: true }
    ]
}
// console.log(todoList.tasks[0].desc)
const addTask = (description) => {
    const newId = todoList.tasks.length + 1;
    const newTask = {
        id: newId,
        desc: description,
        completed: false,
    }
    todoList.tasks.push(newTask)
}
addTask("task4")
// console.log(todoList)

const addTask2 = (desc) => {
    const newId = todoList.tasks.length + 1;
    const newTask = {
        id: newId,
        desc,
        completed: true
    }
    todoList.tasks.push(newTask)
}
addTask2("Task5");
// console.log(todoList)

const markAsCompleted = (id) => {
    const taskfound = todoList.tasks.find((task) => {
        return task.id === id;
    })
    if (taskfound) {
        // if (taskfound.completed === true ? false : true);
        if (taskfound.completed === true) {
            taskfound.completed = false;
        } else {
            taskfound.completed = true
        }
    } else {
        console.log("Task Not found")
    }
}
console.log(todoList)
markAsCompleted(4);
console.log(todoList)

