import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`  
  .Online{  
    color: yellow;  
  }`]  

})
export class AppComponent {
  title = 'directives';
  serverID: number = 10;  
  serverStatus: string = 'Offline';  
  
  constructor () {  
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';  
  }  
  getServerStatus() {  
    return this.serverStatus;  
  }  
  getColor() {  
    return this.serverStatus === 'Online' ? 'green' : 'red';  
  }  
}
