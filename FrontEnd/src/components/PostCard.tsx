import { Link } from "react-router-dom";
import { toReadableDate as toHumanReadableMonthDateYear } from '../helpers/DateTimeHelper';

type PostCardProps =
{
    title: string;
    description: string;
    category: string;
    author: string;
    updatedAt: string;
    slug: string;
};

function PostCard(postCardProps: PostCardProps)
{
    const {
        title,
        description,
        category,
        author,
        updatedAt,
        slug
    } = postCardProps;

    const formattedDate = toHumanReadableMonthDateYear(updatedAt);

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-sm font-medium text-indigo-600">
                {category}
            </p>

            <h3 className="mt-3 text-xl font-bold text-slate-900">
                {title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
                {description}
            </p>

            <p className="mt-4 text-sm text-slate-500">
                <span>{author} · </span>
                <time dateTime={updatedAt}>{formattedDate}</time>
            </p>

            <Link 
            to={`/posts/${slug}`}
            className="mt-5 text-sm font-semibold text-slate-900">
                Read article →
            </Link>
        </article>
    );
}

export default PostCard;
