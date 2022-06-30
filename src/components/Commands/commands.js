/* eslint-disable import/no-anonymous-default-export */
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nmale\n23\ndeputet\nsingledev\n---\n"
            }
        },
        linkedin: {
            description: 'Opens my Twitter Handle.',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/grigori-godole-b933b4aa/', '_blank')
                return "opening twitter handle..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Gr3g03', '_blank')
                return "opening github account..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english         - 70%
                    javascript      - 60%
                    typescript      - 60%
                    reactJs         - 60%
                    reactTs         - 60%
                    html5           - 90%
                    css3            - 80%
                    nodejs          - 40%
                    sql             - 20%
                    java            - 10%
                    kotlin          - 10% - [learning]
                    nextjs          - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    coding           - 80%
                    studying         - 60%
                    overthinking     - 100%
                    social-skills    - 100%
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'Gr3g03'         | 'portfolio'     | 'javascript'
                    'hangman'        | 'hangman game'  |'javascript'
                    'indxd'          | 'clone'         | 'javascript'
                    'wordle'         | 'wordle game'   | 'javascript'\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : Catpuccin\n
                    Font  : Consolas
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/Gr3g03/dap_nft", '_blank')
                return "opening repository..."
            }
        },
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
