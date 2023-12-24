//Imports the router from express
//Creates ArtistController object from artists.controller
import { Router } from 'express';
import * as ArtistsController from './artists.controller';

//Initialize router
const router = Router();

//Creates route and associated function
router  
    .route('/artists')
    .get(ArtistsController.readArtists);

//Export the router
export default router;