import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../models/Entry';

@Component({
  selector: 'app-display-entries',
  templateUrl: './display-entries.component.html',
  styleUrls: ['./display-entries.component.css']
})
export class DisplayAlbumComponent implements OnInit
{
  @Input() entry: Entry;

  constructor() { }

  ngOnInit() { }
}
