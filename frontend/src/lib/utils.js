export function formatDate(date) {
  date = new Date(); // if NoteCard doesn't have (new Date())
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
