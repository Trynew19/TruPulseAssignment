export const definePlugin = {
  async execute(word) {
    if (!word) return { error: 'Please provide a word.' };
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
      const data = await res.json();
      if (!Array.isArray(data)) throw new Error();
      return {
        word,
        meanings: data[0].meanings.map((m) => ({
          partOfSpeech: m.partOfSpeech,
          definitions: m.definitions.map((d) => d.definition),
        })),
      };
    } catch (e) {
      return { error: 'Definition not found.' };
    }
  }
};