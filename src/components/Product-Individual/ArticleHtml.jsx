export default function ArticleHtml({ text }) {
  return (
    <div className="article-html" dangerouslySetInnerHTML={{ __html: text }} />
  );
}
