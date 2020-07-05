import { Component } from '@angular/core';

@Component({
  selector: 'todo',
  template: `
  <div class= "center">
  <h2>To do List</h2>
  </div>
  <div class= "center">
  <form (submit)="addTask(task.value)">
  <label>Add Task</label><br />
  <input type="text" #task/><br />
  </form>
  </div><br />
  <div class= "center">
  <fieldset>
  <table>
    <tr *ngFor= "let task of tasks; let i= index">
    <td><input type="checkbox">{{task}}<button (click)="deleteTask(i)">x</button></td>
    </tr>
  </table>
  </fieldset>
  </div>
  `,
})
export class TodoComponent  {

tasks: any[]

constructor(){

  this.tasks=['task 1', 'task 2', 'task 3']
}
 
addTask(task: any){

        this.tasks.push(task);
}

deleteTask(i: number){

  this.tasks.splice(i, 1);
}

}
