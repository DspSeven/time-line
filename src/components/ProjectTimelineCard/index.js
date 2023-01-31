// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    duration,
    description,
    projectUrl,
  } = projectDetails
  console.log(projectDetails)
  return (
    <div>
      <img src={imageUrl} alt={projectTitle} height={100} width={100} />
      <div>
        <h1>{projectTitle}</h1>
        <div>
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
        <p>{description}</p>
        <button type="button" href={projectUrl} target="_blank">
          Visit
        </button>
      </div>
    </div>
  )
}
export default ProjectTimelineCard
