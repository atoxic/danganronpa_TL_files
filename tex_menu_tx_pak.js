function tex_menu_tx_pak()
{
	var p = new BinPAK(16, false, false);
	p.add(loadGIM("000.png", new GIMInfo(120, 38, 3, 16)));
	p.add(loadGIM("001.png", new GIMInfo(94, 16, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(216, 32, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(216, 32, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(128, 16, 3, 16)));
	p.add(loadGIM("005.png", new GIMInfo(64, 16, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(64, 16, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(64, 16, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(128, 16, 3, 16)));
	p.add(loadGIM("009.png", new GIMInfo(164, 33, 3, 16)));
	p.add(loadGIM("010.png", new GIMInfo(256, 512, 3, 16)));
	return(p);
}
