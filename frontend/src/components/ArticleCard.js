import Link from "next/link"
import Image from "next/image"

const ArticleCard = ({article}) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
        {article.image && (
          <div className="relative h-48 w-full">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              loading="eager"
            />
          </div>
        )}
        <div className="p-6">
          <h2 className="text-xl text-gray-800 font-semibold mb-2 line-clamp-2">
            {article.title}
          </h2>
          <p className="text-gray-700 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{article.author}</span>
            <time>{new Date(article.published_at).toLocaleDateString()}</time>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ArticleCard
