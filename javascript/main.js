$(document).ready(function () {
    // Simulate a loading screen
    setTimeout(function () {
        $('#loader').fadeOut();
    }, 2000); // Loader disappears after 2 seconds
  
    // Handle quiz form submission
    $('#quiz-form').on('submit', function (e) {
      e.preventDefault();
  
      const submitButton = $('#submit-btn'); // Get the submit button
      const originalText = submitButton.text(); // Save original button text
  
      // Change the button text to "Submitting..."
      submitButton.text('Submitting...').prop('disabled', true);
  
      setTimeout(function () {
        // Collect responses after a simulated delay
        const responses = {
          debt: $('#debt').val(),
          income: $('#income').val(),
          email: $('#email').val(),
        };
  
        // Log responses to the console
        console.log("quiz data", responses);
  
        // Reset the button text and state
        submitButton.text(originalText).prop('disabled', false);
  
        // Show the congratulations section
        $('#quiz-section').hide();
        $('#congrats-section').fadeIn();
      }, 2000); // Simulate a 2-second delay
    });
      // Handle "Back to Quiz" button click
    $('#back-to-quiz').on('click', function () {
        $('#congrats-section').hide(); // Hide the congratulations section
        $('#quiz-section').fadeIn();  // Show the quiz section
        $('#quiz-form')[0].reset();   // Reset the form for a new attempt
    });
  });
  