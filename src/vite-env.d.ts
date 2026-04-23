// Adapted from https://github.com/parcel-bundler/parcel/discussions/7910#discussioncomment-2958845
declare module "*.svg?react" {
	import * as React from "react";
	const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	export default ReactComponent;
}
