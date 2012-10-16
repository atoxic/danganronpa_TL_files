function tex_system_guide_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(loadGIM("000.png", new GIMInfo(9, 9, 3, 16)));
	p.add(loadGIM("001.png", new GIMInfo(480, 16, 3, 256)));
	p.add(loadGIM("002.png", new GIMInfo(480, 16, 3, 256)));
	p.add(loadGIM("003.png", new GIMInfo(480, 16, 3, 256)));
	p.add(loadGIM("004.png", new GIMInfo(480, 16, 3, 256)));
	p.add(loadGIM("005.png", new GIMInfo(16, 16, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(268, 230, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(28, 26, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(16, 16, 3, 256)));
	p.add(loadGIM("009.png", new GIMInfo(16, 16, 3, 256)));
	p.add(loadGIM("010.png", new GIMInfo(16, 16, 3, 256)));
	p.add(loadGIM("011.png", new GIMInfo(16, 16, 3, 256)));
	p.add(loadGIM("012.png", new GIMInfo(369, 34, 3, 256)));
	p.add(loadGIM("013.png", new GIMInfo(369, 34, 3, 256)));
	p.add(loadGIM("014.png", new GIMInfo(369, 34, 3, 256)));
	p.add(loadGIM("015.png", new GIMInfo(369, 34, 3, 256)));
	p.add(loadGIM("016.png", new GIMInfo(131, 27, 3, 16)));
	return(p);
}
