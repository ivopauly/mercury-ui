import { storiesOf } from '@storybook/angular'

import { CardModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Card', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [CardModule]
        },
        template: `
        <hg-card>
            Card content
        </hg-card>
        `,
        props: {
        }
    }))
