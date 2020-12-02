import TodoPageComponent from './todo-page/todo-page.component';
import TodoItemComponent from './todo-item/todo-item.component';
const todoModule = angular.module('migrate-demo.todo', [])
    .component('mdTodoPage', TodoPageComponent)
    .component('mdTodoItem', TodoItemComponent)

export default todoModule;

