import Movie from '../src/models/movie';

describe('Movie Spec', () => {
  let movie

  it('Creates a valid instance of a movie.', () => {
    movie = new Movie ({
      title: 'A Street Cat Named Bob',
      release_date: '2016-11-04',
    })

    expect(movie.isValid()).toEqual(true);
  });

  it('Returns invalid if title is not present.', () => {
    movie = new Movie ({
      release_date: '2016-11-04',
    })

    expect(movie.isValid()).toEqual(false);
  });

  it('Returns invalid if release date is not present.', () => {
    movie = new Movie ({
      title: 'A Street Cat Named Bob',
    })

    expect(movie.isValid()).toEqual(false);
  });

});
