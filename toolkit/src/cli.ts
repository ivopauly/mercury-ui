#!/usr/bin/env node

import fs from 'fs'
import path from 'path'

import { promisify } from 'util'

import chalk from 'chalk'

import commander from 'commander'

import { paramCase, pascalCase } from 'change-case'

import handlebars from 'handlebars'

const 
    stat = promisify(fs.stat),
    mkDir = promisify(fs.mkdir),
    readDir = promisify(fs.readdir),
    readFile = promisify(fs.readFile),
    writeFile = promisify(fs.writeFile)

type types = 'element' | 'page'

const generateElement = async(name: string) => {
    console.log(chalk.blue('Generating element'))

    const cwd = process.cwd()
    const elementDir = path.join(cwd, paramCase(name))

    fs.stat(elementDir, async (err: NodeJS.ErrnoException, stats: fs.Stats) => {
        if (err && err.errno === 34) {
            return console.error(chalk.red('Directory already exists'))
        } else {
            await mkDir(elementDir)

            await templateFile(
                path.join(__dirname, 'templates', 'element', 'index.ts.hbs'),
                path.join(elementDir, 'index.ts'),
                {}
            )

            await templateFile(
                path.join(__dirname, 'templates', 'element', 'public_api.ts.hbs'),
                path.join(elementDir, 'public_api.ts'),
                {
                    moduleName: `${paramCase(name)}.module`,
                    componentName: `${paramCase(name)}`
                }
            )

            await templateFile(
                path.join(__dirname, 'templates', 'element', 'module.ts.hbs'),
                path.join(elementDir, `${paramCase(name)}.module.ts`),
                {
                    componentName: pascalCase(name),
                    componentClass: paramCase(name),
                    moduleName: `${pascalCase(name)}Module`
                }
            )

            await templateFile(
                path.join(__dirname, 'templates', 'element', 'component.ts.hbs'),
                path.join(elementDir, `${name}.ts`),
                {
                    componentName: `${pascalCase(name)}`,
                    componentSelector: `${paramCase(name)}`,
                    componentStyle: `${paramCase(name)}.scss`,
                    componentTemplate: `${paramCase(name)}.html`   
                }
            )

            await templateFile(
                path.join(__dirname, 'templates', 'element', 'readme.md.hbs'),
                path.join(elementDir, 'readme.md'),
                {}
            )
        }
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
