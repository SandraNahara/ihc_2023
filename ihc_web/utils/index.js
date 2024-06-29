export const filterNumbersAndHyphens = string => {
    let output = string.toString().replace(/[^0-9-]/g, '').split('-')
    return output.shift() + (output.length ? '-' + output.join('') : '')
}

export const filterNumbersAndCommas = string => {
    let output = string.toString().replace(/[^0-9,]/g, '').split(',')
    return output.shift() + (output.length ? ',' + output.join('') : '')
}

export const filterNumbers = string => {
    return string.toString().replace(/[^0-9]/g, '')
}

export const filterAlphabetsAndSpace = string => {
    return string.toString().replace(/[^A-Za-z ]/g, '')?.replace(/\s+/g, ' ')
}

export const addNumberFormat = (value = '', params) => {
    const { decimal = 4, remove_nonsignificant_decimals = false, trunc = false } = params ?? {}
    let string = typeof value === 'number'? value.toString().replace('.', ',') : value
    let isLastCharacterADot = value[value.length - 1] === '.' && !value.includes(',') && value.length > 1
    let isNegative = string.toString().startsWith('-')
    let filteredNumber = filterNumbersAndCommas(string).replace(',', '.')
    let number = remove_nonsignificant_decimals? Number(filteredNumber) : filteredNumber
    let parts = number.toString().split('.')
    parts[1] = parts[1]?.substring(0, decimal)
    if (!string.toString().length) {
        return ''
    } else if (isNaN(number)) {
        return 0
    } else if (isNegative && filterNumbersAndHyphens(string).length === 1) {
        return '-'
    } else {
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        let formatedNumber = trunc? parts[0] : filteredNumber.endsWith('.')? `${parts[0]},` : filteredNumber.includes('.')? parts.join(',') : parts[0]
        return `${isNegative? '-' : ''}${formatedNumber}${isLastCharacterADot? ',' : ''}`
    }
}

export const removeNumberFormat = string => {
    let isNegative = string.toString().startsWith('-')
    let number = string.toString().replaceAll('.', '').replaceAll('-', '') || '0'
    let filteredNumber = filterNumbersAndCommas(number)?.replaceAll(',', '.')
    return Number(isNegative? `-${filteredNumber}` : filteredNumber)
}