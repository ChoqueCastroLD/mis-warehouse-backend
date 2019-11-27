/**
 * Check if object have keys
 */
function has(object = {}, properties = [] || ''){     
    if(typeof properties === 'string')
        properties = [properties];
    let missing = [];
    for (const prop of properties) {
        try {
            if(!Reflect.has(object, prop || '')){
                missing.push(prop);
            }    
        } catch (error) {
            missing.push(prop);
        }
    }
    if(missing.length > 0)
        throw 'Object must have: ' + missing.join(', ');

    return true;    
}

module.exports = has;
