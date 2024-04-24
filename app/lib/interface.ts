export interface simpleBlogCard {
    title: string;
    smallDescription: string;
    currentSlug: string;
    titleImage: string;
  }
  
  export interface fullBlog {
    currentSlug: string;
    title: string;
    content: any;
    titleImage: string;
  }

  export interface simpleProjectCard{
    title: string;
    description: string;
    currentSlug: string;
    titleImage: any;    
    githubUrl: string;
    website: string;
    tecsImage1: any;
    tecsImage2: any;
    tecsImage3: any;
    tecsImage4: any;
    tecsImage5: any;
    tecsImage6: any;
    photo1: any;
    photo2: any;
    photo3: any;
    photo4: any;
    photo5: any;
    photo6: any;
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