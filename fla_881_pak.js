function fla_881_pak()
{
	var p = new BinPAK(16, false, false);
	p.add(loadBin("000.bin"));
	p.add(loadGIM("001.png", new GIMInfo(290, 63, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(421, 38, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(480, 272, 3, 256)));
	p.add(loadGIM("004.png", new GIMInfo(240, 272, 3, 256)));
	p.add(loadGIM("005.png", new GIMInfo(480, 99, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(240, 272, 3, 256)));
	return(p);
}
