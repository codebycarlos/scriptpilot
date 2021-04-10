import { filterObjectByChildObjectParameter } from "./filterObjectByChildObjectParameter";

export function setComponentPropDefaultsAndTypes(component, props) {
  if (typeof component !== "function") return;
  if (props === null || props === {} || typeof props !== "object") return;
  component.defaultProps = filterObjectByChildObjectParameter(
    props,
    "defaultProp"
  );
  component.propTypes = filterObjectByChildObjectParameter(props, "propType");
}
