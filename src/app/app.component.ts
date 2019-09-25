import { Component, OnInit } from '@angular/core';
import { FileSizePipe } from './filesize.pipe';

interface File {
  name: string;
  size: any;
  type: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FileSizePipe],
})
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];
  title = 'custom-pipe';

  constructor(private filesize: FileSizePipe) {}
  ngOnInit() {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' },
    ];

    this.mapped = this.files.map(file => {
      return {
        name: file.name,
        type: file.type,
        size: this.filesize.transform(file.size, 'mb'),
      };
    });
  }
}
