export function setDOMAttributes(props, styleDefault) {
  if (!props) {
    return props
  }

  const acceptedDOMAttributes = [
    'accessKey',
    'contentEditable',
    'dir',
    'draggable',
    'hidden',
    'id',
    'lang',
    'spellCheck',
    'style',
    'tabIndex',
    'title',
    'translate'
  ]
  const propsNames = Object.getOwnPropertyNames(props)
  let propsNum = propsNames.length
  const newProps = { ...props }

  newProps.DOMAttributes = {}

  // Class
  if (props.className) {
    newProps.DOMAttributes.className = props.className
  }
  if ('Root' in styleDefault) {
    newProps.DOMAttributes.className = [
      newProps.DOMAttributes.className,
      styleDefault.Root
    ].join(' ')
  }

  // Others
  while (propsNum--) {
    const propName = propsNames[propsNum]

    if (acceptedDOMAttributes.includes(propName)) {
      newProps.DOMAttributes[propName] = props[propName]
    }
    if (propName.startsWith('data-')) {
      newProps.DOMAttributes[propName] = props[propName]
    }
  }

  return newProps
}
