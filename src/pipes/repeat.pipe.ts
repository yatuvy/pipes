/**
 * Created by Yonatan Yatuv on 11/August/2016.
 */

import {PipeTransform, Pipe} from "@angular/core";

@Pipe({
    name: 'repeat'
})

export class RepeatPipe implements PipeTransform{
    transform(value: string, ...args: any[]): any {
        var times = args[0];
        var separator = args[1];
        return !times
            ? value
            : strRepeat(value, times-1, separator || '');
    }
}

/**
 * Repeats a string n times with given separator
 * @param str string to repeat
 * @param n number of times
 * @param sep separator
 * @returns {*}
 */
function strRepeat(str, n, sep) {
    if(!n) {
        return str;
    }
    return str + sep + strRepeat(str, --n, sep);
}
