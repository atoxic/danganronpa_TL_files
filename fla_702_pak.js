function fla_702_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("000.bin"));
	p.add(loadGIM("001.png", new GIMInfo(480, 41, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(201, 37, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(421, 38, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(359, 272, 3, 256)));
	p.add(loadGIM("005.png", new GIMInfo(240, 272, 3, 256)));
	p.add(loadGIM("006.png", new GIMInfo(480, 84, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(421, 38, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(240, 272, 3, 256)));
	p.add(loadGIM("009.png", new GIMInfo(359, 272, 3, 256)));
	p.add(loadGIM("010.png", new GIMInfo(240, 272, 3, 256)));
	p.add(loadGIM("011.png", new GIMInfo(240, 272, 3, 256)));
	return(p);
}
