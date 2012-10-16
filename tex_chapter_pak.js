function tex_chapter_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(loadGIM("000.png", new GIMInfo(158, 39, 3, 16)));
	p.add(loadGIM("001.png", new GIMInfo(158, 39, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(70, 70, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(70, 70, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(70, 70, 3, 16)));
	p.add(loadGIM("005.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("009.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("010.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("011.png", new GIMInfo(134, 38, 3, 16)));
	p.add(loadGIM("012.png", new GIMInfo(51, 26, 3, 16)));
	p.add(loadGIM("013.png", new GIMInfo(51, 26, 3, 16)));
	p.add(loadGIM("014.png", new GIMInfo(51, 26, 3, 16)));
	p.add(loadGIM("015.png", new GIMInfo(51, 26, 3, 16)));
	p.add(loadGIM("016.png", new GIMInfo(136, 23, 3, 16)));
	p.add(loadGIM("017.png", new GIMInfo(136, 23, 3, 16)));
	p.add(loadGIM("018.png", new GIMInfo(136, 23, 3, 16)));
	p.add(loadGIM("019.png", new GIMInfo(136, 23, 3, 16)));
	p.add(loadGIM("020.png", new GIMInfo(136, 23, 3, 16)));
	return(p);
}
