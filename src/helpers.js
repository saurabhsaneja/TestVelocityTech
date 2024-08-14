export const getFont = (type) => {
    return 'Roboto-' + type
}

export const getFlag = (type) => {
    return type === 'India' ? require('./assets/images/indianflag.png') : type === 'America' ? require('./assets/images/americanflag.png') : type === 'Germany' ? require('./assets/images/germanflag.png') : null
}
export const getPersonImage = (type) => {
    return type === 'person1' ? require('./assets/images/person1.jpeg') : type === 'person2' ? require('./assets/images/person2.jpeg') : type === 'person3' ? require('./assets/images/person3.jpeg') : null
}