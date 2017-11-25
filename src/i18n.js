const defaultLocale = 'strings';
const nameRegex = /\.\/(\S+)\.json/i;

function getLocale(validLocales) {
    const language = navigator.language;

    if (!language) return defaultLocale;
    if (language.length !== 2) return validLocales.includes(language) ? language : defaultLocale;
    if (validLocales.includes(`${language}-${language.toUpperCase()}`)) return `${language}-${language.toUpperCase()}`;

    // eslint-disable-next-line
    const languageRegex = new RegExp(`${language}\-\\\S\\\S`);

    // eslint-disable-next-line
    for (const validLocale of validLocales) {
        if (languageRegex.test(validLocale)) return validLocale;
    }

    return defaultLocale;
}

function loadLocales() {
    const locales = {};
    const defaultLanguageFile = `./${defaultLocale}.json`;
    const languages = require.context('./locale/', false, /\.json/);

    locales[defaultLocale] = languages(defaultLanguageFile);

    // eslint-disable-next-line
    for (const lang of languages.keys()) {
        const languageName = lang.match(nameRegex)[1];
        const language = languages(lang);

        // eslint-disable-next-line
        for (const key in language) {
            if (language[key] === '') language[key] = locales[defaultLocale][key];
        }

        locales[languageName] = language;
    }

    return locales;
}

const messages = loadLocales();
const locale = getLocale(Object.keys(messages));

export default { messages, locale };
