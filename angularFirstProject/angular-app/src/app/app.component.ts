import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title: string = 'Hola mundo angular!';
  subTitle: string = "Contador con local Storage"

  users: string[] = ['Pepe', 'Maria', 'Andres'];
  visible: boolean = false;
  counter: number = 0


  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setVisible():void {
    this.visible = this.visible? false:true;
    console.log('Hemos hecho click en setVisible');
  }

  setCounter(event: number): void{
    this.counter = event
  }
}

