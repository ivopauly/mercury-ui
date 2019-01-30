import { storiesOf } from '@storybook/angular'

import { HgCardModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Card', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [HgCardModule]
        },
        template: `
        <hg-card>
            Card content
        </hg-card>
        `,
        props: {
        }
    }))
