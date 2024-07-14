import React from 'react';
import { BASE_API_URL, BOOK_API_URL } from '@/constants/ApiConstants';
import { Card } from '@nextui-org/react';
import BooksTable from '@/components/BooksTable';

async function getBooks() {
	const res = await fetch(`${BASE_API_URL + BOOK_API_URL}/books`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function AllBooks() {
	const books = await getBooks();

	return (
		<Card className={'m-10'}>
			<BooksTable books={books}></BooksTable>
		</Card>
	);
}
