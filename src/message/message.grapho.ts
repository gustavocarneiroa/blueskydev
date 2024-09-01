const LANGUAGES = [
    "JAVASCRIPT",
    "PYTHON",
    "JAVA",
    "C#",
    "PHP",
    "C++",
    "TYPESCRIPT",
    "RUBY",
    "C",
    "SWIFT",
    "GO",
    "KOTLIN",
    "RUST",
    "DART",
    "HASKELL",
    "VISUAL BASIC",
    "ERLANG",
    "DELPHI",
    "ELIXIR",
];

const FRAMEWORKS_BACKEND = ['NEST.JS', '.NET', 'LARAVEL', ];
const FRAMEWORKS_FRONTEND = ['REACT', 'VUE', 'ANGULAR', 'SVELTE', 'BOOTSTRAP', 'JQUERY', 'HTMX', 'NEXT.JS', 'NUXT', 'REMIX'];
const FRAMEWORKS_MOBILE = ['REACT NATIVE', 'ANDROID', 'SWIFT', 'KOTLIN', 'DART', 'IONIC'];
const FRAMEWORKS = [...FRAMEWORKS_FRONTEND, ...FRAMEWORKS_MOBILE, ...FRAMEWORKS_BACKEND];
const TECH = [...FRAMEWORKS, ...LANGUAGES];
const CONCEPTS = ["else", "if-else", "ternário", "POO", "PROGRAMAÇÃO FUNCIONAL", "reflection metadata", "teste unitário", "teste e2e", "herança nas classes", "polimorfia", "sobrecarga de métodos", "ORM", "SQL", "No-SQL"]
export { 
    LANGUAGES,
    FRAMEWORKS_BACKEND,
    FRAMEWORKS_FRONTEND,
    FRAMEWORKS_MOBILE,
    FRAMEWORKS,
    TECH,
    CONCEPTS,
}