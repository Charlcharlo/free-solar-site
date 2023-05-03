export default function ArticleHtml({ text }) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}
