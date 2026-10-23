function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="border-b border-line pb-8">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-heading sm:text-[3.25rem]">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-mist">{description}</p>
    </header>
  );
}

export default PageIntro;
