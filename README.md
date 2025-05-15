# CAD Exchanger Task

A test task for CADEx

# Setup

For setup, you can simply clone repo into your own netlify project, or locally and use terminal's `npm install` and `npm run dev` commands, but you'll have to use proxy to bypass CORS for the serverless function to work

# Hosting

Whole project was deployed to netlify, the link for the site: https://cadexhiring.netlify.app/

# Backend

For backend realization the built-in netlify feature called "serverless functions" was used. The netlify function was created in the corresponding folder (`netlify/functions/contact.mts`).  The "Axios" library is used to make POST requests on the function

# Styling

For easy creation of the client's side of the app, the MUI Joy component library is being used. In addition, wrapper, header, etc. components were made with CSS-in-JS Styled-Components (`src/styles/style.ts`).
Also, to reduce the amount of unnecessary code the React Component `style` field was used for couple of rules

# Youtube video implementation

To add YT video to the site, the third-party library "React Player" is being used. This library supports different url's and allows pretty narrow configuration, which makes it much more flexible than default YT embed

# Code

Build: Vite + React + TS

"ESLint" and "Prettier" libraries are used for code linting

To maximize the performance and code understanding, "React router DOM" is being used for navigation with base sticky header and footer layout, also each page is split to group of components and all the Backend request logic is specified in separate file (`src/pages/ContactUs/sendContactActions.ts`)

Also, to avoid unnecessary re-renders, form components are wrapped in react memo component

The components are easy to edit, replace, or delete, to add more flexibility to them the props are being used

# Additional info

For socials, the Open Graph tags were implemented:
![Screenshot 2025-05-07 234434](https://github.com/user-attachments/assets/7504d5c7-06d2-419d-91d5-6afef3b47cf4)


