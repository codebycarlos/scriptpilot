/*
  Description:
  This file brings together all the parts of a component. 
  To define the component you can edit its individual files (imports, props, style, logic, body)
  */

// Declare dependencies
import { imports } from "./imports";
// Define a props object with their types and defaults:
import { propsDefinition } from "./propsDefinition";
// Declare default style
import styleDefault from "./_styleDefault.module.scss";
// Logical processing of data (incl. props), sent to body:
import { logic } from "./logic";
// Create a JSX object to represent data processed by logic function:
import { body } from "./body.jsx";
// Create a react component function:
import { createReactComponentFunction } from "../../_utils/createReactComponentFunction.js";
// Get PropTypes
import PropTypes from "prop-types";

const componentFunctionDefinition = {
	imports,
	propsDefinition: propsDefinition(PropTypes),
	styleDefault,
	logic,
	body,
};

export const Component = createReactComponentFunction(componentFunctionDefinition);

export default Component;

/* Data fetching functions may be defined for pages only. 
The function must be exported to the corresponding /pages/* routing file
and exported with one of the following names:
-getStaticProps
-getStaticPaths
-getServerSideProps
For more info: https://nextjs.org/docs/basic-features/data-fetching */
export { default as dataFetching } from "./dataFetching.js";
