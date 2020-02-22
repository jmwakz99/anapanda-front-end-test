import Component from '@glimmer/component';
import { action } from "@ember/object";




export default
class TaskListComponent extends Component {
    @action
    pinTask(task) {
        // This is just a test since we don't have pinned property in the model
        task.isComplete = true

    }

}