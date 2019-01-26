import { storiesOf } from '@storybook/angular'

import { ToastModule, ButtonModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Toast', module)
    
    .add('Default', () => ({
        moduleMetadata: {
            imports: [ToastModule, ButtonModule]
        },
        components: [],
        template: `
            <button hg-button (click)="openDialog()">
                Open dialog
            </button>
        `,
        props: {
            openDialog: () => {
                alert('test')
            }
        }
    }))
