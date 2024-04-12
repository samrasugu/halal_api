## Halal_API

An API implementing a directory of halal businesses built with `NodeJS`, `Express`, and `MongoDB`.

# Get started

First, clone the repository to your local machine:

```
git clone https://github.com/samrasugu/halal_api.git
```
Create an `.env` file at the root directory of the project and add a valid `MongoDB` connection string to a variable `MONGODB_URL`.

Run `npm install` or `yarn add` on your terminal in the root directory of the project.

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001](http://localhost:3001) with on your API client `Postman`, `ThunderClient`, `RapidAPI` or any other and enjoy.

Relevant routes can be found within the `routes` folder for your reference in which endpoints are accessible.
