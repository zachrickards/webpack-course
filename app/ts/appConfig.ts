const AppConfig = require('appConfig');

function print (prop: string) {
    console.log(prop);
};

print(AppConfig.app.appOwner);
print(AppConfig.app.leadDev.name);