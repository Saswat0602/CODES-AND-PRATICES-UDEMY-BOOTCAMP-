let input = prompt("enter the what yu want to do");
const todo = ['collet me', ' hello there '];


while (input !== "quit" && input !== 'q') {
    if (input === 'list') {
        console.log("*************")
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}:${todo[i]}`);
        }
        console.log("*************")
    }

    else if (input === "new") {
        const newTodo = prompt("what new to do");
        todo.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }
    else if (input === 'delete') {
        const index = parseInt(prompt("enteer an index to delete"));
        if (!Number.isNaN(index)) {
            const deleted = todo.splice(index, 1)
            console.log(`ok deleted ${deleted[0]}`);
        }
        else {
            console.log("invalid index")
        }
    }
    input = prompt("what do yu like to do")
}
console.log("ok yu quit the app");