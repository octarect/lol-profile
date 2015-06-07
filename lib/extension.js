Array.prototype.mode = function() {
    var array_length, count, i, max, value;
    array_length = this.length;
    count = [];
    for (i = 0; i < array_length; i++) {
        if (count[this[i]]) {
            count[this[i]] ++;
        } else {
            count[this[i]] = 1;
        }
    }
    max = 0;
    for (i = 0; i < count.length; i++) {
        if (count[i] > max) {
            max = count[i];
            value = i;
        }
    }
    if (value > 1) {
        return value;
    } else {
        return null;
    }
};
