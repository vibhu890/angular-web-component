import { Component } from '@angular/core';
import { Childangularelement } from "./childangularelement/childangularelement";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from App Component</h1>
<child-angular-element></child-angular-element>
  `,
  imports: [Childangularelement]
})
export class App {}
