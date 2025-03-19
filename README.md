# Lista de Compras Web

> [!WARNING]
> The current web deploymeny may be slow due to render's inactivity policy

## Overview

Lista de Compras Web is a web application designed to help users manage their shopping lists. The application allows users to add, update, and delete items from their shopping list, categorize items, and track the status of each item.

## Features

- **Add Items**: Users can add new items to their shopping list with details such as name, amount, unit, and category.
- **Update Items**: Users can update the details of existing items.
- **Delete Items**: Users can remove items from their shopping list.
- **Categorize Items**: Items can be categorized into different types such as Padaria, Legume, Fruta, Bebida, and Carne.
- **Track Status**: Users can mark items as done or todo.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and generating static websites.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Radix UI**: A set of low-level, accessible UI components for building design systems and web applications.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **Sonner**: A library for displaying toast notifications.

## Project Structure

- **components**: Contains all the React components used in the application.
  - **core**: Core components such as AddButton, AddItem, Item, Items, and UnitDropdown.
  - **ui**: UI components such as Button, Checkbox, Input, Popover, Select, and Tag.
- **context**: Contains the context provider for managing the state of items.
- **data**: Contains static data such as item types.
- **lib**: Utility functions and Axios instance configuration.
- **services**: Functions for interacting with the backend API.
- **types**: TypeScript types used throughout the application.
- **app**: Contains global styles and the main layout of the application.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/lista-de-compras-web.git
   cd lista-de-compras-web
   ```

2. Install the dependencies:
   ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```
    NEXT_PUBLIC_API_URL={backend-api-url}
    ```

Your backend API URL should be something like `http://localhost:3001` if you are running the backend locally. Or you can use the deployed backend URL.

### Running the Application

1. Start the development server:
   ```sh
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Here are some ways you can contribute:
- Add new features
- Improve the user interface
- Write tests
- Fix bugs

## License

Distributed under the [MIT License](LICENSE).
