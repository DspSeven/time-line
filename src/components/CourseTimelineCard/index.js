import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {id, courseTitle, duration, description, tagsList} = courseDetails
  return (
    <div key={id}>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
        <p>{description}</p>
      </div>
      {tagsList.map(tag => (
        <p>{tag.name}</p>
      ))}
    </div>
  )
}
export default CourseTimelineCard
