import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  setTheme(nColor: string, contrast = 'dark') {
    document.documentElement.style.setProperty('--main-color', nColor);
    if (contrast === 'light') {
      document.documentElement.style.setProperty('--main-bg-lightness', '90%');
      document.documentElement.style.setProperty(
        '--main-text-lightness',
        '20%'
      );
    } else {
      document.documentElement.style.setProperty('--main-bg-lightness', '20%');
      document.documentElement.style.setProperty(
        '--main-text-lightness',
        '60%'
      );
    }
  }
}
