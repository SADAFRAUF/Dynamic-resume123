const form = document.getElementById('resume-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const jobTitleInput = document.getElementById('job-title') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const aboutInput = document.getElementById('about') as HTMLTextAreaElement;
const experienceInput = document.getElementById('experience') as HTMLTextAreaElement;
const educationInput = document.getElementById('education') as HTMLTextAreaElement;

const previewName = document.getElementById('preview-name') as HTMLHeadingElement;
const previewJobTitle = document.getElementById('preview-job-title') as HTMLParagraphElement;
const previewEmail = document.getElementById('preview-email') as HTMLParagraphElement;
const previewPhone = document.getElementById('preview-phone') as HTMLParagraphElement;
const previewAbout = document.getElementById('preview-about') as HTMLParagraphElement;
const previewExperience = document.getElementById('preview-experience') as HTMLParagraphElement;
const previewEducation = document.getElementById('preview-education') as HTMLParagraphElement;

const updateResumePreview = (): void => {
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
form.addEventListener('submit', (event: Event): void => {
  event.preventDefault(); // Prevent form from submitting
  updateResumePreview();  // Update the preview section and log data to the console
});
