const tasks = [   
    { taskName: "Write report", completed: true, priority: 2 },   
    { taskName: "Attend meeting", completed: false, priority: 3 },   
    { taskName: "Fix bug", completed: false, priority: 1 },   
    { taskName: "Update website", completed: true, priority: 4 } 
];

const FindHPrior = tasks.find(task => task.priority < 3);
console.log(FindHPrior);

const FindIndNcompl = tasks.findIndex(task => !task.completed);
console.log(FindIndNcompl);

const completedTaskCount = tasks.reduce((count, task) => task.completed ? count + 1 : count, 0);
console.log('Number of Completed Tasks:', completedTaskCount);

tasks.forEach(task => {
    console.log(`${task.taskName}`)
})
