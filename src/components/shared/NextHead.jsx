import Head from "next/head";

const NextHead = ({ title = "Ha GONIN - Développeuse full-stack" }) => {
  return (
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta
				name="description"
				content="Développeuse Full Stack, passionné par la création d'applications web performantes et intuitives"
			/>
			<link rel="icon" href="/favicon-dark.png" />
		</Head>
	);
};

export default NextHead;
