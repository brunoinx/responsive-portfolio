import Project1 from '../assets/img/project-img1.png';
import Project2 from '../assets/img/project-img2.png';
import Project3 from '../assets/img/project-img3.png';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  img: string;
}

export const projects: ProjectProps[] = [
  {
    id: '0',
    title: 'Business Startup',
    description: 'Design and Development',
    img: Project1,
  },
  {
    id: '1',
    title: 'Business Startup',
    description: 'Design and Development',
    img: Project2,
  },
  {
    id: '2',
    title: 'Business Startup',
    description: 'Design and Development',
    img: Project3,
  },
  {
    id: '3',
    title: 'Business Startup',
    description: 'Design and Development',
    img: Project1,
  },
  {
    id: '4',
    title: 'Business Startup',
    description: 'Design and Development',
    img: Project2,
  },
  {
    id: '5',
    title: 'Business Startup',
    description: 'Design and Development',
    img: Project3,
  },
];
