export async function GetAllBooks() {
	const fetchData = await fetch("http://localhost:3000/api/books");
    const data = await fetchData.json();
    return data.booklist; 
}
