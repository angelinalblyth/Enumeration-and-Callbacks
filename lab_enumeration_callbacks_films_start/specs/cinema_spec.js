const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  let moonlight;
  let bladeRunner;
  let dunkirk;
  let blackPanther;
  let trainspotting;
  let films;
  let cinema;

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function(){
    const expected = ['Moonlight', 'Blade Runner 2049', 'Dunkirk', 'Black Panther', 'T2 Trainspotting'];
    const actual = cinema.filmTitles();
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find a film by title', function(){
    const actual = cinema.findFilm('Dunkirk');
    assert.deepStrictEqual(actual, dunkirk);
  });

  it('should be able to filter films by genre', function(){
    const expected = [moonlight, trainspotting];
    const actual = cinema.getFilmsByGenre('drama')
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether there are some films from a particular year', function(){
    const expected = true;
    const actual = cinema.checkFilmsForYear(2017);
    assert.deepStrictEqual(actual,expected);
  });

  it('should be able to check whether there are no films from a particular year', function(){
    const expected = false;
    const actual = cinema.checkFilmsForYear(2004);
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to check whether all films are over a particular length', function(){
    const expected = true;
    const actual = cinema.checkFilmsAreOverLength(90);
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate total running time of all films', function(){
    const expected = 622;
    const actual = cinema.getRuntimeForAllFilms(films);
    assert.deepStrictEqual(actual, expected);
  });

  it('Cinema should be able to filter films by year', function(){
    const expected = [blackPanther];
    const actual = cinema.filmsByProperty(film.year, 2018);
    assert.deepStrictEqual(actual, expected);
  })

});

module.exports = Cinema;
