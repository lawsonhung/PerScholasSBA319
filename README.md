# Mood Tracker - Per Scholas SBA 319
An express app for users to track their mood  
Express, Mongoose, dotenv, Typescript

### How to Run After Cloning
1. `npm i express mongoose dotenv`
1. `npm install -D typescript @types/express @types/node ts-node nodemon`
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
GET | `/api/users` | Get all users
POST | `/api/users` | Create new user
GET | `/api/users/:id` | Get one user
PATCH | `/api/users/:id` | Update user
DELETE | `/api/users/:id` | Delete user
| | | |

### Future Considerations