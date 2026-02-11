# Unity Public Senior Secondary School Website - React Version

This is the React version of the Unity Public Senior Secondary School website, converted from the original HTML/CSS project.

## Features

- Modern React 18 with Vite
- React Router for navigation
- Reusable Header and Footer components
- All original pages converted to React components
- Preserved original styling and functionality
- Responsive design maintained

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header component
│   │   └── Footer.jsx       # Footer component
│   ├── pages/
│   │   ├── Home.jsx         # Home page
│   │   ├── AboutUs.jsx      # About Us page
│   │   ├── Admission.jsx    # Admission page
│   │   ├── Director.jsx     # Director page
│   │   ├── Staff.jsx        # Staff page
│   │   ├── SchoolFees.jsx   # School Fees page
│   │   ├── ContactUs.jsx    # Contact Us page
│   │   ├── Curriculum.jsx   # Curriculum page
│   │   ├── Streams.jsx      # Streams Offered page
│   │   ├── Facilities.jsx   # Facilities page
│   │   ├── HouseSystem.jsx  # House System page
│   │   ├── CoCurricularActivities.jsx  # Co-curricular Activities
│   │   ├── PaceSettingActivities.jsx   # Pace Setting Activities
│   │   ├── Results.jsx      # Results page
│   │   └── Gallery.jsx       # Gallery page
│   ├── App.jsx              # Main App component with routing
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── css/                     # Original CSS files (preserved)
├── img/                     # Images
├── js/                      # JavaScript files
├── vendor/                  # Third-party libraries
├── package.json
├── vite.config.js
└── index.html
```

## Installation

1. Install dependencies:
```bash
npm install
```

   This will automatically run the setup script to link static assets to the `public/` directory.

2. If you need to manually set up assets, run:
```bash
npm run setup
```

   This script creates symlinks (or copies on Windows) of the following directories to `public/`:
   - `css/`, `img/`, `js/`, `vendor/`
   - `myflexslider/`, `mygallery/`, `downloads/`
   - Other static asset directories

## Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Building for Production

Build the production version:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Notes

- All original CSS files are preserved and imported in `src/index.css`
- Images and assets are referenced from their original locations
- jQuery plugins are loaded dynamically in the App component
- The original HTML structure and styling are maintained
- React Router handles all navigation

## Converting Additional Pages

If you need to convert additional HTML pages:

1. Create a new component in `src/pages/`
2. Extract the main content from the HTML file
3. Add a route in `src/App.jsx`
4. Update the Header component navigation if needed

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11 support may require additional polyfills
