function type_check_v1(arg1, type) {
    if (typeof arg1 == type) {
        return true;
    }
    else if (Array.isArray(arg1) && type === "Array")
        return true;
    else if (typeof arg1 === 'object' && arg1 !== null)
        return true;
    else if (arg1 === null) {
        return false;
    }
    else {
        return false;
    }
}

function type_check_v2(arg1, typeObj) {
    if (type_check_v1(arg1, typeObj) == true || Object.values(typeObj) == arg1) {
        return true;
    }
    else {
        return false;
    }
}
