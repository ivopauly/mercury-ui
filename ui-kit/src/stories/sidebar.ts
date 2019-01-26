import { storiesOf } from '@storybook/angular'

import { SidebarModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Sidebar', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [SidebarModule]
        },
        template: `
            <hg-sidebar>
            </hg-sidebar>
        `,
        props: {
        }
    }))
