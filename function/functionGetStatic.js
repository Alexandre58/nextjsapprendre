export const getStaic1 = async function getStaticProps() {
  const data2 = await import(`../data/listes.json`);

  const arrayEnglish = data2.englishList;
  return {
    props: {
      arrayEnglish,
    },
  };
};
