let getStatic = async function getStaticProps() {
  const data = await import(`../data/vocabulary.json`);

  const arrayVocabulary = data.vocabulary;
  return {
    props: {
      arrayVocabulary,
    },
  };
};

export default getStatic;
