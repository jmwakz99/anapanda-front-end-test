import Component from '@glimmer/component';
import { action } from '@ember/object';

export default
class SingleTaskComponent extends Component {
    @action
    pinTask() {
        this.args.pinTask(this.args.task)

    }



}