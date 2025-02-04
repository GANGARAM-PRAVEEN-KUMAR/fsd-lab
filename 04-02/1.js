// const os=require('os')

// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.totalmem)
// console.log(os.freemem)
// console.log(os.uptime)


// const os = require('os');

// function displayMemoryUsage() {
//     setInterval(() => {
        
//         const totalMemory = os.totalmem();
//         const freeMemory = os.freemem();
//         const usedMemory = totalMemory - freeMemory;
//         const percentFree = (freeMemory / totalMemory) * 100;

   
//         console.log(`Total Memory: ${(totalMemory / (1024 ** 2)).toFixed(2)} MB`);
//         console.log(`Used Memory: ${(usedMemory / (1024 ** 2)).toFixed(2)} MB`);
//         console.log(`Free Memory: ${(freeMemory / (1024 ** 2)).toFixed(4)} MB`);
//         console.log(`Percentage of Free Memory: ${percentFree.toFixed(3)}%`);
//         console.log('-'.repeat(40));
//     }, 5000); 
// }

// displayMemoryUsage();



const os = require('os');

function formatUptime(uptimeInSeconds) {
    const days = Math.floor(uptimeInSeconds / (24 * 3600));
    const hours = Math.floor((uptimeInSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((uptimeInSeconds % 3600) / 60);

    return `${days} days, ${hours} hours, ${minutes} minutes`;
}

function logUptime() {
    setInterval(() => {
        const uptimeInSeconds = os.uptime();
        const formattedUptime = formatUptime(uptimeInSeconds);
        
        console.log(`System Uptime: ${formattedUptime}`);
    }, 5000);
}

logUptime();
