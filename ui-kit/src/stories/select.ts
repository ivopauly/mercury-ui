import { storiesOf } from '@storybook/angular'

import { SelectModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Select', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [SelectModule]
        },
        template: `
            <hg-select>
                <hg-select-item>Item 1</hg-select-item>
                <hg-select-item>Item 2</hg-select-item>
                <hg-select-item>Item 3</hg-select-item>
            </hg-select>
        `,
        props: {
        }
    }))
