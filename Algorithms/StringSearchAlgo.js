// naive algorithm 
function searchForString(pat, str){
    var n = str.length; 
    var m = pat.length; 

    for(var i = 0; i <= n-m; i++){
        var j = 0; 
        for(j = 0; j < m; j++){
            if(pat[j] != str[i+j])
                break;
        }
        if(j == m)
            return i; 
    }
    return -1; 
}

module.exports = {searchForString};