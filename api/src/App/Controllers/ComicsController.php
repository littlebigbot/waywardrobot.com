<?php

namespace App\Controllers;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;


class ComicsController
{

	protected $comicsService;

	public function __construct($service)
	{
		$this->comicsService = $service;
	}

	public function getNewest()
	{
		return new JsonResponse($this->comicsService->getNewest());
	}

	public function getAll()
	{
		return new JsonResponse($this->comicsService->getAll());
	}

	public function getOne($id)
	{
		return new JsonResponse($this->comicsService->getOne($id));
	}

	public function getPage($number, $page)
	{
		return new JsonResponse($this->comicsService->getPage($number, $page));
	}

	public function save(Request $request)
	{

		$comic = $this->getDataFromRequest($request);
		return new JsonResponse(array("id" => $this->comicsService->save($comic)));

	}

	public function update($id, Request $request)
	{
		$comic = $this->getDataFromRequest($request);
		$this->comicsService->update($id, $comic);
		return new JsonResponse($comic);

	}

	public function delete($id)
	{

		return new JsonResponse($this->comicsService->delete($id));

	}

	public function getDataFromRequest(Request $request)
	{
		return $request->request->get("comic");
	}
}
