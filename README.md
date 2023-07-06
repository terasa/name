# Starter React App

This is a starter React application built with TypeScript and Firebase Authentication.

## Features

- User Authentication with Firebase
- Protected Routes with React Router
- TypeScript for static typing
- CSS-in-JS for component styling

## Project Structure

The project structure is as follows:

```
src/
  index.tsx
  App.tsx
  components/
    Login.tsx
    Signup.tsx
    Logout.tsx
    ProtectedRoute.tsx
  services/
    auth.ts
  types/
    user.ts
  styles/
    global.ts
    Login.ts
    Signup.ts
    Logout.ts
public/
  index.html
  favicon.ico
  manifest.json
package.json
tsconfig.json
.env
.gitignore
README.md
```

## Setup

1. Clone the repository
2. Install dependencies with `npm install`
3. Set up Firebase Authentication and add your Firebase config to `.env`
4. Run the app with `npm start`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.