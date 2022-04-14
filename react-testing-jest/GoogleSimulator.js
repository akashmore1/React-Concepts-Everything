const googleDatabase = [
  "cat.com",
  "mycat.com",
  "catdog.com",
  "favcats.com",
  "akash.com",
  "thegreatakash.net",
  "mydiary.com",
  "diaryToday.org",
  "numbers.com",
  "numberscat.com",
  "lifeisgood.com",
];

const googleSearch = (searchInput, googleDb) => {
  const matches = googleDb.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
