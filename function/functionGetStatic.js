export async function getStaticProps() {
  const data2 = await import(`../data/pathsvoc.json`);

  const arrayEnglish = data2.englishList;
  return {
    props: {
      arrayEnglish,
    },
  };
}
