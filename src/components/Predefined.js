import texts from '../data/mock-texts'

export function text(key, params) {
    
    if (params || params === 0) {

        let _key = texts[key];

        if (typeof params !== 'object') {
            _key = _key.replace('{0}', params);
        } else {
            for (let i = 0; i < params.length; i++) {
                _key = _key.replace(`{${i}}`, params[i]);
            }
        }

        return _key;

    } else {
        return texts[key];
    }
}