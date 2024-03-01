async function getAllRequestTitle() {
	const fetchData = await fetch("api/request-title", { method: "GET" });
	const data = await fetchData.json();
	return data.bookli;
}