import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-choose-languages',
  templateUrl: './choose-languages.page.html',
  styleUrls: ['./choose-languages.page.scss'],
})
export class ChooseLanguagesPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
 choose_artist() {
    this.route.navigate(['./choose-arist']);
  }
}

