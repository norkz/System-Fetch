const { freemem } = require('os');
const nodeos = require('os');
const { cpuUsage } = require('process');
{
    function printOS() {
        return console.log(`        Free Memory: ${freemem()}
        Home Dir: ${nodeos.homedir}
        CPU's: ${nodeos.cpus().unshift()}
        CPU Usage: ${cpuUsage().user}
        Uptime: ${nodeos.uptime}
        Platform: ${nodeos.platform}
        User Info: user: ${nodeos.userInfo().username} uid: ${nodeos.userInfo().uid} shell: ${nodeos.userInfo().shell}
        Time: ${nodeos.version}
        Total Memory: ${nodeos.totalmem().toPrecision()}`)
    }
    printOS()
}