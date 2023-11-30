/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly BUILDER_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}