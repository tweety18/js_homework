// 1
class ToDoList {
    toDos = [];
    constructor(...args) {
        this.toDos.push(...args)
    }

    addToDo(...toDo) {
        this.toDos.push(...toDo);
        console.log(this.toDos);
        return this.toDos;
    }

    deleteTodo(toDo) {
        const indexToDelete = this.toDos.findIndex( el => el.id === toDo.id);
        if (indexToDelete !== -1) {
            this.toDos.splice(indexToDelete, 1);
            console.log(this.toDos);
            return this.toDos;
        } else {
            console.log('No match!');
            return;
        }
    }

    editTodo(oldId, newTodo) {
        const oldToDo = this.toDos.findIndex(el => el.id === oldId);
        if (oldToDo !== -1) {
            this.toDos[oldToDo] = newTodo;
            console.log(this.toDos);
        } else {
            console.log(`There is no id: ${oldId} in ToDo list`);
        }
        return this.toDos;
    }

    getToDoInfo(oldId) {
        const toDo = this.toDos.findIndex(el => el.id === oldId);
        if (toDo) {
            console.log(this.toDos[toDo]);
            return this.toDos[toDo];
        } else {
            console.log(`There is no id: ${oldId} in ToDo list`);
            return;
        }
    }

    showToDoList() {
        console.log(this.toDos);
        return this.toDos;
    }

    markAsDone(oldId) {
        const toDo = this.toDos.findIndex(el => el.id === oldId);
        this.toDos[toDo].isDone = true;
        console.log(this.toDos[toDo]);
        return this.toDos[toDo];
    }

    getToDosQty() {
        console.log(this.toDos.length);
        return this.toDos.length;
    }

    getUnDoneQty() {
        console.log(this.toDos.filter(el => !el.isDone).length);
        return this.toDos.filter(el => !el.isDone).length;
    }

}

class ToDo {
    constructor (id, description, isDone = false) {
        this.id = id;
        this.description = description;
        this.isDone = isDone;
    }
}

const toDo1 = new ToDo(1, 'do js homework');
const toDo2 = new ToDo(2, 'load dishwasher');
const toDo3 = new ToDo(3, 'make a dinner');
const toDo4 = new ToDo(4, 'go for a walk');
const toDo5 = new ToDo(5, 'buy fruits');
const toDo6 = new ToDo(6, 'feed cats');
const toDo7 = new ToDo(7, 'buy beer');
const toDoList = new ToDoList(toDo1, toDo2, toDo3);
toDoList.showToDoList();
toDoList.addToDo(toDo4, toDo5, toDo6);
toDoList.deleteTodo(toDo1);
toDoList.deleteTodo(1111);
toDoList.getToDoInfo(toDo4.id);
toDoList.editTodo(toDo5.id, toDo7);
toDoList.showToDoList();
toDoList.markAsDone(toDo7.id);
toDoList.markAsDone(toDo2.id);
toDoList.getToDosQty();
toDoList.getUnDoneQty();


// 2
ToDoList.prototype.findByName = function(text) {
    const result = this.toDos.find(el => el.description.includes(text));
    if (result) {
        console.log(result);
        return result;
    } else {
        console.log('No match!');
    }
}

ToDoList.prototype.sortByDone = function() {
    const sortedList = this.toDos.sort((a, b) => b.isDone - a.isDone);
    console.log(sortedList);
    return sortedList;
}

ToDoList.prototype.sortByUnDone = function() {
    const sortedList = this.toDos.sort((a, b) => a.isDone - b.isDone);
    console.log(sortedList);
    return sortedList;
}

toDoList.sortByDone();
toDoList.sortByUnDone();
toDoList.findByName('beer');

// 3
class ExtendedToDo extends ToDo {
    constructor(id, description, isDone = false, dateAdded, dateEdited) {
        super(id, description, isDone);
        this.dateAdded = dateAdded;
        this.dateEdited = dateEdited;
    }
}

const extendedToDo1 = new ExtendedToDo(10, 'test extended 1', false, '01.01.2024', '10.02.2024');
const extendedToDo2 = new ExtendedToDo(11, 'test extended 2', false, '01.10.2024', '10.11.2024');
const extendedToDo3 = new ExtendedToDo(12, 'test extended 3', false, '01.03.2024', '10.04.2024');
const extendedToDo4 = new ExtendedToDo(13, 'test extended 4', false, '01.11.2024', '10.12.2024');
toDoList.addToDo(extendedToDo1, extendedToDo2, extendedToDo3, extendedToDo4);

ToDoList.prototype.findByName = function(value) {
   const result = this.toDos.filter(el => {

       if (el.description.includes(value) || el?.dateAdded?.includes(value) || el?.dateEdited?.includes(value)) {
           return el;
       }
   });
   if (result.length) {
       console.log(result)
       return result;
   } else {
       console.log('no match!');
       return;
   }

}
toDoList.findByName('2024');
toDoList.findByName('test extended 1');
toDoList.findByName('beer');
toDoList.findByName('dkmvflsdkfv');


ToDoList.prototype.sortByDateAdded = function() {
    const sortedList = this.toDos.sort((a, b) => new Date(a?.dateAdded) - new Date(b?.dateAdded));
    console.log(sortedList);
    return sortedList;
}
toDoList.sortByDateAdded();

ToDoList.prototype.sortByDateEdited = function() {
    const sortedList = this.toDos.sort((a, b) => new Date(a?.dateEdited) - new Date(b?.dateEdited));
    console.log(sortedList);
    return sortedList;
}
toDoList.sortByDateEdited();





