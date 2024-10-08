import type { Meta, Link } from "astro-seo";

export interface ConfigSite {
    title: string
    description: string
    socialLinks: { name: string, url: string }[]
}

export interface ConfigSeo {
    linkedIn: string
    meta: Partial<Meta>[]
    link: Partial<Link>[]
}

export interface ConfigType {
    site: ConfigSite
    seo: ConfigSeo
}
