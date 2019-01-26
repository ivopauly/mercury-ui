import { storiesOf } from '@storybook/angular'
import { action } from '@storybook/addon-actions'

import { ButtonModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Button', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [ButtonModule]
        },
        template: `
            <button hg-button color="primary" (click)="onClick()">Default button</button>
            <button hg-button color="secondary" (click)="onClick()">Secondary button</button>
            <button hg-button color="accent" (click)="onClick()">Accent button</button>
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
            <button hg-button (click)="onClick()" color="primary" [disabled]="disabled">Primary button</button>
            <button hg-button (click)="onClick()" color="secondary" [disabled]="disabled">Secondary button</button>
            <button hg-button (click)="onClick()" color="accent" [disabled]="disabled">Accent button</button>
            <label>
                Disable buttons
                <input type="checkbox" [(ngModel)]="disabled" />
            </label>
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
        <button hg-button color="primary" (click)="onClick()" rounded>Primary button</button>
        <button hg-button color="secondary" (click)="onClick()" rounded>Secondary button</button>
        <button hg-button color="accent" (click)="onClick()" rounded>Accent button</button>
        `,
        props: {
            onClick: action('Clicked')
        }
    }))





    