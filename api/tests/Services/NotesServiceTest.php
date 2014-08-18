<?php

namespace Tests\Services;
use Silex\Application;
use Silex\Provider\DoctrineServiceProvider;
use App\Services\ComicsService;


class ComicsServiceTest extends \PHPUnit_Framework_TestCase
{

    private $comicService;

    public function setUp()
    {
        $app = new Application();
        $app->register(new DoctrineServiceProvider(), array(
            "db.options" => array(
                "driver" => "pdo_sqlite",
                "memory" => true
            ),
        ));
        $this->comicService = new ComicsService($app["db"]);

        $stmt = $app["db"]->prepare("CREATE TABLE comics (id INTEGER PRIMARY KEY AUTOINCREMENT,comic VARCHAR NOT NULL)");
        $stmt->execute();
    }

    public function testGetAll()
    {
        $data = $this->comicService->getAll();
        $this->assertNotNull($data);
    }

    function testSave()
    {
        $comic = array("comic" => "arny");
        $data = $this->comicService->save($comic);
        $data = $this->comicService->getAll();
        $this->assertEquals(1, count($data));
    }

    function testUpdate()
    {
        $comic = array("comic" => "arny1");
        $this->comicService->save($comic);
        $comic = array("comic" => "arny2");
        $this->comicService->update(1, $comic);
        $data = $this->comicService->getAll();
        $this->assertEquals("arny2", $data[0]["comic"]);

    }

    function testDelete()
    {
        $comic = array("comic" => "arny1");
        $this->comicService->save($comic);
        $this->comicService->delete(1);
        $data = $this->comicService->getAll();
        $this->assertEquals(0, count($data));
    }

}
