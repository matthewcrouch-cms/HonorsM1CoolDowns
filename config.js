/* =====================================================================
   COOL DOWNS: SETTINGS FILE
   Edit this file to add classes, rosters and PINs. You never need to touch index.html.
   ===================================================================== */
window.CONFIG_LOCAL = {

  // After a student submits: "marks" shows Got it / Not yet per question. "none" just says it was sent.
  feedback: "marks",

  // Your Google Form (where student answers are sent).
  form: {
    action: "https://docs.google.com/forms/d/e/1FAIpQLSdZUcGGDruMUqcUzluu7S2GQ96A3cDupu4iqdQd_-3m1pE0eQ/formResponse",
    fields: { cooldown: "entry.1241225437", period: "entry.2007958280", name: "entry.2054667440", answers: "entry.1980489109" }
  },

  // The "Publish to web" CSV link for the Form’s response Sheet (used by the teacher view).
  resultsCsv: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTz3qu3C2adCc8Osxc7zgBVo95qA2IQSeSyHZ3jVrZpnrAGSzcTO4tl2Sp1wYW-2CgNqCTJ3pkwaMcI/pub?gid=1233888133&single=true&output=csv",

  // MASTER PIN: opens the teacher view with ALL classes.
  masterPin: "4190",

  // TEACHER PINS: each teacher’s PIN shows only their own classes.
  // A blank pin ("") means that teacher can’t open the teacher view.
  // "name" must match the teacher name used in the classes below. Give each teacher a different PIN.
  teachers: [
    { name: "Crouch",    pin: "3104" },
    { name: "Barrera",   pin: "3107" },
    { name: "Jones",     pin: "3108" },
    { name: "Kosanovich", pin: "3109" }
  ],

  // CLASSES. A class shows up for students only once its roster has names in it.
  // Roster format: "First L." (first name and last initial), in alphabetical order by last name.
  // "key" is what gets saved in the Sheet. Never change a key after students start using it.
  classes: [
    { key: "4th Block", teacher: "Crouch", block: "4th Block", roster: [
      "Destiny B.","Valentino D.","Gracie D.","Daniel G.","Theo H.","Dario H.","Aubrey J.","Brody J.","Patrick M.","Celeste M.",
      "Zoie N.","Paula N.","Uchechi N.","Yaduraj P.","Jackson P.","Asha R.","Crystal S.","Isaiah T.","Davien T.","Ellis W." ] },

    { key: "Barrera - 1st Block",   teacher: "Barrera",   block: "1st Block", roster: [
      /* paste names here, like "Ava B.", "Ben C.", */ ] },

    { key: "Barrera - 2nd Block",   teacher: "Barrera",   block: "2nd Block", roster: [
      /* paste names here */ ] },

    { key: "Jones - 4th Block",     teacher: "Jones",     block: "4th Block", roster: [
      /* paste names here */ ] },

    { key: "Kosanovich - 4th Block", teacher: "Kosanovich", block: "4th Block", roster: [
      /* paste names here */ ] }
  ]
};
