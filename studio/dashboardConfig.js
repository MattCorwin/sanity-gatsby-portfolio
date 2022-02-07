export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62006ac2ccb6a1a0b02c780a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-95vkcxv8',
                  apiId: 'c707a0dc-d731-4fea-9535-f4de8d385e39'
                },
                {
                  buildHookId: '62006ac1ccb6a19bfb2c78ff',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mdzmg224',
                  apiId: '8addf4b0-88f3-4205-8b82-26569fd6b02d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MattCorwin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mdzmg224.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
