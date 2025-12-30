# Journal Site

A responsive React + TypeScript site for a journal with pages for Home, Current, Archive, About, Submissions, and Editorial Team.

Run locally:

1. npm install
2. npm run dev

Notes:
- This is a frontend-only scaffold; submission forms are client-side demos.
- Replace placeholder PDFs and images in `public/assets` with real assets.

EmailJS integration
- Set your EmailJS credentials in a `.env` file (see `.env.example`) with the following keys:
  - `VITE_EMAILJS_SERVICE_ID`
  - `VITE_EMAILJS_TEMPLATE_ID`
  - `VITE_EMAILJS_PUBLIC_KEY`
- The Submissions form will use `sendForm` to attach the uploaded PDF and send the form values to your EmailJS template.
- To edit the email content, open your EmailJS template (ID `langsjournal`) and use the variables: `from_name`, `from_email`, `affiliation`, `submission_type`, `title`, `abstract`, and `attachment_name`.
