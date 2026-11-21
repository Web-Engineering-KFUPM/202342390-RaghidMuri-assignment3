# Technical Documentation

## Project Structure

The project is separated into different files and folders to keep the code organized.

- `index.html` contains the main structure and content of the website.
- `css/styles.css` contains the design, layout, theme, and transition styles.
- `js/script.js` contains the JavaScript features, weather API request, timer, theme management, and form validation.
- `assets/images/` contains the project images.
- `docs/` contains the technical documentation and AI usage report.
- `.gitignore` tells Git which local files or folders should not be tracked.
- `README.md` describes the project and how to run it.

## HTML Structure

The website is divided into three main sections:

- About Me
- Projects
- Contact

I also used a header with navigation links and a footer. The header displays a greeting, the current temperature in Dhahran, a visitor timer, and a button for switching between light and dark modes.

Each project is placed inside an `article` element because each project is its own separate piece of content. Each project includes an image and a button that allows the user to show or hide its description.

The contact form contains fields for the user's name, email, and message.

## CSS and Design

The website uses a dark theme by default, with light text on a dark background. The website also has an optional light theme using the `light-mode` class on the `body` element. CSS rules change the background, headings, links, and status text when light mode is active.

Flexbox is used for layout in the navigation and projects section. The projects use a column direction so they appear one under another.

The images use `max-width: 100%` and `height: auto` so they shrink on smaller screens without being stretched.

The project descriptions are hidden by default using CSS and are displayed when the user clicks the corresponding button.

The navigation links use a transition so their color changes smoothly when the user hovers over them.

## Dynamic Interaction

The website includes interactive features in the Projects section and a theme toggle button in the navigation.

Each project includes a `Show Description` button. When the user clicks the button:

- The project description becomes visible.
- The button text changes to `Hide Description`.

When the user clicks it again:

- The description is hidden.
- The button text changes back to `Show Description`.

This feature uses JavaScript event listeners and conditional logic. Each button controls its own project description.

The navigation also includes a theme toggle button with an icon. When the user clicks it, the website switches between light and dark modes by adding or removing the `light-mode` class from the body. The button's accessible label updates to describe the action it will perform. The selected theme is saved using `localStorage`, so the website remembers the choice after a page refresh.

The header also displays a visitor timer that updates automatically while the user stays on the page.

## Contact Form Validation

The contact form uses JavaScript to check the user's input when the `Send` button is pressed.

The form checks for:

- Empty name fields
- Empty email fields
- Empty message fields
- Email addresses that do not contain `@`

If one or more fields are empty, the website displays:

`Please fill in all fields.`

If the email address does not contain `@`, the website displays:

`Please enter a valid email address.`

If the form passes these checks, the website displays:

`Message submitted successfully.`

The form uses `event.preventDefault()` so the page does not reload when the form is submitted. The current form displays feedback on the page; it does not send messages to a server.

## User Feedback

The website gives the user feedback based on their actions.

The project buttons change between `Show Description` and `Hide Description` depending on whether their descriptions are visible. The contact form displays an error or success message depending on the input.

The weather display first shows `Loading weather...`, then updates with the temperature or an error message if the request fails. The theme button's accessibility label also changes to describe the available action.

## Animation and Transitions

The navigation links use a CSS transition for their hover effect. When the user moves the mouse over a navigation link, the text color changes smoothly instead of changing instantly. The transition lasts `0.7s`.

The body also uses a short transition for background and text colors when switching between light and dark modes.

## Responsive Design

The project images shrink when needed because they use `max-width: 100%`. Flexbox is used in the navigation and projects section to help organize the layout.

The header also contains weather and timer text in the top-right corner. This area should be checked at narrow screen widths to make sure it does not overlap the navigation or heading.

## JavaScript

The website uses JavaScript for interactive features, API integration, and state management.

### Time-Based Greeting

The website displays a greeting depending on the user's local time. JavaScript checks the current hour and displays:

- Good morning
- Good afternoon
- Good evening

### Project Descriptions

JavaScript selects all buttons with the `details-button` class and adds a click event to each one. When a button is clicked, JavaScript shows or hides its corresponding description and updates the button text.

### Form Validation

JavaScript checks the values entered into the contact form when the user presses `Send`. It prevents the normal form submission, checks the input, and displays the appropriate feedback message.

### Weather API Integration

The website uses the external **Open-Meteo API** to display the current temperature in Dhahran.

The `loadWeather()` function uses `fetch()` and `async/await` to request the current `temperature_2m` value for coordinates `26.3927` latitude and `50.1131` longitude. After receiving the response, JavaScript converts it to JSON and updates the `weather-info` element in the page header.

The function checks `response.ok` and uses `try/catch` to handle errors. If the request fails, the page displays `Unable to load weather.` instead of leaving the user without feedback.

### Visitor Timer

The visitor timer starts when the page's JavaScript runs. It records the starting time using `Date.now()` and calculates the elapsed time in minutes and seconds.

`setInterval(updateVisitTime, 1000)` updates the timer approximately once every second. The display uses the format `Time on site: 00:00`. The timer measures time during the current page visit and resets when the page is reloaded.

### Theme Management

The theme toggle allows the user to switch between light and dark modes.

When a theme is selected, `applyTheme()` adds or removes the `light-mode` class from the body. CSS uses this class to apply the appropriate colors. The button uses an icon and updates its `aria-label` and `aria-pressed` attributes for accessibility.

The selected theme is saved with `localStorage.setItem("theme", newTheme)`. When the page loads, `localStorage.getItem("theme")` retrieves the saved setting and applies it again. If no light theme has been saved, the website defaults to dark mode.

This is the main state management feature of the website.

## Performance Optimization

To improve loading efficiency, I compressed the project images using Squoosh and updated the image files used by the website. The project image elements also use `loading="lazy"` and `decoding="async"` to reduce unnecessary work during page loading when supported by the browser.

The CSS limits image width so images remain responsive, and the JavaScript is kept in a separate file with reusable functions instead of repeating the same logic.

I also used Lighthouse to check the website's performance before making image improvements.

## Testing

I tested the website by:

- Resizing the browser window to check the layout and project images
- Checking the navigation links
- Checking that both compressed project images load and remain readable
- Testing the greeting message based on the time of day
- Testing the `Show Description` and `Hide Description` buttons for both projects
- Checking that each project button only affects its own description
- Submitting the contact form with empty fields, an invalid email address, and valid input
- Checking that the correct form feedback messages appear
- Checking that the current temperature in Dhahran appears in the header
- Observing the visitor timer update while the page is open
- Switching between light and dark modes and checking the text and icon appearance
- Checking the navigation link hover transition
- Using Lighthouse to check page performance
- Checking the browser console for errors
