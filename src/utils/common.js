export function requiredValues(options, service, values) {
  values.forEach((val) => {
    if (!options[val]) {
      throw new Error(`invalid ${service} config: ${val} is required`)
    }
  })
}
