export const promptQueries = {
    readPrompts:
        'SELECT id as promptID, text as text from soulJournal.prompt',
    createPrompt:
        'INSERT INTO PROMPT(promptID, text) VALUES(?,?)',
}