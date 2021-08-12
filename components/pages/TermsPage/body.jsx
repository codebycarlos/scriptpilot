export function body(imports, props, styleDefault, Root = "main") {
	const { NavigationWrapper, HorizontalSeparator } = imports

	return (
		<NavigationWrapper>
			<Root {...props.DOMAttributes}>
				<h4 className="title">Terms</h4>
				<HorizontalSeparator />
				<p>
					Copyright © Carlos Alfredo Vieira Salazar. Permission to use, copy, modify,
					and/or distribute this software for any purpose with or without fee is hereby
					granted. <br />
					<br /> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
					WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
					AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
					INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
					OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
					TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
					THIS SOFTWARE.
				</p>
			</Root>
		</NavigationWrapper>
	)
}
