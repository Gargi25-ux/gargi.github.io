function giveFeedback() {
  const feedback = prompt("Please enter your feedback:");
  if (feedback) {
    alert("Thanks for your feedback!");
    console.log("User Feedback:", feedback);
  } else {
    alert("No feedback provided.");
  }
}
