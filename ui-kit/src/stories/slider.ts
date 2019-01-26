import { storiesOf } from '@storybook/angular'

import { SliderModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Slider', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [SliderModule]
        },
        template: `
            <hg-slider>
            </hg-slider>
        `,
        props: {
        }
    }))
