export function filterInput(input) {
    if (input == '') return 'Input must be filled'
    const format = /^[a-zA-Z0-9\s]*$/
    if (!format.test(input)) return 'Onli can use letters and numbers'
    return null
  }