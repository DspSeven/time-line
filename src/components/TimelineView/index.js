// Write your code here
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

/*
const TimelineView = props => {
  const {timelineItemsList} = props
  return (
    <div>
      <h1>
        MY JOURNEY OF
        <br />
        CCBP 4.0
      </h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(time => {
          if (time.categoryId === 'COURSE') {
            return <CourseTimelineCard courseDetails={time} />
          }
          return <ProjectTimelineCard projectDetails={time} />
        })}
      </Chrono>
    </div>
  )
}
*/

class TimelineView extends Component {
  state = {
    navigate: false,
  }

  readyToNavigate = () => {
    this.setState({navigate: true})
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1>
          MY JOURNEY OF
          <br />
          CCBP 4.0
        </h1>
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(time => {
            if (time.categoryId === 'COURSE') {
              return <CourseTimelineCard courseDetails={time} />
            }
            return <ProjectTimelineCard projectDetails={time} />
          })}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
