import { Component, OnInit, Input } from '@angular/core';
import {Image} from '../../models/image';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: []
})
export class ImageListComponent implements OnInit {
  image = new Image('1', 'Primera Imagen', 'Descripción', 'http://videotutoriales.com/maspa/maspa1.jpg', 'http://videotutoriales.com/maspa/maspa1-1.jpg');
  
  constructor() { }

  ngOnInit() {
  }

}
