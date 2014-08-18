CREATE TABLE comics (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR NOT NULL,
    subtitle VARCHAR NOT NULL,
    post_date DATE NOT NULL,
    post_content VARCHAR,
    slug VARCHAR NOT NULL,
    comic_thumb VARCHAR NOT NULL,
    comic_medium VARCHAR NOT NULL,
    comic_full VARCHAR NOT NULL
);

insert into comics (
	title,
	subtitle,
	post_date,
	post_content,
	slug,
	comic_thumb,
	comic_medium,
	comic_full
	) values(
	'Lorem ipsum Sint dolore minim cillum eiusmod cupidatat',
	'Lorem ipsutdsfd das',
	'2012-06-01',
	'Lorem ipsum Laborum in ut laboris amet amet enim in officia magna labore pariatur Duis est sed consectetur occaecat eiusmod dolore dolor nostrud Excepteur consequat fugiat officia.',
	'lorem-ipsum-sint-dolore-minim-cillum-eiusmod-cupidatat',
	'testing_t.jpg',
	'testing_m.jpg',
	'testing_f.jpg'
);
insert into comics (
	title,
	subtitle,
	post_date,
	post_content,
	slug,
	comic_thumb,
	comic_medium,
	comic_full
	) values(
	'Lorem  DDADS ADFasd  adsfdsfadfdsfeiusmod cupidatat',
	'Lorem ipsutdsfd das',
	'2012-06-02',
	'Lorem ipsum Laborum in ut laboris amet amet enim in officia magna labore pariatur Duis est sed consectetur occaecat eiusmod dolore dolor nostrud Excepteur consequat fugiat officia.',
	'lorem-asfadf-sint-dolore-minaim-cillum-eiusmod-cupidatat',
	'testing_t.jpg',
	'testing_m.jpg',
	'testing_f.jpg'
);
insert into comics (
	title,
	subtitle,
	post_date,
	post_content,
	slug,
	comic_thumb,
	comic_medium,
	comic_full
	) values(
	'LDS ADFasd  adsfdsfadfdsfeiusmod cupidatat',
	'Lorem ipsutdsfd das',
	'2012-06-03',
	'Lorem ipsum Laborum in ut laboris amet amet enim in officia magna labore pariatur Duis est sed consectetur occaecat eiusmod dolore dolor nostrud Excepteur consequat fugiat officia.',
	'lorem-ipsum-sint-minim-cillum-eiusmod-cupidatat',
	'testing_t.jpg',
	'testing_m.jpg',
	'testing_f.jpg'
);
insert into comics (
	title,
	subtitle,
	post_date,
	post_content,
	slug,
	comic_thumb,
	comic_medium,
	comic_full
	) values(
	'asdfasdsfdsfadfdsfeiusmod cupidatat',
	'Everythings good',
	'2012-06-06',
	'Lorem ipsum Laborum in ut laboris amet amet enim in officia magna labore pariatur Duis est sed consectetur occaecat eiusmod dolore dolor nostrud Excepteur consequat fugiat officia.',
	'lorem-ipsum-sint-dolore-cupidatat',
	'testing_t.jpg',
	'testing_m.jpg',
	'testing_f.jpg'
	);
