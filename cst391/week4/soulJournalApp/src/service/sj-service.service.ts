import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Entry } from '../models/Entry';
import { Prompt } from '../models/Prompt';

@Injectable({providedIn: 'root'})
export class SjServiceService
{
  hostname:string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  public getEntry(callback:any)
  {
    // Call the Get Artists API using a HTTP GET
    this.http.get<Entry[]>(this.hostname + "/entries")
      .subscribe((data) =>
      {
        let entry:Entry[] = [];
        for(let x=0;x < data.length;++x)
        {
          entry.push(new Entry(data[x]['id'], data[x]['text']));
        }
        callback(entry);
       });
  }

  public getPrompt(prompt:number, callback:any)
  {
    // Call the Get Albums API using a HTTP GET
    this.http.get<Prompt[]>(this.hostname + "/prompt/" + Entry)
      .subscribe((data) =>
      {
        let prompt:Prompt[] = [];
        for(let x =0;x < data.length;++x)
        {

          prompt.push(new Entry(data[x]['id'], data[x]['text']));

        }
        callback(prompt);
       });
  }


  public createPrompt(prompt:Prompt, callback:any)
  {
    // Call the Create Album API using a HTTP POST
    this.http.post<Prompt>(this.hostname + "/prompts", prompt)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  public updateEntry(entry:Entry, callback:any)
  {
    // Call the Update Album API using a HTTP PUT
    this.http.put<Entry>(this.hostname + "/entries", entry)
    .subscribe((data) =>
    {
      callback(data);
    });
  }

  //POST API NEEDS TO BE ADDED
}
