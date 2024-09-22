# L1 Interview Task: React Application

This project is a React-based web application built as part of an interview task. It includes a login page with form validation, a home page that lists countries from an external API, and additional features such as a slider, filters, and load-more pagination. The application is hosted on Vercel and uses modern React tools, including functional components, hooks, and Redux Toolkit for state management.

---

## Features

- **Login Page** with form validation (Email & Password):
  - Password must be at least 8 characters long, with at least one uppercase letter, one number, and one special character.
- **Home Page**:

  - Displays a list of countries with their flag, name, and region.
  - Allows filtering countries by continent.
  - Supports load-more pagination.

- **Slider**:

  - A responsive slider with Next/Previous navigation and dots for slide indication.

- **Caching with TanStack Query**:

  - Efficient data caching for the country data, reducing the need for repeated API calls and enhancing performance.
  - Automatically keeps data fresh by refetching when needed, providing users with the most up-to-date information.

- **Responsive Design**:
  - Pages are responsive and match the provided design mockup.

---

## Tech Stack

- **React.js**: Functional components and hooks for UI development.
- **Redux Toolkit**: State management to handle country data and filters.
- **React-Bootstrap**: Styling and responsive design with Bootstrap components.
- **Axios**: For API requests to fetch country data.
- **TanStack Query**:
  - Efficient data fetching, caching, and synchronization for remote data, enhancing performance and user experience.
  - Automatic background data updates, ensuring that users see the most current information without needing to refresh the page.
- **Vercel**: Deployment and hosting of the application.

---

## API Used

This project fetches data from the following API:

- [REST Countries API](https://restcountries.com/v2/all?fields=name,region,flag)

**Fields used**:

- `name`: Name of the country.
- `region`: The continent/region the country belongs to.
- `flag`: The flag image URL.

---

## Project Structure

The project follows a standard React application structure. Below is an overview of the directory layout:

```bash
├── public
│   └── index.html         # Main HTML file that serves the application.
├── src
│   ├── assets             # Contains static assets for the project.
│   │   ├── image          # Folder for images used in the application.
│   │   ├── style          # Folder for stylesheets.
│   │   └── index.js       # Entry point for assets.
│   ├── master             # Contains master layout components.
│   │   ├── index.js       # Entry point for master components.
│   │   └── Master.js      # Main Master component.
│   ├── modules            # Contains feature modules of the application.
│   │   ├── Auth           # Authentication module.
│   │   │   ├── components  # Components specific to authentication.
│   │   │   ├── hook        # Custom hooks related to authentication.
│   │   │   └── index.js    # Entry point for the Auth module.
│   │   ├── Home           # Home module.
│   │   │   ├── components  # Components specific to the home page.
│   │   │   ├── hook        # Custom hooks related to the home page.
│   │   │   └── index.js    # Entry point for the Home module.
│   ├── reduxConfig        # Redux configuration files.
│   │   ├── slices         # Contains individual slice files.
│   │   │   ├── api.slice.js  # Slice for handling API interactions.
│   │   │   ├── countrySlice.js  # Slice for managing country data.
│   │   │   ├── userSlice.js    # Slice for managing user data.
│   │   │   └── index.js        # Entry point for slices.
│   │   ├── index.js       # Entry point for reduxConfig.
│   │   └── store.js       # Redux store configuration.
│   ├── shared             # Contains shared components and utilities.
│   └── index.js           # Entry point of the React application.
├── README.md              # This file.
├── package.json           # Project metadata and dependencies.
└── .gitignore             # Specifies files and directories to ignore in Git.
```

## Deployment

The application is deployed on Vercel. You can access the live version [here](https://times-world-project.vercel.app/).
