export function propsDefinition(PropTypes) {
  return {
    title: {
      propType: PropTypes.string,
      defaultProp: process.env.NEXT_PUBLIC_APP_NAME,
    },
    keywords: {
      propType: PropTypes.string,
    },
    description: {
      propType: PropTypes.string,
    },
  };
}
