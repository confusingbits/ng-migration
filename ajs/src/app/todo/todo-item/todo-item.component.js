function controller() {
    'ngInject';


    // this.$onInit = () => {
    // };

    // this.sessionClicked = () => {
    //     this.selectionUpdated();
    // };
}

export default {
    template: require('./todo-item.component.html'),
    controller,
    bindings: {
        todo: '='
    }
};