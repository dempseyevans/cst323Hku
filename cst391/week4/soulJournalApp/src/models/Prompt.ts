export class Prompt
{
  private promptID: number = -1;
  private promptText: string = "";

  constructor(promptID: number, promptText: string)
  {
    this.promptID = promptID;
    this.promptText = promptText
  }

  get PromptID():number
  {
    return this.promptID;
  }
  set PromptID(promptID: number)
  {
    this.promptID = promptID;
  }
  get PromptText(): string
  {
    return this.promptText;
  }
  set PromptText(promptText: string)
  {
    this.promptText = promptText;
  }
}
