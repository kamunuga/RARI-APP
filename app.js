document.getElementById("searchBtn").addEventListener("click", searchJobs);

async function searchJobs() {
    const query = document.getElementById("searchInput").value.trim();
    const results = document.getElementById("results");

    if (!query) {
        results.innerHTML = "<p>Please enter a job title or role.</p>";
        return;
    }

    results.innerHTML = "<p>Searching...</p>";

    const API_KEY = "dfb7df1343msh1645796ebe2af2dp1344a0jsn3e38c944c222"; 
    const API_HOST = "jsearch.p.rapidapi.com";

    const options = {
        method: "GET",
        headers: {
            "x-rapidapi-key": API_KEY,
            "x-rapidapi-host": API_HOST,
        },
    };

    try {
        const res = await fetch(
            `https://${API_HOST}/search?query=${encodeURIComponent(query)}`,
            options
        );

        const data = await res.json();
        const jobs = data.data;

        results.innerHTML = "";

        if (!jobs || jobs.length === 0) {
            results.innerHTML = "<p>No opportunities found.</p>";
            return;
        }

        jobs.forEach(job => {
            const box = document.createElement("div");
            box.classList.add("job-card");

            box.innerHTML = `
                <h3>${job.job_title || "Untitled Role"}</h3>
                <p><strong>Company:</strong> ${job.employer_name || "Unknown"}</p>
                <p><strong>Location:</strong> ${job.job_city || "N/A"}, ${job.job_country}</p>
                <p>${job.job_description.slice(0, 200)}...</p>
            `;

            results.appendChild(box);
        });

    } catch (err) {
        console.log(err);
        results.innerHTML = "<p>An error occurred while fetching data.</p>";
    }
}
