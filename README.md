# Raghid Muri Portfolio - Assignment 3

## Project Description

This project is my personal portfolio website, built using HTML, CSS, and JavaScript. The goal is to make the website interactive and add more advanced functionality while keeping the design simple and organized.

The website includes an About Me section, a Projects section, and a Contact section. It also displays the current temperature in Dhahran using a weather API, tracks the time a visitor has spent on the page, and lets visitors switch between light and dark modes.

## Features

- About Me section
- Two projects with images
- Show and hide project descriptions using JavaScript
- Contact form with input validation
- Error message when required fields are empty
- Error message when the email address is invalid
- Success message when the form is filled correctly
- Greeting message that changes based on the time of day
- Current temperature in Dhahran fetched from the Open-Meteo API
- User-friendly message if the weather request fails
- Visitor timer that updates every second
- Light and dark mode toggle with the selected theme saved using `localStorage`
- Icon-based theme toggle with accessibility labels
- Smooth hover transition on navigation links
- Responsive layout using Flexbox
- Compressed project images and lazy loading to improve performance

## Technologies Used

- HTML
- CSS
- JavaScript
- Open-Meteo API
- Browser `localStorage`
- Git
- GitHub

## Setup Instructions

To run the project locally:

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.

No extra packages or backend are required. An internet connection is needed to retrieve live weather data from Open-Meteo. For local development and performance testing, the website can also be served through a local HTTP server, such as `python3 -m http.server 8000`, and opened at `http://localhost:8000`.

## AI Usage

I used GitHub Copilot as a support tool while developing the advanced features of my portfolio. The Copilot conversation used the MAI Code 2 Flash and GPT-6 Luna models. It helped with the weather API integration, visitor timer, theme management, icon improvements, debugging, and performance-related changes.

I reviewed the generated suggestions, made design decisions to keep the features consistent with my portfolio, and checked the website's behavior in the browser. More information about the AI usage, learning outcomes, and related commits is available in:

`docs/ai-usage-report.md`

## How to Use

- Use the navigation links to move between the About, Projects, and Contact sections.
- View the current temperature in Dhahran near the top of the page. If the API request fails, an error message appears instead.
- View the timer to see how long the page has been open during the current visit.
- Click the theme icon to switch between light and dark modes. The selected theme is remembered after refreshing the page.
- Click `Show Description` under a project to display its description.
- Click `Hide Description` to hide the description again.
- Fill in the contact form and press `Send`.
- If a field is empty, an error message will appear.
- If the email address is invalid, the website will ask for a valid email address.
- If the form is filled correctly, a success message will appear.

## Project Structure

```text
.
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```
