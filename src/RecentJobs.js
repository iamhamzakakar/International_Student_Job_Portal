import React from 'react';

function RecentJobs() {
    return (
        <section className="recent-jobs">
            <h2>Recent Listed Jobs</h2>
            <div className="jobs-grid">
                <div className="job-card">
                    <h3>Job Title 1</h3>
                    <p>Company Name</p>
                    <p>Location</p>
                    <p>Brief Job Description</p>
                </div>
                <div className="job-card">
                    <h3>Job Title 2</h3>
                    <p>Company Name</p>
                    <p>Location</p>
                    <p>Brief Job Description</p>
                </div>
                <div className="job-card">
                    <h3>Job Title 3</h3>
                    <p>Company Name</p>
                    <p>Location</p>
                    <p>Brief Job Description</p>
                </div>
                <div className="job-card">
                    <h3>Job Title 4</h3>
                    <p>Company Name</p>
                    <p>Location</p>
                    <p>Brief Job Description</p>
                </div>
            </div>
        </section>
    );
}

export default RecentJobs;
