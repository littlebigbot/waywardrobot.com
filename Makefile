SHELL=/bin/bash

install:
	npm install
	bower install
	gulp install
	cd api && composer install
	sqlite3 api/app.db < api/resources/sql/schema.sql
