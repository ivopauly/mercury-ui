#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

import { promisify } from 'util'

import chalk from 'chalk'

import commander from 'commander'
import inquirer from 'inquirer'
import { paramCase, pascalCase, pascal } from 'change-case'

import handlebars from 'handlebars'

const 
    mkDir = promisify(fs.mkdir),
    readFile = promisify(fs.readFile),
    writeFile = promisify(fs.writeFile)

type types = 'element' | 'page'

const generateElement = async(name: string) => {
    inquirer.prompt([
        {
            type: 'confirm',
            default: true,
            message: 'Use theme?',
            name: 'theming'
        },
        {
            type: 'confirm',
            default: true,
            message: 'Use coloring theme?',
            name: 'coloredComponent'
        }
    ]).then((answers: any) => {
        console.log(chalk.blue('Generating element'))

        const useTheming: boolean = answers.theming

        const cwd = process.cwd()
        const elementDir = path.join(cwd, paramCase(name))

        const model = {
            module: {
                location: `${paramCase(name)}.module`,
                name: `${pascalCase(name)}Module`
            },
            component: {
                location: `${paramCase(name)}`,
                name: pascalCase(name),
                style: `${paramCase(name)}.scss`,
                template: `${paramCase(name)}.html`,
                selector: `${paramCase(name)}`
            },
            theme: {
                location: `${paramCase(name)}-theme.scss`,
                name: paramCase(name)
            },
            coloredComponent: answers.coloredComponent
        }

        fs.stat(elementDir, async (err: NodeJS.ErrnoException, stats: fs.Stats) => {
            if (err && err.errno === 34) {
                return console.error(chalk.red('Directory already exists'))
            } else {
                await mkDir(elementDir)

                await templateFile(
                    path.join(__dirname, 'templates', 'element', 'public_api.ts.hbs'),
                    path.join(elementDir, 'public_api.ts'),
                    model
                )

                await templateFile(
                    path.join(__dirname, 'templates', 'element', 'module.ts.hbs'),
                    path.join(elementDir, `${paramCase(name)}.module.ts`),
                    model
                )

                await templateFile(
                    path.join(__dirname, 'templates', 'element', 'component.ts.hbs'),
                    path.join(elementDir, `${name}.ts`),
                    model
                )

                await templateFile(
                    path.join(__dirname, 'templates', 'element', 'component.html.hbs'),
                    path.join(elementDir, model.component.template),
                    model
                )

                await templateFile (
                    path.join(__dirname, 'templates', 'element', 'component.scss.hbs'),
                    path.join(elementDir, model.component.style),
                    model
                )
                await templateFile(
                    path.join(__dirname, 'templates', 'element', 'readme.md.hbs'),
                    path.join(elementDir, 'readme.md'),
                    model
                )

                if (useTheming) {
                    await templateFile(
                        path.join(__dirname, 'templates', 'element', 'component-theme.scss.hbs'),
                        path.join(elementDir, model.theme.location),
                        model
                    )
                }
            }
        })

    })
}

const templateFile = async(srcFile: string, outFile: string, model: any): Promise<void> => {
    const data = await readFile(srcFile, 'utf8')
    const hbs = handlebars.compile(data)
    const template = hbs(model)

    writeFile(outFile, template)
}

commander
    .name('Mercury toolkit')
    .version('1.0.0')

commander
    .command('generate <type> <name>')
    .alias('g')
    .action((type: types, name: string) => {
        console.log(`Type: ${type}. name: ${name}`)
        switch (type) {
            case 'element':
                generateElement(name)
                break;
            case 'page':
                break;
        }
    })


if (!process.argv.slice(2).length) {
    commander.outputHelp()
    process.exit()
}

commander.parse(process.argv)

// Directory
// index.ts
// public_api.ts
// module.ts
// component.ts
// style.scss
// readme.md
