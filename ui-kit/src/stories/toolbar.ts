import { storiesOf } from '@storybook/angular'

import { ToolbarModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Toolbar', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [ToolbarModule]
        },
        template: `
            <hg-toolbar color="primary">Toolbar</hg-toolbar>
            <hg-toolbar color="secondary">Toolbar</hg-toolbar>
            <hg-toolbar color="accent">Toolbar</hg-toolbar>
        `,
        props: {
        }
    }))
