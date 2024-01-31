import { Request, RequestHandler, Response } from 'express';
import * as PromptsDao from './prompts/prompts.dao';
import { OkPacket } from 'mysql';

export const readPrompts: RequestHandler = async (req: Request, re: Response) => 
{
    try{
        let prompts;
        let promptID = parseInt(req.query.promptID as string);

        console.log('promptID', promptID);
        if (Number.isNaN(promptID)){
            prompts = await PromptsDao.readPrompts();
        }
        else{
            //!!!!!!!!!!//
        }
    } catch (error)
    {
        console.error(error);
        //!!!!!!!//
    }
}


export const createPrompt: RequestHandler = async(req: Request, res: Response) => {
    try {
        const okPacket: OkPacket = await PromptsDao.createPrompt(req.body);

        console.log('req.body', req.body);
        console.log('prompt', okPacket);

        req.body.prompts.forEach(async (promptID: number, text: string) =>
        {
            try{
                await PromptsDao.createPrompt(promptID, text, okPacket.insertId);
            }
            catch (error){
                console.error(error);
                //!!!!!!!//
            }
        });
        res.status(200).json(okPacket);
    }    catch (error)
    {
        console.log(error);
        //!!!!!!!//
    }
};