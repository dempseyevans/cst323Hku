import { Component, OnInit } from '@angular/core';
import { Entry } from '../models/Entry';
import { ActivatedRoute } from '@angular/router';
import { JsServiceService, SjServiceService} from '../service/sj-service.service';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntryComponent implements OnInit
{
  entry:Entry[] = [];
  selectedEntry: Entry = null;
  loadingMsg: String = "Please wait……loading";

  constructor(private route: ActivatedRoute, private service: SjServiceService) { }

  ngOnInit()
  {
    // Subscribe to query parameter changes (this will be a timestamp) then call Music Service to get a list of Artists
    this.route.queryParams.subscribe(params => {
        console.log("Getting data....");
        this.service.getEntry( (entry:Entry[]) =>
        {
          this.entry = entry;
          this.selectedEntry = null;
          this.loadingMsg = null;
        });
    });
  }

  public onSelectEntry(entry: Entry)
  {
    console.log("Selected Entry of " + entry.EntryID);
    this.selectedEntry = entry;
  }
}
