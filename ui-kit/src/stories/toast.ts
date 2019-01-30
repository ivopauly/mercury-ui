import { storiesOf } from '@storybook/angular'

import { HgToastModule, HgButtonModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Toast', module)
    
    .add('Default', () => ({
        moduleMetadata: {
            imports: [HgToastModule, HgButtonModule]
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
