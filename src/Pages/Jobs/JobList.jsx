import BtnGreen from "../../comp/Btn/BtnGreen";
import JobsCard from "../../comp/Jobs/JobsCard";
import "./JobList.scss";

function JobList() {
  return (
    <div className="jobList">
      <h1>Latest Jobs</h1>
      <div className="jobList-item">
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
        <JobsCard />
      </div>
      <BtnGreen text="Browse All Jobs" />
    </div>
  );
}

export default JobList;
