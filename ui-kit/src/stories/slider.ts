import { storiesOf } from '@storybook/angular'

import { HgSliderModule } from 'projects/ui-components/src/public_api'

storiesOf('Mercury Slider', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [HgSliderModule]
        },
        template: `
            <hg-slider>
            </hg-slider>
        `,
        props: {
        }
    }))
