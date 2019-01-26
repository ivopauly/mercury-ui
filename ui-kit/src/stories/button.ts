import { storiesOf, moduleMetadata } from '@storybook/angular'
import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import { HgButtonModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Button', module)
    .addDecorator(
        moduleMetadata({
            imports: [HgButtonModule]
        })
    )
    .addDecorator(withKnobs)
    .addDecorator(withNotes)
    .add('Default', () => ({
        template: `
            <button hg-button color="primary" (click)="onClick()">Default button</button>
            <button hg-button color="secondary" (click)="onClick()">Secondary button</button>
            <button hg-button color="accent" (click)="onClick()">Accent button</button>
        `,
        props: {
            onClick: action('Clicked')
        }
    }), {
        notes: 'ABC'
    })
    
    .add('Disabled', () => ({
        template: `
            <button hg-button (click)="onClick()" color="primary" [disabled]="disabled">Primary button</button>
            <button hg-button (click)="onClick()" color="secondary" [disabled]="disabled">Secondary button</button>
            <button hg-button (click)="onClick()" color="accent" [disabled]="disabled">Accent button</button>
        `,
        props: {
            disabled: boolean('Disabled', true),
            onClick: action('Clicked',)
        }
    }))

    .add('Rounded', () => ({
        template: `
        <button hg-button color="primary" (click)="onClick()" rounded>Primary button</button>
        <button hg-button color="secondary" (click)="onClick()" rounded>Secondary button</button>
        <button hg-button color="accent" (click)="onClick()" rounded>Accent button</button>
        `,
        props: {
            onClick: action('Clicked')
        }
    }))





    