export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title of project article',
      },
      {
        name: 'description',
        type: 'string',
        title: 'Description of project article',
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Slug of your project article',
        options: {
          source: 'title',
        },
      },
      {
        name: 'titleImage',
        type: 'image',
        title: 'Title Image',
      },
      {
        name: 'githubUrl',
        type: 'string',
        title: 'github Url',
      },
      {
        name: 'website',
        type: 'string',
        title: 'website url',
      },
      {
        name: 'tecsImage1',
        type: 'image',
        title: 'tec Logo',
      },
      {
        name: 'tecsImage2',
        type: 'image',
        title: 'tec Logo',
      },
      {
        name: 'tecsImage3',
        type: 'image',
        title: 'tec Logo',
      },
      {
        name: 'tecsImage4',
        type: 'image',
        title: 'tec Logo',
      },
      {
        name: 'tecsImage5',
        type: 'image',
        title: 'tec Logo',
      },
      {
        name: 'tecsImage6',
        type: 'image',
        title: 'tec Logo',
      },
      {
        name: 'photo1',
        type: 'image',
        title: 'Website Image',
      },
      {
        name: 'photo2',
        type: 'image',
        title: 'Website Image',
      },
      {
        name: 'photo3',
        type: 'image',
        title: 'Website Image',
      },
      {
        name: 'photo4',
        type: 'image',
        title: 'Website Image',
      },
      {
        name: 'photo5',
        type: 'image',
        title: 'Website Image',
      },
      {
        name: 'photo6',
        type: 'image',
        title: 'Website Image',
      },      
      {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [
          {
            type: 'block',
          },
        ],
      },
    ],
  }