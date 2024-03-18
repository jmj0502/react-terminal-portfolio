import ShellLink from "../components/ShellLink";

export const terminalCommands = {
    // Todo implement clear xdxd.
    help: () => ({
      about: 'About Jorge', 
      resume: 'Opens Jorge\s Resume',
      projects: 'Lists the projects Jorge has worked and is currently working on' ,
      technologies: 'List the technologies Jorge is passionate about',
      contact: "Displays Jorge's contact information",
    }),
    resume: () => '',
    about: () => (<>
    A motivated and proactive guy (he/him), who loves team work, coffee, learning and music. With <strong>3+ years of experience</strong> working as <strong>backend developer</strong>, experiencing the whole software development life-cycle (SDLC) and making significant contributions aimed at improving the daily operations of multiple companies. Passionate about software development as a whole, with high interest in <strong>low-level programming</strong>, <strong>programming language design and implementation</strong>, and <strong>backend development</strong>.<br/><br/>

    Holds a bachelor's degree in Industrial Engineering and is extremely curious about both tech related and non-tech related topics. Currently working at <ShellLink href='https://3mit.dev'>3MIT</ShellLink>/<ShellLink href='https://posmit.app'>Posmit</ShellLink> and EX-<ShellLink href='https://yummysuperapp.com'>Yummy (YCS21)</ShellLink> collaborator (from 10/2020 to 03/2023). Always looking for new opportunities to grow and face interesting challenges.
    </>)
    ,
    contact: () => ({
      github: {username: 'jmj0502', url: 'https://github.com/jmj0502'},
      gitlab: {username: 'jmj0502', url: 'https://gitlab.com/jmj0502'},
      linkedin: {username: 'Jorge Martin Juarez', url: 'https://www.linkedin.com/in/jorge-martin-juarez-084a1418b/'},
      email: {username: 'juarezmachadojorgemartin@gmail.com', url: 'mailto:juarezmachadojorgemartin@gmail.com'},
    }),
    technologies: () => ({
      languages: ['JavaScript (advanced)','TypeScript (advanced)','C# (intermediate)','Python3 (advanced)','PHP (intermediate)','Rust (intermediate)','Elixir (beginner)'],
      frameworks: ['ExpressJS (advanced)','NestJS (advanced)','.Net Core (intermediate)','Flask (advanced)','Yii2 (intermediate)','Laravel (beginner)','Phoenix (beginner)'],
      databases: ['PostgreSQL (intermediate)', 'MySQL (intermediate)', 'MongoDB (intermediate)', 'Redis (intermediate)', 'Dynamo (beginner)', 'Firestore (beginner)'],
      'cloud providers': ['AWS', 'GCP'],
      miscellaneous: ['REST APIs (advanced)','Docker (intermediate)','GRPC (beginner)']
    }),
    projects: () => ({
      'rchip8': {
        technologies: 'Rust, Serde, Cargo, JSON', 
        url: 'https://github.com/jmj0502/rchip8',
        description: `
        Am open-source chip-8 emulator written in Rust. 
        The project worked as very cool introduction to low-level programming and to more "Real" Rust projects.
        It supports pretty much every standard CHIP-8 ROM and Save States; Rewind support is still a work in progress.
        The project was also a good introduction to reverse engineering, since most of the "leaning" material is conformed 
        of technical documents.`
      },
      'L# Programming Language': {
        technologies: '.NET 6, C#',
        url: 'https://github.com/jmj0502/LSharp',
        description: `
        A small open-source scripting language. The language initially started as an implementation of the Lox Programming language
        and eventually became a superset of said language. It is entirely written in C#, doesn't use any dependencies and it's
        just a tree-walk interpreter at its core. The language has support for variables, functions, function expressions, lists, classes,
        modules, pipe-operator, native modules (for handling files, strings, lists, maths), result-like structures, bitwise operations and
        many more things.
        `
      }
    }),
    banner: () => `
      ( ) ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ( )  
     (_ _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|_ _) 
      (_)                                                                         (_)  
        __  __ ____  ___ ____      __ _  _  __  ____ ____ ____                         
      _(  )/  (  _ \\/ __|  __)   _(  ) )( \\/ _\\(  _ (  __|__  )                        
      / \\) (  O )   ( (_ \) _)   / \\) ) \\/ (    \\)   /) _) / _/                         
      \\____/\\__(__\\_)\___(____)  \\____|____|_/\\_(__\\_|____|____)                        
      ____  __ ____ ____ _  _  __  ____ ____    ____ __ _  ___ __ __ _ ____ ____ ____  
      / ___)/  (  __|_  _) )( \\/ _\\(  _ (  __)  (  __|  ( \\/ __|  |  ( (  __|  __|  _ \\ 
      \\___ (  O ) _)  )( \\ /\\ /    \\)   /) _)    ) _)/    ( (_ \\)(/    /) _) ) _) )   / 
      (____/\\__(__)  (__)(_/\\_)_/\\_(__\\_|____)  (____)_)__)\\___(__)_)__|____|____|__\\_) 
       _                                                                           _   
      ( ) ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ___ ( )  
     (_ _|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|_ _) 
      (_)                                                                         (_) 

     © ${new Date().getFullYear()} Jorge Juarez, a fairly chill person, not a corporation.
     All jokes reserved.

     To see the list of available commands, please type 'help'
     Disclaimer: Non-responsive site (have you ever seen a responsive terminal? O.o).
      `
} as const;
