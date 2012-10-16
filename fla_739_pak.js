function fla_739_pak()
{
	var p = new BinPAK(16, false, false);
	p.add(loadBin("000.bin"));
	p.add(loadGIM("001.png", new GIMInfo(243, 272, 3, 256)));
	p.add(loadGIM("002.png", new GIMInfo(243, 272, 3, 256)));
	return(p);
}
