SHELL=/bin/bash

install:
	npm install
	bower install
	gulp install
	cd api && composer install
	sqlite3 app.db < resources/sql/schema.sql
