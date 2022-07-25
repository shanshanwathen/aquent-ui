import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Aquent CRUD APP';
  modalVisible = false;

  constructor() { }

  onClose(isVisible: boolean) {
    this.modalVisible = isVisible;
  }

  showModal() {
    this.modalVisible = true;
  }
}
