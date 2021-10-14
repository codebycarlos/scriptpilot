export function logic(imports, props, styleDefault) {
  if (props.page === 'scripts') {
    props.descriptionText =
      <>
      A script or&nbsp;
				<a
  href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-concepts.html#gettingstarted-concepts-function"
  target="_blank"
  title="Find out more." rel="noreferrer"
				>function</a>
				&nbsp;is code which executes a set of defined instructions. It may be&nbsp;

      <a
  href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-invocation.html"
  target="_blank"
  title="Find out more." rel="noreferrer"
				>triggered</a>
				&nbsp;manually, or externally via a HTTP request.
    </>
  }

  return props
}
