// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export class Item {

  id: number;
  product: string;
  price: number;
}

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
  moduleId: module.id,
  selector: 'my-app',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
  templateUrl: './app.component.html', // HTML разметка определяющая представление текущего компонента
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){}
  test = () => this.router.navigate(['/about'])


} // Класс определяющий поведение компонента
