import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { error } from 'util';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: any[];
  imagesFound = false;
  searching = false;

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.hits;
    console.log(data.hits);
  }

  // tslint:disable-next-line:no-shadowed-variable
  handleError(error) {
    console.log(error);
  }

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  searchImages(query: string) {
    this.searching = true;
    return this.imageService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      // tslint:disable-next-line:no-shadowed-variable
      error => this.handleError(error),
      () => this.searching = false );
  }

}
