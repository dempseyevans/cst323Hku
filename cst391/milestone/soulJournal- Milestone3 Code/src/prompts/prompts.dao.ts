import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import {Prompt} from "./prompts.model";
import {promptQueries} from './prompts.queries';

export const readPrompts = async () => {
    return execute<Prompt[]>(promptQueries.readPrompts, []);
};

export const createPrompt = async (prompt: Prompt) => {
    return execute<OkPacket>(promptQueries.createPrompt, [prompt.promptID, prompt.text]);
}