import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.page.html',
  styleUrls: ['./another-page.page.scss'],
})
export class AnotherPagePage implements OnInit {

  changePage (){
    this.navController.navigateRoot('/home')
  }
  constructor(private navController :NavController) { }

  ngOnInit() {
  }

}
