import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'teste-temp';



  ngOnInit() {
    //  this._http.get<any>('url', {observe: 'response'})
    // .subscribe(resp => {
    //  console.log(resp.headers.get('X-Token'));
    //});
  }

  testaGet() {

  }

  enviar() {
    
  }
}
