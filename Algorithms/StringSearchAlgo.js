function getZArray(str, ZArray){
    var n = str.length; 
    var l, r, k; 
    l = 0, r = 0; 
    ZArray[0] = 0; 

    for(var i = 1; i < n; i++){
        if(i > r){
            l = i, r = i; 

            while(r < n && str[r - l] === str[r]){
                r++;
            }
            ZArray[i] = r - l; 
            r--; 
        }
        else{
            var k = i - l; 
            if(ZArray[k] < r - i + 1){
                ZArray[i] = ZArray[k]; 
            }
            else{
                l = i; 
                while(r < n && str[r-l] == str[r])
                    r++; 
                ZArray[i] = r - l; 
                r--;
            }
        }
    }
    return ZArray;
}

function findPattern(pat, str){
    var concatString = pat + "$" + str; 

    var n = concatString.length;
    var ZArray = new Array(n); 
    
    ZArray = getZArray(concatString, ZArray); 
    
    for(var i = 0; i < n; i++){
        if(ZArray[i] == pat.length){
            return i - pat.length - 1; // as the string is concatenated
        }
    }
    return -1; 
}

module.exports = {findPattern: findPattern};