export const getFont = (type) => {
    return 'Roboto-' + type
}

export const getFlag = (type) => {
    return type === 'India' ? require('./assets/images/indianflag.png') : type === 'America' ? require('./assets/images/americanflag.png') : type === 'Germany' ? require('./assets/images/germanflag.png') : null
}