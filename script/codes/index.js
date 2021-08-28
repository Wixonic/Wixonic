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
};