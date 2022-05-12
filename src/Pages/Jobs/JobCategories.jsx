import JobsCatoCard from "../../comp/Jobs/JobsCatoCard";
import "./JobCategories.scss";

function JobCategories() {
  return (
    <div className="jobCato">
      <div className="jobCato-head">
        <h2>Job Categories</h2>
        <p>
          Lorem Ipsum is simply dummy text printing and type setting industry
          Lorem Ipsum been industry standard dummy text ever since when unknown
          printer took a galley.
        </p>
      </div>
      <div className="jobCato-elems">
        <JobsCatoCard />
        <JobsCatoCard />
        <JobsCatoCard />
        <JobsCatoCard />
        <JobsCatoCard />
        <JobsCatoCard />
        <JobsCatoCard />
        <JobsCatoCard />
      </div>
    </div>
  );
}

export default JobCategories;
