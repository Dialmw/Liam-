const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXXOqOhT9L3nVcyqfojOduYgIiBQVtJU75yGQABENSIJCO/3vd7TttA/3nNvLUyYha6+stfZ+AbQkDLu4A+MXUNXkDDm+LnlXYTAGkyZNcQ36AEEOwRh0dlD22L5VkVhZW99aYKlw2jWug0iyTCXANpGGzUUwzOwevPZB1cQHkvwBcC62eBiITjA0sKhBoptza+MKs8zJbV2dVKu7o0UM3UsH3j14vSJCUhOamVWOj7iGBxd3S0jq79E3Jg2jnhqu9Ei79BBWz7yXiksnUaTtIneKKjfl6iE/ZaL2Pfq93XG9n3StE1dn6QHvHiU+IlqHIt+IT76Tjygvy2imrKx3+oxkFCMHYcoJ776te2/RNm6Mjq7jNUFSHBW/FMqdcWF0yvheqdjaXEeqnFFT/h7xMrmM2vqctebpUEV7KariQW96XgnJdnWRLddk68XoMIfbTv5KfFl/ZKX4P7pjfwkTUpymtkInKMxKjBt7PlddsfTCxXO+gnfrfI5SNtO/R/9Y043sorOq3z0ZlXTRRKxlUymdRbKoFmfRNCpHX1vRPjQ/6UPe1H9i6W+bYhc5guqPTA170bLQT4U2PbEZOxmmsZLDunVthersslRmQQSPs527fO6ok3keEaxzq5bLUzAXINXb7YoEUnHKsvvbiwrcOQiMhdc+qHFGGK8hJyW97WlKH0B0DnBSY36TF7DWRxu8oYKoBm7WLGebKjQ9uSrswZIOjGLt29NFEU93onkP+qCqywQzhpFNGC/rzsOMwQwzMP77Vx9Q3PI3467lJKEPUlIzvqFNdSgh+nD14xAmSdlQHnQ0Ma4LXIPx4HMbc05oxq46NhTWSU7O2MghZ2CcwgPDr32A8Jkk+IoHpOnGR1EbhvRIGsf11F1Wu5cr5bykb7+I6TAeaVr8IxZH2g9ZUJMfWjrSfsR4mGINKUkCBdAH5L1nrnd+a+Eli+1yEwln10h3p1mW10gbPSZr2R7cbHjTHtcYgTGvG9wHMUyKpgrLAtM/4OqXO7i2Jkn47CjbvTLKnx87hIWJ6mtfcN88BeOXzzlllOiGF3mqqY0WoA+OtwiS28sVeSgJoiwK6misKn+xn5erkLCqflLMr7jvol9vIMwhObDrFPNPLlVky3yQQmEhW9bEzHQj08GnSR9pf0uTXyisTYsZcS1WlJensMZkMLmTqudAYRmcr5K0badpMZfK+38BAWMQYyctSbbqLXbKZpV2aMO2Oe8GEbQ0S93pih9qjHWCjRa+TalyWtuPphQrlbt4UMXNVExi1d96a+UQQIjbh7p4Mo3V/bXaW1i+Fms9RpqizQjpwXN+jjiR4oI+rFeyNEWocY7IMy/N4Wm79gKl12ymFgnP6/2qCdijchfcxSK5TDB9mOxp+Lwd8t6xfcr1tz68zYHD+/wltw55eY9WSvBtnFF4tei/zPma8sFr/wvG+4D8TZImYeXH3pMy2ZG8nrvebKBKJdfTkZoMmtixyMa2tWQlKQZSwevrrz6oDpCnZX0EYwApqkuCQB8cIOP6Z6OG5IgZh8cKjIWhLA5ESZCHfXDs9KoKOOQf/Q3067fcX8DrP6uEXCT7BwAA'
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

