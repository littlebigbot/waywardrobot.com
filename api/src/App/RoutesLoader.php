<?php

namespace App;

use Silex\Application;

class RoutesLoader
{
	private $app;

	public function __construct(Application $app)
	{
		$this->app = $app;
		$this->instantiateControllers();

	}

	private function instantiateControllers()
	{
		$this->app['comics.controller'] = $this->app->share(function () {
			return new Controllers\comicsController($this->app['comics.service']);
		});
	}

	public function bindRoutesToControllers()
	{
		$api = $this->app["controllers_factory"];

		$api->get('/comic', "comics.controller:getMostRecent");
		$api->get('/comic/{id}', "comics.controller:getOne");
		$api->get('/comics', "comics.controller:getAll");
		$api->get('/comics/{number}/{page}', "comics.controller:getPage");
		$api->post('/comics', "comics.controller:save");
		$api->post('/comics/{id}', "comics.controller:update");
		$api->delete('/comics/{id}', "comics.controller:delete");

		$this->app->mount($this->app["api.endpoint"].'/'.$this->app["api.version"], $api);
	}
}

