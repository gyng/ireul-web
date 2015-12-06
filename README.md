# ireul-web

[![Build Status](https://travis-ci.org/gyng/ireul-web.svg)](https://travis-ci.org/gyng/ireul-web)

A Rails client for [Ireul](https://github.com/infinityb/ireul/).

## Dev setup
1. [Install ImageMagick](http://www.imagemagick.org/index.php)
2. Clone
6. Configure `config/ireul.yml` with Ireu
3. `bundle update`
4. `bundle install`
5. `rake db:seed`l server url/port
7. `bundle exec rails server`
8. `rails runner script/create_user.rb`

## Test
`rake test`

## Notes and useful commands
* `rake db:fixtures:dump`
* `Gemfile.lock` is in `.gitignore` due to cross-platform issues [1](https://github.com/bundler/bundler-features/issues/4). Also helps with running on Travis CI as local gems are used in this app.

### Installing on Windows
* Ruby22 + bcrypt — [1](https://github.com/codahale/bcrypt-ruby/issues/116), [2](https://www.alib.jp/entries/bcrypt_ext_load_error_on_ruby21x), make sure `git`, DevKit `dk/bin` and `dk/mingw/bin` are in PATH
* [ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows)
