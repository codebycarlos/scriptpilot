const name = 'PageContextProvider'

/*
 *Set a component name.
 *Component root HTML elements are automatically tagged with a "react-ComponentName" prefixed class.
 *All other aspects of the component can be defined in their specific file (imports, props, style, logic, body, data fetching).
 */

// Declare dependencies
import { imports } from './imports'
// Define a props object with their types and defaults:
import { propsDefinition } from './propsDefinition'
// Declare default style
import styleDefault from './_styleDefault.module.scss'
// Logical processing of data (incl. props), sent to body:
import { logic } from './logic'
// Create a JSX object to represent data processed by logic function:
import { body } from './body.jsx'
// Create a react component function:
import { ReactComponentBuilder } from 'indigozest_modules/models/client/ReactComponentBuilder'
// Get PropTypes
import PropTypes from 'prop-types'

const componentFunctionDefinition = {
  imports,
  propsDefinition: propsDefinition(PropTypes),
  styleDefault,
  logic,
  body,
  name
}

// Export Component
export default ReactComponentBuilder.build(componentFunctionDefinition)

/*
 * Data fetching functions may be defined for pages only.
 * The function must be exported to the corresponding /pages/* routing file
 * and exported with one of the following names:
 * -getStaticProps
 * -getStaticPaths
 * -getServerSideProps
 * For more info: https://nextjs.org/docs/basic-features/data-fetching
 */
export { dataFetching } from './dataFetching'
