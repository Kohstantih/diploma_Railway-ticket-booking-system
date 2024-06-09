import './Page.css';

export default function Page({
  aside,
  content,
}: {
  aside: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <div className="wrapper">
      <div className="page__container">
        <aside className="page__aside">{aside}</aside>
        <main className="page__main">{content}</main>
      </div>
    </div>
  );
}
