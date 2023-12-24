//Imports the router class
// and uses albums.controller to create an object
import { Router } from 'express';
import * as AlbumsController from './albums.controller';

//Initialize intance of the router
const router = Router();

//Creates routes and sets a function with it
router
    .route('/albums')
    .get(AlbumsController.readAlbums);

router
    .route('/albums/:artist')
    .get(AlbumsController.readAlbumsByArtist);

router
    .route('/albums/search/artist/:search')
    .get(AlbumsController.readAlbumsByArtistSearch);

router
    .route('/albums/search/description/:search')
    .get(AlbumsController.readAlbumsByDescriptionSearch);

router
    .route('/albums')
    .post(AlbumsController.createAlbum);

router
    .route('/albums')
    .put(AlbumsController.updateAlbum);

router
    .route('/albums/:albumId')
    .delete(AlbumsController.deleteAlbum);

//Exports the router
export default router;
