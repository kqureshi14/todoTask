import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoTask';

  list:any[] = [];
  addTask(item:any){
    console.info(item);

    this.list.push({id:this.list.length,name:item});
  }

  removeTask(id:number){
    console.info(id);

    this.list = this.list.filter((item)=>item.id!=id);

  }
}
