import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
        this.items = db.collection('/person').valueChanges();
    }

  ngOnInit() {
  }

}
