document.getElementById('location-filter').addEventListener('change', filterJobs);
document.getElementById('job-type-filter').addEventListener('change', filterJobs);

function filterJobs() {
    const location = document.getElementById('location-filter').value;
    const jobType = document.getElementById('job-type-filter').value;

    const jobs = document.querySelectorAll('.job');
    jobs.forEach(job => {
        const matchesLocation = location === 'all' || job.dataset.location === location;
        const matchesJobType = jobType === 'all' || job.dataset.jobType === jobType;

        if (matchesLocation && matchesJobType) {
            job.style.display = '';
        } else {
            job.style.display = 'none';
        }
    });
}