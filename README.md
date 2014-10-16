Wayward Robot
=============

### 1. Installation

- `git clone git@github.com:littlebigbot/waywardrobot.com.git && cd waywardrobot.com`
- `make install`
- 'cd api'
- `composer install`
- `sqlite3 app.db < resources/sql/schema.sql`
- Run php server `php -S 0:9001 -t web/`
- `cd ../`
- Run livereload server: `gulp`
