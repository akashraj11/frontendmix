import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theatreFrontend-root',
  templateUrl: './theatreFrontend.component.html',
  styleUrls: ['./theatreFrontend.component.css']
})
export class TheatreFrontendComponent {
  title = 'TheatreFrontend';
  public value = 0;

  constructor( private router: Router) { }


}
