// check existence of format function in String object 
if (String.prototype.format == undefined) {
    String.prototype.format = function(arg)
    {
        var rep_fn = undefined;
        
        // in case of object
        if (typeof arg == "object") {
            rep_fn = function(m, k) {return arg[k];}
        }
        // in case of plural arguments
        else {
            var args = arguments;
            rep_fn = function(m, k) { return args[parseInt(k)]; }
        }
        
        return this.replace( /\{(\w+)\}/g, rep_fn );
    }
}