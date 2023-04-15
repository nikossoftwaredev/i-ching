import { wikiArticles } from 'data/wiki-articles';
import { PageProps } from 'types/general';
import ButtonLink from 'ui/ButtonLink';
import Card from 'ui/Card';

const findPreviousArticlePath = (index: number): string => {
  const articleIndex = index === 0 ? wikiArticles.length - 1 : index - 1;
  return wikiArticles[articleIndex].path;
};

const findNextArticlePath = (index: number): string => {
  const articleIndex = index === wikiArticles.length - 1 ? 0 : index + 1;
  return wikiArticles[articleIndex].path;
};

const Page = ({ params }: PageProps) => {
  const { article } = params;

  const articleInfoIndex = wikiArticles.findIndex(sc => sc.path === article);
  const articleInfo = wikiArticles[articleInfoIndex ?? 0];

  const { title, contents } = articleInfo;
  return (
    <div>
      <ButtonLink href={`/scientific-articles/${findPreviousArticlePath(articleInfoIndex)}`}>
        Προηγουμενο
      </ButtonLink>
      <ButtonLink href={`/scientific-articles/${findNextArticlePath(articleInfoIndex)}`}>
        Επομενο
      </ButtonLink>

      <section className='w-full flex flex-col items-center justify-center'>
        <h1 className='text-2xl'>{title}</h1>
        {contents.map(content => (
          <Card key={content.section} className='xl:w-2/4 md:w-3/4 items-center justify-center p-5'>
            <h1 className='font-bold'>{content.section}</h1>
            <p>{content.sectionContent}</p>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Page;
