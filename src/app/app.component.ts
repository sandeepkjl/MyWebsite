import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyWebsite';

 mymethod(){
   console.log("clicked");
   var modal=document.getElementById("modal");
   var modal_bk=document.getElementById("modal_background_color");
    modal_bk.style.display="block";
   modal.style.display="block";
   

 
 }

 mymethodClose(){
   console.log("close clicked");
   var modal_bk=document.getElementById("modal_background_color");
    modal_bk.style.display="none";
   var modal=document.getElementById("modal");
   modal.style.display="none";

 
 }
}
