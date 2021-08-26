const doc = Object.freeze({
	get body()
	{
		return document.body;
	},
	get head()
	{
		return document.head;
	},
	
	class: c => document.getElementsByClassName(c),
	id: i => document.getElementById(i),
	tag: t => document.getElementsByTagName(t)
});

const Show = (...elements) =>
{
	for (let x in elements)
	{
		try
		{
			elements[x].classList.remove("hidden");
		} catch {}
	}
};

const Hide = (...elements) =>
{
	for (let x in elements)
	{
		try
		{
			elements[x].classList.add("hidden");
		} catch {}
	}
};

onload = () =>
{
	Hide(doc.id("loader"));
};