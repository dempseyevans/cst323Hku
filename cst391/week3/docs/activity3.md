## Activity 3
#### Part 1
***
![BootStrap grid in code](boostrapGrid.jpg 'Boostrap grid in code')
![Responsive view](pageResponsiveView.jpg 'Example 1 of responsive view'),
![Responsive view 2](pageResponsiveView.jpg 'Example 2 of responsive view')

#### Research Questions:
###### The @Input decorator in info.component.ts allows a property to have it's value set by the parent controller.

###### The '[value]' used in info.component.html allows a property in an HTML file to have its value set by an expression in the component.

###### The '[(ngModel)]' in the info.component.html is used to zupport two-way data binding and create a FormControl instance which binds to a form control element.
***
#### Part 2
***
![Initial Page](welcome.jpg 'Initial application page')

![GCU Home](gcuhome.jpg 'GCU Homepage')

![Create Album](createalbum.jpg 'Create Album page')

![Add Album](albumadd.jpg 'Add Album page')

![Artists List](artistlist.jpg 'Artists List page')

![About Box](aboutbox.jpg 'About Box')

#### Research Question:
##### Comments to music-service.service.ts code
***
//Imports
import { Injectable } from '@angular/core';

import exampledata from '../../data/sample-music-data.json';

import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

//Allows for dependency injection, provided in the root level
@Injectable({ providedIn: 'root' })
//injectable class
export class MusicServiceService {
	private readonly artists: Artist[] = [];
	private readonly albums: Album[] = [];

  //Constructor
	constructor() {
		this.createArtists();
		this.createAlbums();
	}

  //Methods to create, get, update, and delete data (artists and albums)
	private createArtists(): void {
		this.artists.push(new Artist(0, 'The Beatles'));
	}

	private createAlbums(): void {
		exampledata.forEach((data: any) => {
			if (data.artist === 'The Beatles') {
				const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
				const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
				this.albums.push(album);
			}
		});
	}

	public getArtists(): Artist[] {
		return this.artists;
	}

	public getAlbums(artist: string): Album[] {
		return this.albums;
	}

	public getAlbum(artist: string, id: number): Album | undefined {
		const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

		if (album) {
			const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
			return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
		}

		return undefined;
	}

	public createAlbum(album: Album): void {
		this.albums.push(album);
	}

	public updateAlbum(album: Album): void {
		const index = this.albums.findIndex((a) => a.Id === album.Id);

		if (index !== -1) {
			this.albums.splice(index, 1, album);
		}
	}

	public deleteAlbum(id: number, artist: string): void {
		const index = this.albums.findIndex((a) => a.Id === id);

		if (index !== -1) {
			this.albums.splice(index, 1);
		}
	}
}
***
***
#### References
###### Angular (n.d.) NgModel. https://angular.io/api/forms/NgModel#description
