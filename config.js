const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqH7kJYlVXDYig4AUVvE3NQ4AAkask2GKX/z6FdtfpqZpzpoenVELWXllr7f0O8gITZKEGDN9BWeELpKhd0qZEYAjUOgxRBboggBSCIchMZ80imlz0k2OhXmzJtUIM87gNklmqL47TlSg0nsULBvMK7l1Q1l6K/d8A+hyPF2fJVharN++qUdYSdoNsp6rGLaPluD/Dy16oXN116r6Ce4sIcYXzaFzGKEMVTC3U2BBX36PvLpK42iRMsNbZs3+Ag0QLReiwh4jbGtYeLaJFI3Yqd8scvke/F6ZJ3+24wsquPGZ5EZKD5ix2QlMLlzWT5TxWO1lPPYjx4Emf4ChHwTRAOcW0+bbuO+W4wJMV7CsUFfN0w+bppN4RqcMYae515rPZMvC9cF1vp98jrlN7anulSTPbWtZbS4YDaaJRGkArdsgRpp4mugNznOb/IG5Xn1lJ/o/u4twREVqrwcV0TWFkc+I0vcke0msdFXNvviL5jJcPnTr/Zmy2a/t422635zdce27S62mOrfWcZhxGm6nuuxtdMbNrdG4eOfygD2ld/VZkR0j5c3JZKKdbR1HIOFgK3ukqjNfq8uRIrDbpF8yBbHe1VNwcqbFIDyfVnp5ZdcaVdrONfO26Yo5hKoU7eOtMshDG0evjRQlqpgEYsvcuqFCECa0gxUXe7nE82wUwuGyQXyH6kBdMetYmj2disZP0yt4Qza2Dg61umIU5l8Mp25zZI4l7t8hnXkEXlFXhI0JQMMGEFlUzR4TACBEw/POvLsjRlT6Na8u11UJcEermdZkWMPh09fMQ+n5R53TT5P6oXaAKDJmf24hSnEek1bHOYeXH+IJGMaQEDEOYEnTvggBdsI9aPNCo7m3Z2PPNiNMP9V6jXrCylJZyXOTPX0TPgxInSS8MFwovgsT6L7LU51/QgOelfsB4HMuCLsAfPdPe+aWFzmlN8pFxvUolRZpoHraMrFUxFZbFw4an9qhCARjSqkZd4EE/qUunSFD+G9wbk1/My2xMNowz7owXa8l/MwOyHXW+4j49BcP3n3NqVAQtnnbcG5xh6qALskcEcftyri9IPMsJHCvKQ1H4g/x4a4WEZfkjR7TF/RC9vREgCnFKwBCMlmcr7wvG2HSuN0kwDFWJlFHUqvpp0mfan2laJn1yDRMdWwZJire9UyHMqD2+vG36JILmyg+vVy1MTL54/RcQMATWTMs6vSibuFEcrBljb73tZw3X86VxR4D+Je/3L8b8mOiOYeyVIGbW1chPgnHvKuU3cuSJ6swW9mXeMc+NMiV2j6Kpqry21Z5h+VrMpBoj6+H8NNJmDgnYc+aNtnCz1RRUH/QzlSbO9Mz42XpgDoL4lucnm8Pj1HflWOiM5XUwmzbjg9mUGC2v/DSbhPvjZx8+5kD6MX/xo0PeP6IVYvQYZzlsLfovc76mnLl3v2B8DMhfJEl1yqU33/fVA44r05rrjMgXVAll0Wdqb2pgdzIZ+Cu+PwpEcL//1QVlCmlYVBkYApgHVYED0AUpJFT52agOzhChMCvBkJUEVhYEWea6IGuUstxQSD/7GyjtZ58u4P43Dcj+gPsHAAA=',
    PREFIXE: process.env.PREFIX || ".",
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

