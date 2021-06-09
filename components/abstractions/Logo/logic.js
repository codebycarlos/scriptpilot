export function logic(imports, props, styleDefault) {
  const { usePageContext } = imports
  const pageProps = usePageContext()

  props.src = 'logoNoTextPath' in pageProps.Brand
    ? pageProps.Brand.logoNoTextPath
    : ''

  return props
}
