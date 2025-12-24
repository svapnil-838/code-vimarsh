/**
 * home.js
 * Logic for handling navigation and interactions on the Home Page
 */

// 1. Wait for the DOM to be fully loaded before running script
document.addEventListener("DOMContentLoaded", function () {
  
  // Select the main grid container that holds all cards
  const cardGrid = document.querySelector(".grid");

  /**
   * NAVIGATION LOGIC
   * Maps the "data-key" from HTML to specific file paths
   */
  function navigateToPage(key) {
    // Define your routes here
    // You can easily update these paths as you create more files
    const routes = {
      "1": "home.html",      // Home
      "2": "about.html",     // About Us
      "3": "memories.html",  // Memories
      "4": "contact.html",   // Contact
      "5": "reports.html",   // Reports
      "6": "projects.html",  // Projects
      "7": "notifs.html",    // Notifications
      "8": "goals.html"      // Goals
    };

    const targetPath = routes[key];

    // If a valid path exists for the clicked key, navigate to it
    if (targetPath) {
      window.location.href = targetPath;
    } else {
      console.error("No path defined for key: " + key);
      showToast("Page under construction");
    }
  }

  /**
   * EVENT LISTENER
   * Uses Event Delegation to detect clicks on cards
   */
  cardGrid.addEventListener("click", function (event) {
    // Find the closest parent with the class 'card'
    const clickedCard = event.target.closest(".card");

    // If a card was actually clicked
    if (clickedCard) {
      // Get the data-key defined in your home.html
      const key = clickedCard.getAttribute("data-key");
      
      // Execute the navigation function
      navigateToPage(key);
    }
  });

  /**
   * TOAST NOTIFICATION LOGIC
   * Visual feedback for actions
   */
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = message;
      toast.classList.add("show");

      // Hide the toast after 3 seconds
      setTimeout(function () {
        toast.classList.remove("show");
      }, 3000);
    }
  }

});