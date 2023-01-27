import React from "react";

import { Link } from "gatsby";

import LinkWrapper from "./hoc";

import * as styles from "./styles.module.scss";

const LinkComponent = ({ url, title }: { url: string; title: string }) => {
	const isExternalLink = url.includes("http://");
	return (
		<LinkWrapper
			condition={isExternalLink}
			wrapper={(children) => (
				<a href={url} target="_blank">
					{children}
				</a>
			)}
		>
			<Link className={styles.link} to={url}>
				{title}
			</Link>
		</LinkWrapper>
	);
};

export default LinkComponent;
