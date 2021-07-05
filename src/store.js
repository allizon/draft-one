import { writable } from "svelte/store";

export const PENDING = Symbol("stopped");
export const STARTED = Symbol("started");
export const PAUSED = Symbol("paused");
export const DONE = Symbol("done");

export const editorState = writable(PENDING);

// const defaultProgramDetails = {
//   commandName: "some stored command name",
//   requestType: [],
//   network: "NIPR",
//   office: {
//     location: "",
//     status: "",
//     phone: "",
//     dsn: "",
//   },
// };
// export const ProgramDetailsData = writable(defaultProgramDetails);

// // Other pages get their own states
// let defaultPointsOfContact = [
//   {
//     pocName: "Allison Holt",
//     email: "alholt@example.com",
//     roles: ["requestor"],
//     isAdmin: false,
//   },
//   {
//     pocName: "Matt Hudson",
//     email: "mhudson@example.com",
//     roles: ["requestor"],
//     isAdmin: false,
//   },
//   {
//     pocName: "Amy Black",
//     email: "amyb@example.com",
//     roles: ["government_poc"],
//     isAdmin: false,
//   },
//   {
//     pocName: "Elizabeth Harmon",
//     email: "grandmaster@example.com",
//     roles: [],
//     isAdmin: true,
//   },
//   {
//     pocName: "Elizabeth Windsor",
//     email: "hrh@example.com",
//     roles: [],
//     isAdmin: true,
//   },
// ];

// export const PointsOfContactData = writable(defaultPointsOfContact);
