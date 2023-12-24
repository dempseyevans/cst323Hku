//Imports from express and
//imports from the artists.dao class
import { Request, RequestHandler, Response } from "express";
import * as ArtistDao from './artists.dao';

//Function to read the artists
export const readArtists: RequestHandler = async (req: Request, res: Response) => {
    try {
        //Artists from Artists.dao
        const artists = await ArtistDao.readArtists();

        //Responds with the artists
        res.status(200).json(
            artists);
    } 
    //Error handling. Respond with status code and message
    catch (error) {
        console.error('[artists.controller][ReadArtists][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching artists'
        });
    }

};

