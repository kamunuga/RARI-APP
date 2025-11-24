RARI OPPORTUNITIES FINDER

This project is a web-based job search application that uses the JSearch API to allow users to search for job listings by title or keyword. The app is deployed across two web servers and load-balanced using AWS to ensure redundancy, performance, and scalability.

 Project Structure

RARI-APP/
├── index.html
├── style.css
├── app.js
├── .env         (NOT included in GitHub for security)
└── README.md


 Features

 Search for jobs in real time via the JSearch API
 Fast client-side interface
 Fully deployed on two AWS EC2 instances
Traffic balanced using AWS Load Balancer


| Category      | Tool                      |
| ------------- | ------------------------- |
| Frontend      | HTML, CSS, JavaScript     |
| API           | JSearch API               |
| Deployment    | SCP, Nginx, AWS           |
| Load Balancer | AWS Elastic Load Balancer |

 API Attribution

This project uses the JSearch API.
API Provider Credit: JSearch / API Provider

 Local Setup Instructions


access my git folder by cloning : git clone https://github.com/kamunuga/RARI-APP.git
My oject requires an API key to access the JSearch API and
i created a .env file in the project root and added:

API_KEY=my_jsearch_api_key
Open index.html in a browser to run.


 Deployment Overview

Your deployment consists of three servers:

Web01 → serves the static website

Web02 → serves the static website

Load Balancer (LB01) → distributes traffic between Web01 & Web02

This ensures:

Higher availability (if one server fails, the other still works)

Load distribution (better performance)

Scalability


load Balancer Configuration

A load balancer was set up using AWS to distribute traffic evenly across both servers.

Configuration details

| Setting           | Value                     |
| ----------------- | ------------------------- |
| Listener          | HTTP (Port 80)            |
| Target Group      | Two web servers           |
| Balancing Method  | AWS default               |


The load balancer continuously checks server health and routes traffic only to healthy servers.

 Important Files
| File           | Description                                  |
| -------------- | -------------------------------------------- |
| `index.html`   | Main application UI                          |
| `app.js`       | Handles API calls and rendering logic        |
| `.env`         | for storing API key securely                 |


  Testing the Load Balancer

open browser: http://54.211.78.253 

Challenges faced and how I overcame them
I was geting a package-lock.json in my files among my other files (index.html, style.css, app.js, .gitignore)
The issue came from uploading the wrong folder using SCP. I reuploaded the correct folder, cleaned old directories, and fixed the structure.


 Future Improvements

Enable HTTPS with AWS Certificate Manager

Add job filters (salary, experience level, location)

Add job saving/favorites system

Improve UI responsiveness and accessibility

Demo video: https://youtu.be/AD-0EPtsvvs

 Author

GAEL MPARAYE


