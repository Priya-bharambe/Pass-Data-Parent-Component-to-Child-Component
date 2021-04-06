import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassDataParentcompTochild';
  u_prog = ['Web Development', 'Web Designing', 'Graphic Design',
    'IOS Development', 'Digital Marketing'];

  prog_details = [`Website Development comes into action when you cannot find the right Content Management System. Also there
  are limitations in the package of CMS that have been overcome by Website Development. Your website development will
  be met with the highest level of attention and care.`, `Web Designing is 
multi-paradigm and procedural oriented 
language. Developed by Bjarne Stroustrup.`,
    `Graphic Design is a procedural language and 
developed by Dennis Ritchie`, `IOS Development is 
a interpreted high level language 
developed by Guido van Rossum`,
    `Digital Marketing is a language that conforms 
the ECMAScript and developed by ECMAScript`];
  options!: number;
  curr_info: string | undefined;
  prog_title: string | undefined;

  constructor() { }

  onClick(lang: any) {
    switch (lang) {
      case 'Web Development':
        this.options = 0;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'Web Designing':
        this.options = 1;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'Graphic Design':
        this.options = 2;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'IOS Development':
        this.options = 3;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      case 'Digital Marketing':
        this.options = 4;
        this.curr_info =
          this.prog_details[this.options];

        this.prog_title =
          this.u_prog[this.options];
        break;
      default:
        break;
    }
  }
}