import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
 changePage(name:string){
  this.navController.navigateRoot(name)
 }
 
 constructor(private navController: NavController) {

  }

  ngOnInit() {
  }

}
