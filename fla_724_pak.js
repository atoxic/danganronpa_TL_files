function fla_724_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("000.bin"));
	p.add(loadGIM("001.png", new GIMInfo(480, 280, 3, 256)));
	p.add(loadGIM("002.png", new GIMInfo(480, 88, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(283, 56, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(283, 56, 3, 16)));
	p.add(loadGIM("005.png", new GIMInfo(128, 128, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(512, 35, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(236, 240, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(172, 172, 3, 16)));
	p.add(loadGIM("009.png", new GIMInfo(234, 234, 3, 16)));
	p.add(loadGIM("010.png", new GIMInfo(338, 338, 3, 16)));
	p.add(loadGIM("011.png", new GIMInfo(236, 240, 3, 16)));
	return(p);
}
