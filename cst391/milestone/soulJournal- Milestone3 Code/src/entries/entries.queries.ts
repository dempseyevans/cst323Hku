export const entryQueries = {
    updateEntry:
        'UPDATE soulJournal.entry SET text=? WHERE entryID = ?',
    deleteEntry:
        'DELETE FROM soulJournal.entry where id = ?',
}