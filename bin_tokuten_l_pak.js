function bin_tokuten_l_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(bin_tokuten_l_pak_000());
	p.add(bin_tokuten_l_pak_001());
	p.add(bin_tokuten_l_pak_002());
	p.add(bin_tokuten_l_pak_003());
	return(p);
}
function bin_tokuten_l_pak_000()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("000_000.bin"));
	p.add(loadGIM("000_001.png", new GIMInfo(480, 272, 3, 16)));
	p.add(loadGIM("000_002.png", new GIMInfo(480, 272, 3, 16)));
	p.add(loadGIM("000_003.png", new GIMInfo(480, 272, 3, 16)));
	p.add(loadGIM("000_004.png", new GIMInfo(480, 272, 3, 16)));
	return(p);
}
function bin_tokuten_l_pak_001()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("001_000.bin"));
	p.add(loadGIM("001_001.png", new GIMInfo(200, 17, 3, 16)));
	p.add(loadGIM("001_002.png", new GIMInfo(480, 39, 3, 16)));
	p.add(loadGIM("001_003.png", new GIMInfo(480, 26, 3, 16)));
	p.add(loadGIM("001_004.png", new GIMInfo(200, 17, 3, 16)));
	p.add(loadGIM("001_005.png", new GIMInfo(236, 17, 3, 16)));
	p.add(loadGIM("001_006.png", new GIMInfo(236, 17, 3, 16)));
	p.add(loadGIM("001_007.png", new GIMInfo(480, 39, 3, 16)));
	p.add(loadGIM("001_008.png", new GIMInfo(480, 39, 3, 16)));
	p.add(loadGIM("001_009.png", new GIMInfo(480, 39, 3, 16)));
	return(p);
}
function bin_tokuten_l_pak_002()
{
	var p = new BinPAK(16, false, false);
	p.add(loadBin("002_000.bin"));
	p.add(loadGIM("002_001.png", new GIMInfo(46, 47, 3, 256)));
	p.add(loadGIM("002_002.png", new GIMInfo(128, 32, 3, 16)));
	return(p);
}
function bin_tokuten_l_pak_003()
{
	var p = new BinPAK(16, false, false);
	p.add(loadBin("003_000.bin"));
	p.add(loadGIM("003_001.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("003_002.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("003_003.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("003_004.png", new GIMInfo(458, 198, 3, 16)));
	p.add(loadGIM("003_005.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("003_006.png", new GIMInfo(112, 20, 3, 16)));
	return(p);
}
