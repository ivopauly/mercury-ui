#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var util_1 = require("util");
var chalk_1 = __importDefault(require("chalk"));
var commander_1 = __importDefault(require("commander"));
var inquirer_1 = __importDefault(require("inquirer"));
var change_case_1 = require("change-case");
var handlebars_1 = __importDefault(require("handlebars"));
var mkDir = util_1.promisify(fs_1.default.mkdir), readFile = util_1.promisify(fs_1.default.readFile), writeFile = util_1.promisify(fs_1.default.writeFile);
var generateElement = function (name) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        inquirer_1.default.prompt([
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
        ]).then(function (answers) {
            console.log(chalk_1.default.blue('Generating element'));
            var useTheming = answers.theming;
            var cwd = process.cwd();
            var elementDir = path_1.default.join(cwd, change_case_1.paramCase(name));
            var model = {
                module: {
                    location: change_case_1.paramCase(name) + ".module",
                    name: change_case_1.pascalCase(name) + "Module"
                },
                component: {
                    location: "" + change_case_1.paramCase(name),
                    name: change_case_1.pascalCase(name),
                    style: change_case_1.paramCase(name) + ".scss",
                    template: change_case_1.paramCase(name) + ".html",
                    selector: "" + change_case_1.paramCase(name)
                },
                theme: {
                    location: change_case_1.paramCase(name) + "-theme.scss",
                    name: change_case_1.paramCase(name)
                },
                coloredComponent: answers.coloredComponent
            };
            fs_1.default.stat(elementDir, function (err, stats) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(err && err.errno === 34)) return [3 /*break*/, 1];
                            return [2 /*return*/, console.error(chalk_1.default.red('Directory already exists'))];
                        case 1: return [4 /*yield*/, mkDir(elementDir)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'public_api.ts.hbs'), path_1.default.join(elementDir, 'public_api.ts'), model)];
                        case 3:
                            _a.sent();
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'module.ts.hbs'), path_1.default.join(elementDir, change_case_1.paramCase(name) + ".module.ts"), model)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'component.ts.hbs'), path_1.default.join(elementDir, name + ".ts"), model)];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'component.html.hbs'), path_1.default.join(elementDir, model.component.template), model)];
                        case 6:
                            _a.sent();
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'component.scss.hbs'), path_1.default.join(elementDir, model.component.style), model)];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'readme.md.hbs'), path_1.default.join(elementDir, 'readme.md'), model)];
                        case 8:
                            _a.sent();
                            if (!useTheming) return [3 /*break*/, 10];
                            return [4 /*yield*/, templateFile(path_1.default.join(__dirname, 'templates', 'element', 'component-theme.scss.hbs'), path_1.default.join(elementDir, model.theme.location), model)];
                        case 9:
                            _a.sent();
                            _a.label = 10;
                        case 10: return [2 /*return*/];
                    }
                });
            }); });
        });
        return [2 /*return*/];
    });
}); };
var templateFile = function (srcFile, outFile, model) { return __awaiter(_this, void 0, void 0, function () {
    var data, hbs, template;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readFile(srcFile, 'utf8')];
            case 1:
                data = _a.sent();
                hbs = handlebars_1.default.compile(data);
                template = hbs(model);
                writeFile(outFile, template);
                return [2 /*return*/];
        }
    });
}); };
commander_1.default
    .name('Mercury toolkit')
    .version('1.0.0');
commander_1.default
    .command('generate <type> <name>')
    .alias('g')
    .action(function (type, name) {
    console.log("Type: " + type + ". name: " + name);
    switch (type) {
        case 'element':
            generateElement(name);
            break;
        case 'page':
            break;
    }
});
if (!process.argv.slice(2).length) {
    commander_1.default.outputHelp();
    process.exit();
}
commander_1.default.parse(process.argv);
// Directory
// index.ts
// public_api.ts
// module.ts
// component.ts
// style.scss
// readme.md
