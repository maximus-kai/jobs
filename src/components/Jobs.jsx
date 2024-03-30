import React from 'react';
import JobListing from './JobListing';
import jobs from './jobs.json';

const Jobs = () => {
  const recentJobs = jobs.slice(0,3)
  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
        recentJobs.map((eachJob,index)=> 
          <JobListing key={eachJob.id} jobs={eachJob}/>
          // <h1>prop test</h1>
          )
        }
        </div>
      </div>
    </section>
    </div>
  )
}

export default Jobs