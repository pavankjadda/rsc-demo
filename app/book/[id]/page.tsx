import ViewBook from '@/features/book/ViewBook';

export default function ViewBookPage({ params }: { params: { id: string } }) {
	return <ViewBook id={params.id} />;
}
