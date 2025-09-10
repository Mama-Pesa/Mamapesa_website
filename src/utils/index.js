export const handleSectionNavigation = () => {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 45;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Function to handle hash change
  const handleHashChange = () => {
    console.log("Hash changed!"); // Logging statement for debugging
    const hash = window.location.hash.substr(1); // Get the hash without the #
    console.log("Hash:", hash); // Logging statement for debugging
    if (hash) {
      scrollToElement(hash);
    }
  };

  // Log to localStorage
  const logToLocalStorage = (message) => {
    const logs = JSON.parse(localStorage.getItem("sectionNavigationLogs")) || [];
    logs.push(message);
    localStorage.setItem("sectionNavigationLogs", JSON.stringify(logs));
  };

  // Check if DOM is ready
  if (document.readyState === "loading") {
    logToLocalStorage("DOM is not ready yet.");
  } else {
    logToLocalStorage("DOM is ready!");
    // Call handleHashChange if the DOM is already loaded
    handleHashChange();
  }

  // Add event listener for hashchange event
  window.addEventListener("hashchange", handleHashChange);

  // Add event listener for DOMContentLoaded after the page reloads
  window.addEventListener("load", () => {
    document.addEventListener("DOMContentLoaded", () => {
      logToLocalStorage("DOM content loaded.");
      handleHashChange();
    });
  });
};
