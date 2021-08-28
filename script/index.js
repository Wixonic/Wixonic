onload = () =>
{
	GET("/codes")
	.then((codes) =>
	{
		if (codes)
		{
			try
			{
				doc.class("codes-container")[0].innerHTML = "";

				codes = sortByDate(codes);
				codes.reverse();
				codes.splice(3,codes.length - 3);

				for (let x in codes)
				{
					const code = codes[x];

					doc.class("codes-container")[0].innerHTML += `<a href="${code.link}" target="_blank" class="code"><div class="title">${code.title}</div><div class="summary">${code.summary}</div><div class="language ${code.language || "null"}">${code.language || "?"}</div></a>`;
				}
			} catch(e) {
				console.log(e);
				doc.class("codes-container")[0].innerHTML = "<b>An error occured</b>";
			}
		} else {
			doc.class("codes-container")[0].innerHTML = "<b>Not found</b>";
		}
	}).catch(() => doc.class("codes-container")[0].innerHTML = "<b>Not found</b>");

	GET("/releases")
	.then((releases) =>
	{
		if (releases)
		{
			try
			{
				doc.class("releases-container")[0].innerHTML = "";

				releases = sortByDate(releases);
				releases.reverse();
				releases.splice(3,releases.length - 3);

				for (let x in releases)
				{
					const release = releases[x];

					doc.class("releases-container")[0].innerHTML += `<a href="${release.link}" target="_blank" class="release"><div class="title">${release.package} - V. ${release.version}</div><div class="summary">${release.summary}</div><div class="language ${release.language || "null"}">${release.language || "?"}</div></a>`;
				}
			} catch(e) {
				console.log(e);
				doc.class("releases-container")[0].innerHTML = "<b>An error occured</b>";
			}
		} else {
			doc.class("releases-container")[0].innerHTML = "<b>Not found</b>";
		}
	}).catch(() => doc.class("releases-container")[0].innerHTML = "<b>Not found</b>");
};