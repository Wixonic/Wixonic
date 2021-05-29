window.loaded = () =>
{
	window.feed = doc.id("feed");
	
	database
	.ref("feed")
	.once("value")
	.then((snapshot) =>
	{
		if (snapshot.exists())
		{
			const data = snapshot.val();
			
			feed.innerHTML = "";
			
			for (let x in data)
			{
				feed.innerHTML += `<a href="feed/#${data[x].id}" class="event"><div class="title">${data[x].title}</div><div class="date">${data[x].date}</div><div class="content">${data[x].content}</div></div>`;
			}
		} else {
			window.feed.innerHTML = "<br />No feed now.<br />Come back later !<br /><br />";
		}
	});
};