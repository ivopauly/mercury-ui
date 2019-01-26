# Mercury UI Components

### Storybook
Run `npm run storybook` for debugging sandboxed Angular Elements. Navigate to `http://localhost:9001/`. The storybook will be automatically updated when chaning any of the source files.

### Documentation
Run `npm run compodoc` for live documentation. Navigate to `http://localhost:8080/`. The documentation will be automatically updated when changing any of the source files.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Creating new Elements
To create a new Angular Element, cd into the projects/ui-components/src directory. In here, run `toolkit generate element [element-name] to scaffold a new Angular Element. Once generated, add the public_api to projects/ui-components/src/public_api.ts.

```ts
export * from './[element-name]/public_api'
```

In src/stories, add a new ts file to develop the Element in a sandboxed environment.

[element-name].ts
```ts
import { storiesOf } from '@storybook/angular'

import { ... } from 'projects/ui-components/src/public_api'

storiesOf('Mercury [element]', module)
    .add('Default', () => ({
        moduleMetadata: {
            imports: [
                ...
            ]
        },
        template: `
            ...
        `,
        props: {
        }
    }))
```

Add the story to the index.ts file in src/stories and the Storybook will be live reloaded.


### Elements
| Element               | Status    |
| ----------------------|-----------|
| Button                | WIP       |
| Card                  | WIP       |
| Checkbox              | WIP       |
| Input                 | WIP       |
| List                  | WIP       |
| Select                | WIP       |
| Sidenav               | WIP       |
| Slider                | WIP       |
| Toolbar               | WIP       |
| Typograpy             | TBD       |
| Common styling        | TBD       |

### Other projects
| Name                  | Status    |
|-----------------------|-----------|
| Example project       | TBD       |
| Online documentation  | TBD       |


#### Questions
Feel free to email me [at] Pascal.Wilbrink@gmail.com if you have any questions.

### License

License
----

Apache 2.0
