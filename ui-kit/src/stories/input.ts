import { storiesOf } from '@storybook/angular'

import { InputModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Input', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [InputModule]
        },
        template: `
            <input hg-input [(ngModel)]="text" />
            <span>Text: {{ text }}
        `,
        props: {
            text: ''
        }
    }))
