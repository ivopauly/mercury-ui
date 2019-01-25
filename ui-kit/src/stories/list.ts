import { storiesOf } from '@storybook/angular'

import { ListModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury List', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [ListModule]
        },
        template: `
        <hg-list>
            <hg-list-item>Item 1</hg-list-item>
            <hg-list-item>Item 2</hg-list-item>
            <hg-list-item>Item 3</hg-list-item>
        </hg-list>
        `,
        props: {
        }
    }))
