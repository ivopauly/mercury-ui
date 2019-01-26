import { storiesOf } from '@storybook/angular'

import { HgInputModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Input', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [HgInputModule]
        },
        template: `
            <input hg-input [(ngModel)]="text" />
            <span>Text: {{ text }}
        `,
        props: {
            text: ''
        }
    }))
