import { Component, Input, OnChanges, SimpleChange  } from '@angular/core';
import{ FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

form;
ngOnInit(){
this.form = new FormGroup({

firstname: new FormControl("Aqib"),
lastname: new FormControl(""),
languages: new FormControl("") ,

});
}



onSubmit = function(user){
  console.log(user);
}


  // title = 'app';
  // obj = {
  // id : "1",
  // name : "aqib"
  // }
 
  // arr = ["abc","def","ghi"];
  // isTrue = false;
  // myName = "Aqib";

// it  ems = ["Angular 4","React","Underscore"];

}
