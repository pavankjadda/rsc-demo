'use client';
import React from 'react';
import { getKeyValue, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react';
import { Book } from '@/types/Book';

interface BooksTableProps {
	books: Book[];
}

export default function BooksTable({ books }: BooksTableProps) {
	const columns = [
		{
			key: 'id',
			label: 'ID',
		},
		{
			key: 'name',
			label: 'NAME',
		},

		{
			key: 'number',
			label: 'Number',
		},
		{
			key: 'title',
			label: 'Title',
		},
		{
			key: 'isbn',
			label: 'ISBN',
		},
		{
			key: 'author',
			label: 'Author',
		},
	];

	return (
		<Table aria-label="All Books">
			<TableHeader columns={columns}>{(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}</TableHeader>
			<TableBody items={books}>
				{(item) => <TableRow key={item.id}>{(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}</TableRow>}
			</TableBody>
		</Table>
	);
}
