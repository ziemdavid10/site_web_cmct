import "./Projects.scss";

const items = [
  {
    id:1,
    title: "Project 1",
    img:"",
    video:"",
    description: "Description of Project 1.",
  },
  {
    id:2,
    title: "Project 2",
    img:"",
    video:"",
    description: "Description of Project 2.",
  },
  {
    id:3,
    title: "Project 3",
    img:"",
    video:"",
    description: "Description of Project 3.",
  },
  {
    id:4,
    title: "Project 4",
    img:"",
    video:"",
    description: "Description of Project 4.",
  },
  {
    id:5,
    title: "Project 5",
    img:"",
    video:"",
    description: "Description of Project 5.",
  },
  {
    id:6,
    title: "Project 6",
    img:"",
    video:"",
    description: "Description of Project 6.",
  },
  {
    id:7,
    title: "Project 7",
    img:"",
    video:"",
    description: "Description of Project 7.",
  },
];

const Single = ({item}) => {
//   return <section>
//     <h3>{item.title}</h3>
//     <p>{item.description}</p>
//   </section>;
}
const Projects = () => {
  return <div className="projects">
    <h2>Projects Component</h2>
    {items.map((item) => (
      <Single item={item} key={item.id} />
    ))}
  </div>;
};

export default Projects;