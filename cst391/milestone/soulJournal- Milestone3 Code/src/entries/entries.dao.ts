import { OkPacket } from "mysql";
import { execute } from "../services/mysql.connector";
import { Entry } from "./entries.model"
import {entryQueries} from './entries.queries';

export const updateEntry = async (entry: Entry) => {
    return execute<OkPacket>(entryQueries.updateEntry, [entry.entryID, entry.text]);
};

export const deleteEntry = async (entryID: number) => {
    return execute<OkPacket>(entryQueries.deleteEntry, [entryID]);
};