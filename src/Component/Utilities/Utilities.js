const getSavedAppliedJobs = () => {
    const savedAppliedJob = localStorage.getItem('savedJobs');
    if (savedAppliedJob) {
        return JSON.parse(savedAppliedJob)
    }
    return [];
}


const saveAppliedJob = id => {
    console.log(id);
    const appliedJobs = getSavedAppliedJobs();
    const exist = appliedJobs.find(jobid => jobid === id);
    if (!exist) {
        appliedJobs.push(id);
        localStorage.setItem('savedJobs', JSON.stringify(appliedJobs))
    }
}

export { getSavedAppliedJobs, saveAppliedJob }