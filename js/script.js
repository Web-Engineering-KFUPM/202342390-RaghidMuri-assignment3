// Get the current hour and display a greeting based on the user's local time
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good morning!";
} else if (hour < 18) {
  greeting.textContent = "Good afternoon!";
} else {
  greeting.textContent = "Good evening!";
}

// Show or hide each project description when the button is clicked
const detailsButtons = document.querySelectorAll(".details-button");

detailsButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const description = button.previousElementSibling;

    if (description.style.display === "block") {
      description.style.display = "none";
      button.textContent = "Show Description";
    } else {
      description.style.display = "block";
      button.textContent = "Hide Description";
    }
  });
});

// Validate the contact form and show feedback to the user
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill in all fields.";
  } else if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
  } else {
    formMessage.textContent = "Message submitted successfully.";
  }
});

// Fetch and display the current temperature from the Open-Meteo weather API
async function loadWeather() {
  const weatherInfo = document.getElementById("weather-info");
  const latitude = 26.3927;
  const longitude = 50.1131;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    weatherInfo.textContent =
      `Current temperature in Dhahran: ${data.current.temperature_2m}\u00B0C`;
  } catch (error) {
    weatherInfo.textContent = "Unable to load weather.";
  }
}

loadWeather();