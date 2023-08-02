interface Link {
  name: string;
  link: string;
}

interface Ext {
  text: string;
  link: string;
}

export interface Work {
  title: string;
  description: string[];
  ext: Ext;
  thumbnail: string;
  tags: string[];
  links: Link[];
  client: string;
  role: string;
  year: string;
}
