# Myanmar Historical Places

A small React + Redux app for browsing historical places in Myanmar. You can mark places as visited, open a place in a detail view, and get a random place suggestion.

## Features

- Browse 6 historical places in Myanmar, each shown as a card with a photo and description
- Mark or unmark a place as visited
- Open a place in a pop-up detail view with "View Details"
- Get a random place with "Suggest Random Place", and go back with "Back"
- Visited status stays in sync everywhere the place appears (grid, pop-up and suggestion)

## Tech Stack

- [React](https://react.dev) 19
- [Redux Toolkit](https://redux-toolkit.js.org) and React Redux, for state management
- [Tailwind CSS](https://tailwindcss.com) 4, for styling
- [React Icons](https://react-icons.github.io/react-icons), for icons
- [Vite](https://vite.dev), for the dev server and build

## Getting Started

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (usually http://localhost:5173).

## Project Structure

```
src/
├── components/
│   ├── PlaceCard.jsx     # Grid of all places + the detail pop-up
│   ├── Places.jsx        # Renders a Card for every place
│   ├── Card.jsx          # One place card (reused in grid, pop-up and suggestion)
│   ├── Button.jsx        # "Mark as Visited" and "View Details" buttons
│   └── SuggestPlace.jsx  # "Suggest Random Place" button and suggested card
├── redux/
│   ├── places.js         # Creates the Redux store
│   └── placesSllice.js   # Place data and reducers
├── App.jsx
└── main.jsx
```

## How the State Works

All data lives in one Redux slice:

| State | What it holds |
|---|---|
| `places` | The list of places (`id`, `name`, `description`, `image`, `visited`) |
| `selectedId` | The id of the place open in the pop-up, or `null` |
| `suggestId` | The id of the randomly suggested place, or `null` |

Reducers:

- `toggleVisited(id)` flips a place's `visited` value
- `selectedPlace(id)` opens a place in the pop-up (`null` closes it)
- `suggestRandomPlace()` picks a random place
- `clearSuggestion()` hides the suggested place

The pop-up and the suggestion store only an **id** and look the place up from `places`. So every card reads the same place object, and marking a place as visited updates it everywhere.

## What I Learned

- Creating a slice and store with Redux Toolkit
- Reading state with `useSelector` and updating it with `useDispatch`
- Passing data to child components with props
- Reusing one `Card` component with props like `big`
- Building a modal overlay with Tailwind
