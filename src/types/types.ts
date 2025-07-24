export interface postSections {
  sectionDescription: string;
  sectionImage: string;
}

export interface BlogContent {
  _id: string;
  category: string;
  numberOfShares: number;
  numberOfViews: number;
  postHeading: string;
  postTitle: string;
  postAuthor: string;
  publishedAt: string;
  mainImage: string;
  sections: postSections[];
}

export interface RelatedBlog {
  id: string;
  title: string;
  thumbnail: string;
}

export interface Ad {
  id: string;
  image: string;
  url: string;
  alt: string;
}
