<?php

namespace App;

use Silex\Application;

class ServicesLoader
{
    protected $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function bindServicesIntoContainer()
    {
        $this->app['comics.service'] = $this->app->share(function () {
            return new Services\ComicsService($this->app["db"]);
        });
    }
}

