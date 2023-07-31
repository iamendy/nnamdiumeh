interface Link {
  name: string;
  link: string;
}

export interface Work {
  title: string;
  description: string[];
  thumbnail: string;
  tags: string[];
  links: Link[];
  client: string;
  role: string;
  year: string;
}
