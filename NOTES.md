# NOTES
## What is this repo all about?
I started to learn Angular recently and this is a small dummy project I made to understand a few concepts such as:

1. Setup
2. Components
3. Modules
4. Data binding
5. Styling
6. Directives

## SETUP
1. Make sure you install node.js on your machine (simply download and install).
2. Once you have Node.JS installed, execute the following command to install ANGULAR golablly on your machine > 
```
npm install -g @angular/cli
```
3. Create a new Angular project
```
ng new <app_name>
```
4. CD into the curent project
```
cd <app_name>
```
5. Start the server
```
ng serve
```
6. Install Bootstrap
```
npm install --save bootstrap
```
Point the bootstrap.min.css file under styles array inside angular.json file

## Commands to remember so far
```
ng generate component <component_name>
```
## Components
Components are the building blocks of the angular UI
 - All components that are created are added to one single component in the end - app.component.html
 - Component creation
 --> We export the TS class that we create. Do not forget to annotate the class with *@Component*. Import this from '@angular/core'.
 ```
 import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
  }
)
export class ServerComponent{
  // All the properties and functions related to this component goes here.
}
 ```
* The selectors inside components could be:
    * Properties
    * Attributes
    * Classes
## Angular triggers
START -> Index.html -> Main.ts -> Bootstraps AppModule -> Looks up AppComponent -> Wrapped around app.component.html/css
## Component Addition
Generate a component -> Add this Component to XX.module.ts file. Add the selector to the component.
## Data Binding
Could be done using the following techniques::
* Property Binding
```
[disabled]="propertyName"
```
* Event Binding
```
{{propName}}
```
* String interpolation
```
(click)="methodName()"
(input)="methodName()"
```
* Two-way Binding - Need to import { FormsModule } from '@angular/forms' and add the FormsModule under imports array in app.module.ts
```
[(ngModel)]
```