const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'The Hobbit',
        author: 'R. R. Tolkien'
      },
      {
        title: "Harry Potter and the Philosopher's Stone",
        author: 'J. K. Rowling'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['The Hobbit', "Harry Potter and the Philosopher's Stone"]);
  });
});
