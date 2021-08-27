const pages = [
	{
		link: "",
		name: {
			fr: "Acceuil",
			en: "Home"
		}
	}
];

window.addEventListener("DOMContentLoaded",() =>
{
	const footer = document.createElement("footer");

	for (let x in pages)
	{
		const page = pages[x];

		footer.innerHTML += `<a class="page" href="/${pageLang}/${page.link}">${page.name[pageLang]}</a>`;
	}

	doc.body.append(footer);
});