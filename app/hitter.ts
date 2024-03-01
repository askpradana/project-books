export async function GetAllBooks() {
	const fetchData = await fetch("api/books");
    const data = await fetchData.json();
    return data.booklist; 
}
