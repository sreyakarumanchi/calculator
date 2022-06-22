import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  sreya: Person = new Person("sreya","karumanchi.sreya@gmail.com", "7203782679", "6510 Pine Street", 17, "no middle name")
  people: Person [] = []
  fName: string = ""
  selected: Person 
  constructor() { }

  ngOnInit() {
    this.people = [this.sreya, new Person("joe","joemama@gmail.com","402-111-1111","your mom's house", 21, "has multiple mamas"), new Person ("harnoor", "harnoor@gmail.com", "702-497-9670", "UNO Scott Hall", 35, "tall")]
    
    for (var i=0; i<this.people.length; i++){
    [console.log(this.people[i])]
    }
    console.log (this.sreya.name + " " + this.sreya.phoneNumber)
    console.log(this.sreya.email)
  }
onClick(person: Person){this.selected = person}
}
