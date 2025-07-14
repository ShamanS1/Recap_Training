function sum(a, b) {
    if(typeof(a)!=="number"||typeof(b)!=="number"||isNaN(a)||isNaN(b)){ throw new Error("")};
    
 return a+b;
 
};

module.exports = sum;
