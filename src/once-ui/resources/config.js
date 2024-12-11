const baseURL = 'someBaseUrl.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'custom',        // sand | gray | slate
    brand:       'custom',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'custom',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'color',    // color | contrast
    solidStyle:  'plastic',        // flat | plastic
    border:      'conservative',     // rounded | playful | conservative
    surface:     'filled', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Ivan Volos\'s Portfolio page',
    description: 'An overview app for the sole purpose of showcasing Ivan\'s experience and development career path.'
}


// default open graph data
const og = {
    title: 'Ivan Volos\'s Portfolio page',
    description: 'An overview app for the sole purpose of showcasing Ivan\'s experience and development career path.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'Ivan Volos\'s Portfolio',
    description: '',
    email: 'volos.work@gmail.com'
}

// social links
const social = {
    linkedin: 'https://www.linkedin.com/in/volos-ivan-work/',
    github: 'https://github.com/Kurabombei',
}

export { baseURL, style, meta, og, schema, social };