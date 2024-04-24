export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: any;
  }
  
  export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: any;
  }

  export interface simpleProjectCard{
    title: string;
    description: string;
    currentSlug: string;
    titleImage: any;    
    githubUrl: string;
    website: string;
    tecsImage1: string;
    tecsImage2: string;
    tecsImage3: string;
    tecsImage4: string;
    tecsImage5: string;
    tecsImage6: string;
    photo1: string;
    photo2: string;
    photo3: string;
    photo4: string;
    photo5: string;
    photo6: string;
  }

  export interface fullProject {
    currentSlug: string;
    title: string;
    description: string;
    titleImage: any;
    titleImageUrl: string;
    githubUrl: string;
    website: string;
    tecsImage1: any;
    tecsImage2: any;
    tecsImage3: any;
    tecsImage4: any;
    tecsImage5: any;
    tecsImage6: any;
    content: any;
  }