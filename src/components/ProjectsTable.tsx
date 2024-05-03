interface Projects {
  projectName: string,
  date: string,
  technologies: string,
  description: string,
  url: string

}

const projectsList: Array<Projects>  = [
  {projectName: 'Narakaweb', date: '01/01/2023', technologies: 'NextJS, Supabase', description: 'Project for a video game where I inputted various items and characters into a Supabase database which is then pulled into and displayed in the NextJS frontend. Built queries on supabsae for fuzzy search and built algorithms for sorting on the Heroes Ranking page directly on NextJS', url: 'www.narakaweb.com'}
]

export const ProjectsTable = () => {
  return (
    <div className="table-wrapper">
      <table>
        <thead className="table-header">
          <tr className="">
            <th> Project Name </th>
            <th> Date </th>
            <th> Technologies </th>
            <th> Description</th>
          </tr>
        </thead>
        <tbody>
          {
            projectsList && 
            projectsList.map((project, index)=>{
              return (
                <ProjectsTableRow key={project.projectName + index} title={project.projectName} date={project.date} technologies={project.technologies} description={project.description} url={project.url} />
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

const ProjectsTableRow = ({title, date, technologies, description, url}:{title:string, date:string, technologies:string, description:string, url: string}) => {
  return(
    <tr onClick={()=>{
      console.log('clicked');
      window.open('https://'+url, '_blank');
    }}>
      <th> {title}</th>
      <th>{date}</th>
      <th>{technologies}</th>
      <th style={{
        "maxWidth":"150px"
      }}>
        {description}
      </th>
    </tr>
  )
};
