type link = { title: string; link: string };

type BlogData = {
  title: string;
  authors: Author[];
  lastUpdateDate: string;
  projectImage: string;
  description: string;
  technologies: link[];
  links: link[];
};
