function system_dialogue_pak()
{
	var p = new BinPAK(16, false, false);
	p.add(loadBin("000.bin"));
	p.add(loadGIM("001.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(458, 198, 3, 16)));
	p.add(loadGIM("005.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(112, 20, 3, 16)));
	return(p);
}
