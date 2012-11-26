function fla_773_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("000.bin"));
	p.add(loadGIM("001.png", new GIMInfo(445, 263, 3, 256)));
	p.add(loadGIM("002.png", new GIMInfo(437, 67, 3, 256)));
	p.add(loadGIM("003.png", new GIMInfo(222, 219, 3, 256)));
	p.add(loadGIM("004.png", new GIMInfo(222, 219, 3, 256)));
	p.add(loadGIM("../fla_747_pak/005.png", new GIMInfo(456, 53, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(334, 60, 3, 16)));
	p.add(loadGIM("../fla_747_pak/007.png", new GIMInfo(304, 21, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(8, 8, 3, 16)));
	return(p);
}
