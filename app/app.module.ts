// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }   from './app.component';
import { HelloWorld } from './hello-world/hello-world.component';
import AboutComponent from './about/about.component';
import HomeComponent from './home/home.component';
import NotFoundComponent from './not-found/not-found.component';
import ItemComponent from './item/item.component';

// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor

const AppPaths: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'hello-world', component: HelloWorld},
  { path: 'item/:model', component: ItemComponent},
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppPaths) ],
  declarations: [ AppComponent, HelloWorld, AboutComponent, HomeComponent, NotFoundComponent, ItemComponent ], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { 
  
}

 
