import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  students: any = [
      {name:"CAMPOS AGUIRRE LILIAN MICHEL", grade: 80, nc: '16400890', active: true},
      {name:"CASTELLANOS MORA AEXIS GERARDO", grade: 90, nc: '16400891', active: false},
      {name:"CASTILLO CORRALES VICTOR EMANUEL", grade: 65, nc: '16400892', active: true},
      {name:"CASTILLO FRANQUEZ MARISSA MICHELLE", grade: 40, nc: '16400893', active: false}
    ];
  constructor(private router: Router) {}

  view(student: any): void {
    const extras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(student)
      }
    };

    this.router.navigate(['/view-student'], extras);
  }
}
