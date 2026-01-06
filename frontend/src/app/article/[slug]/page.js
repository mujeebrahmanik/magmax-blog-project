import { getArticleBySlug } from "../../../../lib/api"
import Image from "next/image"

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const article = await getArticleBySlug(slug);
  
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }) {
  const {slug} = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-8 max-w-[1200px]">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      
      <div className="flex items-center gap-4 text-gray-500 mb-6">
        <span>By {article.author}</span>
        <span>•</span>
        <time>{new Date(article.published_at).toLocaleDateString()}</time>
        {article.category && (
          <>
            <span>•</span>
            <span>{article.category.name}</span>
          </>
        )}
      </div>

      {article.image && (
        <div className="relative w-full h-96 mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            loading="eager"
            className="object-cover rounded-lg"
          />
        </div>
      )}

      <div
        className="mb-8 text-gray-800 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}