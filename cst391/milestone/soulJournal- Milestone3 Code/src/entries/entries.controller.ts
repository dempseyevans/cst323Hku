import { Request, RequestHandler, Response } from 'express';
import * as EntriesDao from './entries.dao';
import { OkPacket } from 'mysql';

export const updateEntry: RequestHandler = async (req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await EntriesDao.updateEntry(req.body);

        console.log('req.body', req.body);
        console.log('entry', okPacket);

        req.body.entries.forEach(async (entryID: number, text: string) =>{
            try{
                await EntriesDao.updateEntry(entryID);
            }
            catch(error) {
                console.log(error);
                //!!!!!//
            }
    });
    res.status(200).json(OkPacket);
} catch(error)
{
    console.log(error);
    //!!!!!!//
}
};

export const deleteEntry: RequestHandler = async (req: Request, res: Response) => {
    try{
        let entryID = parseInt(req.params.entryID as string);
        console.log('entryID', entryID);

        if(!Number.isNaN(entryID)){
            const response = await EntriesDao.deleteEntry(entryID);
            res.status(600).json(response);
        } else {throw new Error("Int expected for entryID");}
    } catch (error)
    {
        console.log(error);
        //!!!!!!//
    }
};