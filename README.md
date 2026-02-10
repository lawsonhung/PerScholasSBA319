# Mood Tracker - Per Scholas SBA 319
An express app for users to track their mood  
Express, Mongoose, dotenv, Typescript

### Relationships
- One user has many journal entries
- One user has many monthly calendars
- One monthly calendar has many journal entries

### How to Run After Cloning
1. `npm i` to install all `package.json` dependencies
1. `touch .env` and define `MONGO_URI` with your MongoDB connection string and `PORT` with your port number. `PORT` will probably be `3000`
1. `npx tsc` to compile Typescript
1. `npm run seed` to seed database with seed data in `./utilities/data.ts`
1. `npm run dev` to start the server

### How to Compile and Run After Changes
1. `npx tsc` to recompile Typescript  
`npx tsc --watch` Use the watch flag to continuously scan for changes so you don't have to run `npx tsc` every time you make changes and want to test the changes
1. `npm run dev` If server is not already running

## API Reference
VERB | PATH | DESCRIPTION
-- | -- | --
| | Users | |
GET | `/api/users` | Get all users
POST | `/api/users` | Create new user
GET | `/api/users/:id` | Get one user
PATCH | `/api/users/:id` | Update user
DELETE | `/api/users/:id` | Delete user
GET | `api/users/:id/entries` | Get all journal entries for specified user
POST | `api/users/:id/entries` | Create new journal entry with the user ID
| | Journal Entries | |
GET | `/api/entries` | Get all journal entries
POST | `/api/entries` | Create new journal entries
GET | `/api/entries/:id` | Get one journal entries
PATCH | `/api/entries/:id` | Update journal entries
DELETE | `/api/entries/:id` | Delete journal entries
| | Monthly Calendars | |
GET | `/api/calendars` | Get all calendars
GET | `/api/calendars/:id` | Get one calendar

## Static Methods
- `JournalEntry.getMoodStrings()` returns a `[String]` of possible mood strings in the enum
- `JournalEntry.getMoodValues()` returns a `[Number]` of possible mood values in the enum

### Future Considerations