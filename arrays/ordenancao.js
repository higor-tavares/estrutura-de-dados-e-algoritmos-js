const students = [
    {
        name : "Hamilton",
        points: 276
    },
    {
        name : "Luiz",
        points: 301
    },
    {
        name : "Gabriel",
        points: 277
    },
    {
        name : "Matheus",
        points: 337
    },
    {
        name : "Mark",
        points: 288
    },
    {
        name : "Gustavo",
        points: 340
    },
]

compareStudents = (a, b) => {
    if (a.points > b.points)
        return -1 
    else if (a.points < b.points)
        return 1
    else 
        return 0
}

console.table(students.sort(compareStudents))