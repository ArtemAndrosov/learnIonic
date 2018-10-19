import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  public tasks = [
    {
      title: 'Learn Ionic',
      status: false
    },
    {
      title: 'develop the app',
      status: false
    },
  ];
  toggle(i) {
    this.tasks[i].status = !this.tasks[i].status;
    console.log(this.tasks);
  }
}
