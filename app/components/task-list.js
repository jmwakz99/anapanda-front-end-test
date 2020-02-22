import Component from '@glimmer/component';
import { action } from "@ember/object";




export default
class TaskListComponent extends Component {



    @action
    pinTask() {
        console.log('Passing action from single-task component to task-list-component')

    }

}