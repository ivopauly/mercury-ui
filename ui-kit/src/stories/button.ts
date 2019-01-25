import { storiesOf } from '@storybook/angular'
import { action } from '@storybook/addon-actions'

import { ButtonModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Button', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [ButtonModule]
        },
        template: `
        <hg-button (click)="onClick()">Default button</hg-button>
        `,
        props: {
            onClick: action('Clicked')
        }
    }))
    
    .add('Disabled', () => ({
        moduleMetadata: {
            imports: [ButtonModule]
        },
        template: `
            <label>
                <input type="checkbox" [(ngModel)]="disabled" />
                Disable button
            </label>
            <hg-button (click)="onClick()" [disabled]="disabled">Disabled button</hg-button>
        `,
        props: {
            disabled: true,
            onClick: action('Clicked')
        }
    }))

    .add('Rounded', () => ({
        moduleMetadata: {
            imports: [ButtonModule]
        },
        template: `
        <hg-button (click)="onClick()" rounded>Rounded button</hg-button>
        `,
        props: {
            onClick: action('Clicked')
        }
    }))





    