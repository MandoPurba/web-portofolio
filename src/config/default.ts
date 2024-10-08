import type { ConfigType } from "../types";

export const defaultConfig: ConfigType = {
    site: {
        title: "Romando Purba - Backend Developer Portfolio",
        description: "Romando Purba Portofolio",
        socialLinks: [
            {
                name: "linkedIn",
                url: "https://google.com/"
            },
            {
                name: "Email",
                url: "romando.purba@yahoo.com"
            },
            {
                name: "Github",
                url: "https://github.com/MandoPurba"
            }
        ]
    },
    seo: {
        linkedIn: "romando-purba",
        meta: [],
        link: []
    }
}
