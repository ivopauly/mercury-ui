import { storiesOf } from '@storybook/angular'

import { HgSidebarModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Sidebar', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [HgSidebarModule]
        },
        template: `
            <hg-sidebar>
            </hg-sidebar>
        `,
        props: {
        }
    }))
