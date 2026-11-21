# AI Usage Report

## Tools Used & Use Cases

I used GitHub Copilot while working on Assignment 3. The exported Copilot conversation used two models: **MAI Code 2 Flash** and **GPT-6 Luna**. These were both used within **one conversation**, not separate conversations.

I mainly used Copilot for:

- Helping integrate the Open-Meteo weather API and display Dhahran's temperature
- Moving the weather information into the top-right area of the header
- Helping implement a timer showing how long a visitor has stayed on the site
- Adding and explaining light/dark theme switching with `localStorage`
- Investigating weather text colors in light mode
- Improving the theme toggle's appearance, icons, and accessibility attributes
- Explaining JavaScript concepts such as `document.getElementById()`, `fetch()`, and theme switching
- Adjusting image markup, including `loading="lazy"` and `decoding="async"`

For example, I asked Copilot to put the weather information in the header instead of a separate section, then asked it to explain the JavaScript. I also requested changes to the theme toggle so that it used an icon rather than a text label.

## Benefits & Challenges

GitHub Copilot helped me add functionality to my existing portfolio and understand the JavaScript behind it. Its explanations were useful for learning how API requests, DOM updates, timers, and saved theme preferences work.

One challenge was the appearance of the weather text in light mode. I asked Copilot to investigate and adjust the styling so that it would be readable. Another challenge was choosing the appearance of the theme toggle. I requested different icon and border designs to match the portfolio.

I reviewed the suggestions instead of treating the first answer as final. I asked follow-up questions when I did not understand the code or when a change did not produce the appearance I wanted.

## Learning Outcomes

While using Copilot, I learned more about:

- Requesting and displaying external API data using `fetch()` and `async`/`await`
- Handling API failures with `try`/`catch`
- Finding and updating HTML elements using `document.getElementById()` and `textContent`
- Tracking elapsed time with `Date.now()` and `setInterval()`
- Managing and remembering the selected theme with `localStorage`
- Adding and removing CSS classes with `classList.toggle()`
- Using `aria-label` and `aria-pressed` for an icon-based toggle button
- Improving image loading with `loading="lazy"` and `decoding="async"`
- Reviewing AI-generated code and requesting revisions to fit an existing design

I also improved my understanding of how HTML, CSS, and JavaScript work together in a portfolio website.

## Responsible Use & Modifications

I directed Copilot's work through specific requests and reviewed the proposed code and changes.

For the weather feature, I asked for the temperature to appear in the top-right of the header instead of in a separate weather section. For theme management, I requested a remembered light/dark selection and later asked to change the toggle from a text-based button to an icon-based design. When the weather text did not look right in light mode, I asked for further styling changes.

For the project images, I used Squoosh to compress the files separately and used Copilot to help adjust the image markup, including adding lazy-loading and asynchronous-decoding attributes. I also requested an adjustment to the File Integrity Checker image presentation.

Where suggested code met my needs, I did not change it only for the sake of changing it. I reviewed the code and asked questions so I could understand it. I checked the portfolio's appearance and behavior in the browser. Performance testing with Lighthouse was also performed.

## Usage Log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|----|--------------|------|---------|----------------|------------------------------------------|
| C01 | GitHub Copilot (MAI Code 2 Flash; GPT-6 Luna) | 21-11-2026 | One exported conversation covering weather API integration, visitor timer, remembered theme switching, toggle icons, CSS debugging, and image-loading improvements. Related commits: `313969f`, `987231f`, `5cc83db`, `6bac4af`. | `index.html`, `css/styles.css`, `js/script.js` | I read and reviewed the generated code and asked Copilot to explain unfamiliar JavaScript. I changed the weather display from a separate section to the top-right of the header, adjusted the theme toggle to use an icon, and investigated the weather text color in light mode. Where the timer and API logic already met my needs, no further changes were necessary. I opened the portfolio in the browser to review the weather display, timer, theme control, and layout. I compressed the project images with Squoosh, reviewed the updated image markup, and ran Lighthouse to examine performance. Related changes are recorded in the listed commits. |

## Declaration

I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Raghid Muri  
**Student ID:** 202342390  
**Date:** 21-11-2026

## AI-Assisted Commits

The following Assignment 3 commits contain GitHub Copilot-assisted work:

- `313969f` - Added weather API to get weather in Dhahran — GitHub Copilot (MAI Code 2 Flash)
- `987231f` - Added Counter to display how long a person has stayed on the site — GitHub Copilot (MAI Code 2 Flash)
- `5cc83db` - Added feature to remember/switch between modes — GitHub Copilot (MAI Code 2 Flash and GPT-6 Luna)
- `6bac4af` - Changed Images to become compressed & Improved Performance Overall — GitHub Copilot (GPT-6 Luna)

The conversation is recorded as **C01** because it is one exported Copilot chat even though more than one model was used. Each listed commit includes an `Assisted-by` attribution. The original Copilot conversation export should be kept complete and unedited in the AI evidence submitted separately on Blackboard.

The Assignment 2 files were copied into this repository as the starting point for Assignment 3. Their earlier AI usage was documented with Assignment 2.
