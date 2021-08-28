onload = () =>
{
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