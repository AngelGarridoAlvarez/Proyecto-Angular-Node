import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public title: string; //Propiedad título
  public subtitle: string;
  public email: string;
  public web: string;

  constructor() {
    this.title = "Ángel Garrido Álvarez";
    this.subtitle = "Web Fullstack Developer";
    this.email = "angelgarridoalvarez@gmail.com";
    this.web = "www.angelprogramador.com"
  }

  ngOnInit(): void {
  }

}
