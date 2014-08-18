<?php

namespace App\Services;

class ComicsService extends BaseService
{
	public function getMostRecent()
	{
		return $this->db->fetchAll("SELECT * FROM comics ORDER BY post_date DESC LIMIT 1");
	}

	public function getAll()
	{
		return $this->db->fetchAll("SELECT * FROM comics");
	}

	public function getOne($id)
	{
		return $this->db->fetchAll("SELECT * FROM comics WHERE id = ?", array($id));
	}

	public function getPage($number, $page)
	{
		$base = $number * $page;
		return $this->db->fetchAll("SELECT * FROM comics LIMIT " . $base . ", " . $number);
	}

	function save($comic)
	{
		$this->db->insert("comics", $comic);
		return $this->db->lastInsertId();
	}

	function update($id, $comic)
	{
		return $this->db->update('comics', $comic, ['id' => $id]);
	}

	function delete($id)
	{
		return $this->db->delete("comics", array("id" => $id));
	}

}
