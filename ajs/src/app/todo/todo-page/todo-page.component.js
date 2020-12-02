function controller(sessionService) {
    'ngInject';
    this.todos = [{ text: "this is a todo", done: false }];
    this.newTodo = "";
    
    // this.$onInit = () => {
    //     sessionService.getSessions().then(sessions => {
    //         this.sessions = sessions;
    //     });
    // };

    this.addTodo = () => {
        console.log('newtodo added', this.newTodo);
        this.todos = [...this.todos, { text: this.newTodo, done: false }]
        this.newTodo = "";
    }
    this.clearDone = () => {
        if (this.todos.length < 1) return;
        this.todos = this.todos.filter(t => !t.done);
    }

}

export default {
    template: require('./todo-page.component.html'),
    controller
};
