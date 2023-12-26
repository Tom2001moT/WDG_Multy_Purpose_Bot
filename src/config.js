require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    clientID: process.env.CLIENT_ID || "", // your bot client id
    prefix: process.env.PREFIX || "=", // bot prefix
    ownerID: process.env.OWNERID || "", //your discord id
    SpotifyID: process.env.SPOTIFYID || "e6f84fbec2b44a77bf35a20c5ffa54b8",
    SpotifySecret: process.env.SPOTIFYSECRET || "498f461b962443cfaf9539c610e2ea81",
    mongourl: process.env.MONGO_URI || "mongodb+srv://arjunn:premiumop123@cluster0.dpw1dmi.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || 0x303236, // embed colour
    logs: process.env.LOGS || "", // channel id for guild create and delete logs
    links: {
        img: process.env.IMG || 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg', //setup system background image 
        support: process.env.SUPPORT || 'https://discord.gg/2TDD89cxwS', //support server invite link
        invite: process.env.INVITE || 'https://discord.com/api/oauth2/authorize?client_id=1185631426100613120&permissions=8&scope=applications.commands+bot' //bot invite link
    },
    nodes: [
        {
            host: process.env.NODE_HOST || "lava.link",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "kronix",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
