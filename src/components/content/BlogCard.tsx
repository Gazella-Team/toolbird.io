import { Post } from 'contentlayer/generated'
import { format } from 'date-fns'
import Link from 'next/link'
import BlogBadge from './BlogBadge'

type BlogCardProps = {
	post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
	return (
		<Link
			className="flex flex-col overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-lg"
			href={`/blog/${post.slug}`}
		>
			<img
				alt={post.title}
				fetchPriority="high"
				width="2400"
				height="1260"
				decoding="async"
				data-nimg="1"
				className="blur-0 aspect-[1200/630] object-cover"
				src={post.image}
				style={{ color: 'transparent' }}
			/>
			<div className="flex flex-1 flex-col justify-between rounded-b-lg bg-white p-3.5">
				<div>
					<h2 className="line-clamp-2 font-display text-xl font-bold text-gray-700">
						{post.title}
					</h2>
					<p className="mt-2 line-clamp-2 text-sm text-gray-500">
						{post.description}
					</p>
				</div>
				<div className="mt-4 flex items-center justify-between">
					<time
						dateTime={format(
							new Date(post.publishedAt),
							'yyyy-MM-dd'
						)}
						className="text-sm text-gray-500"
					>
						{format(new Date(post.publishedAt), 'MMMM dd, yyyy')}
					</time>
					<BlogBadge category={post.category} />
				</div>
			</div>
		</Link>
	)
}
