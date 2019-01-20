import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'app';
  ngOnInit() { this.servicecall(); }
  servicecall() {
      var request = new XMLHttpRequest();
      request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
          if (request.status === 200) {
            console.log(request);
          }
        } else {
          console.log(request);
        }
      };
      var url = 'https://bksun.herokuapp.com/api/categories';
      request.open("GET", url);
      request.send();
    };
}
