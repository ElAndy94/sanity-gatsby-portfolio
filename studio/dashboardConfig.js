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
                  buildHookId: '5d4a89f85ea317144d944e60',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-rqusg5rv',
                  apiId: '34421a99-f59d-4f9a-8133-37c9b4d73d83'
                },
                {
                  buildHookId: '5d4a89f992c6aba250bd2e34',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2fnf7ip6',
                  apiId: '2e395c30-c946-4887-a0d0-d010f05affe1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ElAndy94/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2fnf7ip6.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
