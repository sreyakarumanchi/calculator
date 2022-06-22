import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  changePage(){
    this.navController.navigateRoot('/tabs')
  }

  constructor (private navController:NavController) {}
  
  input: number = -1
  input2: number = -1 
  output: number = 0 
  operate:string = ""

  math(incomingNumber:number) {
    if(this.input != -1){
      this.input2 = incomingNumber 
    }
    else{
      this.input=incomingNumber
    }
    console.log(this.input)
    console.log(this.input2)
  }
 
  operator(op:string) {
    if (op == "+") {
      this.operate = "+"
    }
    
    if (op == "-") {
      this.operate = "-"
    }

    if (op == "*") {
      this.operate = "*"
    }

    if (op == "/") {
      this.operate = "/"
    }

    if(op == "=" && this.operate == "+") {
      this.output = this.input+this.input2
      this.input = -1
      this.input2 = -1
      console.log(this.output)
    }

    if(op == "=" && this.operate == "-") {
      this.output = this.input-this.input2
      this.input = -1
      this.input2 = -1
      console.log(this.output)
    }

    if(op == "=" && this.operate == "*") {
      this.output = this.input*this.input2
      this.input = -1
      this.input2 = -1
      console.log(this.output)
    }

    if(op == "=" && this.operate == "/") {
      this.output = this.input/this.input2
      this.input = -1
      this.input2 = -1
      console.log(this.output)
    }
  }

}
