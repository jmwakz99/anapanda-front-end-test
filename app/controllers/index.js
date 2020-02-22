import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";



export default class IndexController extends Controller {
    @tracked tasks;

    get numberOfCompletedTasks() {
        const completedTasks = this.tasks.filter(task => {
            return task.isComplete === true

        })
        return completedTasks.length
    }









}