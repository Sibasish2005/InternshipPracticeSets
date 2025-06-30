// leet code 468


// 1. Write a function to validate a string as a valid IP address.

function validIPAddress(IP){
    const IPv4 = /^(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;

    const IPv6 = /^(([0-9a-fA-F]{1,4}):){7}([0-9a-fA-F]{1,4})$/;  

    if(IP.match(IPv4)) return "IPv4";
    if(IP.match(IPv6)) return "IPv6";
    return "niether";
}
console.log(validIPAddress("192.168.1.1"));
console.log(validIPAddress("2001:db8:85a3::8a2e:370:7334"));
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
