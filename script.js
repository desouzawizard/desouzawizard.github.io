function showContent(id) {
        // Hide all content sections
        document
          .querySelectorAll(".content")
          .forEach((div) => div.classList.remove("active"))
        // Show the selected content section
        document.getElementById(id).classList.add("active")
      }
      function toggleFAQ(item) {
        item.classList.toggle("active")
      }

      function submitFeedback() {
        alert("Thank you for your feedback!")
      }
      function toggleDetails(id) {
        var element = document.getElementById(id)
        element.style.display =
          element.style.display === "none" ? "block" : "none"
      }
