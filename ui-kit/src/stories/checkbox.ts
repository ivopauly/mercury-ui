import { storiesOf } from '@storybook/angular'

import { HgCheckboxModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Checkbox', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [HgCheckboxModule]
        },
        template: `
            <div style="text-align:center;display:inline-block;width:100px;">
                <hg-checkbox [(ngModel)]="checked1" color="primary"></hg-checkbox>
                checked: {{ checked1 }}
            </div>
                <div style="text-align:center;display:inline-block;width:100px;">
                <hg-checkbox [(ngModel)]="checked2" color="secondary"></hg-checkbox>
                checked: {{ checked2 }}
            </div>
                <div style="text-align:center;display:inline-block;width:100px;">
                <hg-checkbox [(ngModel)]="checked3" color="accent"></hg-checkbox>
                checked: {{ checked3 }}
            </div>
        `,
        props: {
            checked1: true,
            checked2: true,
            checked3: true
        }
    }))
