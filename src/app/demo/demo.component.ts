import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  public Name : string = "Marvellous Infosystem"

  fun(){
    this.Name = this.Name.toLocaleUpperCase();
  }

  fun1(){
    this.Name = this.Name.toLowerCase();
  }

}
