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

const random = (max=1,min=0) => Math.random() * (max - min) + min;

const redirect = (url="") =>
{
	doc.head.innerHTML += `<meta http-equiv="refresh" content="0;${url}" />`;
};

const GET = (path="") =>
{
	return new Promise((resolve,reject) =>
	{
		const xhr = new XMLHttpRequest();

		xhr.open("GET",`https://wixonic-profile-default-rtdb.europe-west1.firebasedatabase.app${path}/.json`,true);

		xhr.responseType = "json";

		xhr.onload = () =>
		{
			resolve(xhr.response);
		};

		xhr.onerror = () =>
		{
			reject();
		};

		xhr.send();
	});
};

const sortByDate = (object) =>
{
	let dateArray = [];

	for (let x in object)
	{
		const item = new Date(object[x].date).getTime() + "#" + x;

		if (dateArray.length > 0)
		{
			dateArray.push(item);
		} else {
			dateArray = [item];
		}
	}

	dateArray.sort();

	for (let x in dateArray)
	{
		dateArray[x] = object[dateArray[x].split("#")[1]];
	}

	return dateArray;
};