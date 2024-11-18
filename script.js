var form = document.getElementById('resume-form');
var nameInput = document.getElementById('name');
var jobTitleInput = document.getElementById('job-title');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var aboutInput = document.getElementById('about');
var experienceInput = document.getElementById('experience');
var educationInput = document.getElementById('education');
var previewName = document.getElementById('preview-name');
var previewJobTitle = document.getElementById('preview-job-title');
var previewEmail = document.getElementById('preview-email');
var previewPhone = document.getElementById('preview-phone');
var previewAbout = document.getElementById('preview-about');
var previewExperience = document.getElementById('preview-experience');
var previewEducation = document.getElementById('preview-education');
var updateResumePreview = function () {
    // Update preview elements with form input values or defaults
    previewName.textContent = nameInput.value || "John Doe";
    previewJobTitle.textContent = jobTitleInput.value || "Software Developer";
    previewEmail.textContent = emailInput.value || "johndoe@example.com";
    previewPhone.textContent = phoneInput.value || "(123) 456-7890";
    previewAbout.textContent = aboutInput.value || "A brief description about yourself...";
    previewExperience.textContent = experienceInput.value || "Describe your work experience...";
    previewEducation.textContent = educationInput.value || "Your educational background...";
    // Log values to the console
    console.log("Name: ", nameInput.value || "John Doe");
    console.log("Job Title: ", jobTitleInput.value || "Software Developer");
    console.log("Email: ", emailInput.value || "johndoe@example.com");
    console.log("Phone: ", phoneInput.value || "(123) 456-7890");
    console.log("About: ", aboutInput.value || "A brief description about yourself...");
    console.log("Experience: ", experienceInput.value || "Describe your work experience...");
    console.log("Education: ", educationInput.value || "Your educational background...");
};
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting
    updateResumePreview(); // Update the preview section and log data to the console
});
