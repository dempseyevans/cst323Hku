export class Entry
{
  private entryID: number = -1;
  private entryText: string = "";

  constructor(entryID: number, entryText: string)
  {
    this.entryID = entryID;
    this.entryText = entryText
  }

  get EntryID():number
  {
    return this.entryID;
  }
  set EntryID(entryID: number)
  {
    this.entryID = entryID;
  }
  get EntryText(): string
  {
    return this.entryText;
  }
  set EntryText(entryText: string)
  {
    this.entryText = entryText;
  }
}
