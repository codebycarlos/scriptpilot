export function propsDefinition(PropTypes) {
  return {
    src: {
      propType: PropTypes.string.isRequired
    },
    byLine: {
      propType: PropTypes.object
    },
    csrfToken: {
      propType: PropTypes.string.isRequired
    }
  }
}
