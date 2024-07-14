import React from 'react';
import { Card } from '@nextui-org/react';
import { BASE_API_URL, BOOK_API_URL } from '@/constants/ApiConstants';

async function getBook(id: string) {
	const res = await fetch(`${BASE_API_URL + BOOK_API_URL}/books/${id}`);
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function ViewBook(props: { id: string }) {
	const book = await getBook(props.id);

	return (
		<Card>
			{book && (
				<div className={'m-5'}>
					<h2 className={'text-2xl'}>{book.title}</h2>
					<hr />
					<p>ID: {book.id}</p>
					<p>Number: {book.number}</p>
					<p>Title: {book.title}</p>
					<p>ISBN:{book.isbn}</p>
					<p>Price:{book.price}</p>
					<p>Author:{book.author}</p>
				</div>
			)}
		</Card>
	);
}
