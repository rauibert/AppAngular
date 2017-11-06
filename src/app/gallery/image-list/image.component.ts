import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [`
    img{
        -webkit-box-shadow: 3px 4px 19px -1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 3px 4px 19px -1px rgba(0, 0, 0, 0.75);
        box-shadow: 3px 4px 19px -1px rgba(0, 0, 0, 0.75);

        margin-bottom: 20px;
    }

    img:hover{
        filter: gray;
        -webkit-filter: grayscale(1);
    }
  `]
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
