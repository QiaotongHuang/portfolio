import React from 'react';
import './experience.css';

const Experience = () => {
  const timelineData = [
    {
      type: "experience",
      title: "Software Engineer",
      institution: "TechArena Canada, Toronto, ON",
      date: "May 2024 – Present",
      start: new Date(2024, 4), // May 2024
      end: new Date(2024, 11), // Ongoing
    },
    {
      type: "experience",
      title: "Teaching Assistant",
      institution: "Northeastern University, Toronto, ON",
      date: "Jan 2024 – Apr 2024",
      start: new Date(2024, 0), // January 2024
      end: new Date(2024, 3), // April 2024
    },
    {
      type: "experience",
      title: "Software Engineer",
      institution: "Meix Fintech, Shanghai, China",
      date: "Sep 2021 – Dec 2022",
      start: new Date(2021, 8), // September 2021
      end: new Date(2022, 11), // December 2022
    },
    {
      type: "experience",
      title: "Software Engineer",
      institution: "Meituan Financial, Shanghai, China",
      date: "Jul 2020 – Aug 2021",
      start: new Date(2020, 6), // July 2020
      end: new Date(2021, 7), // August 2021
    },
    {
      type: "education",
      title: "Master of Science in Information Systems",
      institution: "Northeastern University, Toronto, ON",
      date: "Sep 2022 – Apr 2024",
      start: new Date(2022, 8), // September 2022
      end: new Date(2024, 3), // April 2024
    }
  ];

  // Calculate total duration in months
  const timelineStart = new Date(2020, 6); // Start of the first item (July 2020)
  const timelineEnd = new Date(2024, 11); // End of the last item (December 2024)
  const totalDuration = (timelineEnd.getFullYear() - timelineStart.getFullYear()) * 12 +
                        (timelineEnd.getMonth() - timelineStart.getMonth());

  // Calculate each item's duration and position
  const normalizedTimeline = timelineData.map(item => {
    const endOffset = (item.end.getFullYear() - timelineStart.getFullYear()) * 12 +
                     (item.end.getMonth() - timelineStart.getMonth());
    const startOffset = (item.start.getFullYear() - timelineStart.getFullYear()) * 12 +
                        (item.start.getMonth() - timelineStart.getMonth());
    return { ...item, endOffset, startOffset };
  });

  const experienceItems = normalizedTimeline.filter(item => item.type === "experience");
  const educationItems = normalizedTimeline.filter(item => item.type === "education");

  return (
    <section id='experience'>
      <h2>Experience</h2>
      <div className="experience-container">
        <div className="timeline">
          <div className="center timeline-line"></div>
          <div className="leftside">
          {experienceItems.map((item, index) => (
            <div
              key={index}
              className={"timeline-card experience"}
              style={{
                height: `${((item.endOffset - item.startOffset) / totalDuration) * 100}%`, // Proportional height
                bottom: `${(item.startOffset / totalDuration) * 100}%` // Position based on start time
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.institution}</p>
              <span className="date">{item.date}</span>
              <div className="tooltip">{item.date}</div>
            </div>
          ))}
          </div>
          <div className="rightside">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-card education`}
              style={{
                height: `${((item.endOffset - item.startOffset) / totalDuration) * 100}%`, // Proportional height
                bottom: `${(item.startOffset / totalDuration) * 100}%` // Position based on start time
              }}
            >
              <h4>{item.title}</h4>
              <p>{item.institution}</p>
              <span className="date">{item.date}</span>
              <div className="tooltip">{item.date}</div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
