import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './Cards/ExperienceCard';
import { experiences } from './data/constants';
import ActivityCard from './Cards/ActivityCard';
import { activities } from './data/constants';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Smart Dustbin with Node-RED",
      description: "An automated dustbin using Arduino, Node-RED",
      imgUrl: projImg1,
      githubUrl: "https://github.com/RanuriG/Smart-Dustbin-with-IoT-Notifications"
    },
    {
      title: "Web Portfolio",
      description: "Web Desiging CSS, HTML, JS, React",
      imgUrl: projImg2,
      githubUrl: "https://github.com/RanuriG/RanuriG_Portfolio"
    },
    {
      title: "Heart Attack Detection and Health Monitoring System",
      description: "LabVIEW, IOT, ESP32, Arduino",
      imgUrl: projImg3,
      githubUrl: "https://github.com/RanuriG/Health-Monitoring-Using-LabView"
    },
    {
      title: "Smart MediBox",
      description: "IOT, NodeRED, ESP32, Arduino",
      imgUrl: projImg4,
      // githubUrl: "https://github.com/your-username/smart-dustbin-project"
    },
    {
      title: "MealMate Chatbot",
      description: "Dialogflow, Web Development, NLP",
      imgUrl: projImg5,
      githubUrl: "https://github.com/your-username/smart-dustbin-project"
    },
    {
      title: "Sentiment Analysis",
      description: "Machine Learning",
      imgUrl: projImg6,
      githubUrl: "https://github.com/RanuriG/Sentiment_Analysis"
    },
    {
      title: "HomeHub Property Search Web Page",
      description: "HTML/CSS/JS",
      imgUrl: projImg7,
      githubUrl: "https://github.com/RanuriG/Homehub-property"
    },
    {
      title: "PhD Finder Web App",
      description: "LLM/CrewAI/MultiAgent",
      imgUrl: projImg8,
      githubUrl: "https://github.com/RanuriG/phdfinder/tree/phdfinderapp"
    },
    {
      title: "Design of a Testbench - Motor Bike Display",
      description: "Eagle/PCB Designing/ VEGA",
      imgUrl: projImg9,
      // githubUrl: "https://github.com/RanuriG/phdfinder/tree/phdfinderapp"
    },
    {
      title: "Snake Game - C",
      description: "Embedded Design/ Python",
      imgUrl: projImg10,
      // githubUrl: "https://github.com/RanuriG/phdfinder/tree/phdfinderapp"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About Me</h2>
                <p>I am currently in my third year pursuing a BSc (Hons) in Electrical Engineering at the University of Moratuwa, maintaining a GPA of 3.66. Prior to this, I attained strong academic credentials, including 3As in G.C.E A/L (Physical Science stream, 2019) from Devi Balika Vidyalaya and 9As in G.C.E O/L (2016) from Bishop's College.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Extracurricular Activities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="experience-container" id="experience">
                        <div className="wrapper">
                            <div className="timeline-section">
                                <Timeline>
                                    {experiences.map((experience,index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="grey" />
                                                {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#0d6efd' }} />}
                                            </TimelineSeparator>
                                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                <ExperienceCard experience={experience}/>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
                            </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <div className="activity-container" id="activity">
                        <div className="wrapper">
                            <div className="timeline-section">
                                <Timeline>
                                    {activities.map((activity,index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="grey" />
                                                {index !== activities.length - 1 && <TimelineConnector style={{ background: '#0d6efd' }} />}
                                            </TimelineSeparator>
                                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                <ActivityCard activity={activity}/>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
                            </div>
                        </div>
                      </div>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
