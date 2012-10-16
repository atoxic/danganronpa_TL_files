function bin_diff_chapt_l_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(bin_diff_chapt_l_pak_000());
	p.add(bin_diff_chapt_l_pak_001());
	return(p);
}
function bin_diff_chapt_l_pak_000()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("000_000.bin"));
	p.add(loadGIM("000_001.png", new GIMInfo(459, 222, 3, 16)));
	p.add(loadGIM("000_002.png", new GIMInfo(112, 20, 3, 16)));
	p.add(loadGIM("000_003.png", new GIMInfo(149, 18, 3, 16)));
	p.add(loadGIM("000_004.png", new GIMInfo(149, 18, 3, 16)));
	p.add(loadGIM("000_005.png", new GIMInfo(111, 19, 3, 16)));
	p.add(loadGIM("000_006.png", new GIMInfo(111, 19, 3, 16)));
	p.add(loadGIM("000_007.png", new GIMInfo(180, 18, 3, 16)));
	p.add(loadGIM("000_008.png", new GIMInfo(311, 19, 3, 16)));
	p.add(loadGIM("000_009.png", new GIMInfo(311, 19, 3, 16)));
	p.add(loadGIM("000_010.png", new GIMInfo(14, 12, 3, 16)));
	p.add(loadGIM("000_011.png", new GIMInfo(173, 19, 3, 16)));
	return(p);
}
function bin_diff_chapt_l_pak_001()
{
	var p = new BinPAK(16, false, true);
	p.add(loadBin("001_000.bin"));
	p.add(loadGIM("diff1.png", new GIMInfo(110, 18, 3, 16)));		// Kind
	p.add(loadGIM("001_002.png", new GIMInfo(111, 19, 3, 16)));		
	p.add(loadGIM("diff3.png", new GIMInfo(110, 18, 3, 16)));		// Mean
	p.add(loadGIM("diff1.png", new GIMInfo(110, 18, 3, 16)));		// Kind
	p.add(loadGIM("diff3.png", new GIMInfo(110, 18, 3, 16)));		// Mean
	p.add(loadGIM("diff2.png", new GIMInfo(110, 18, 3, 16)));		// Alright
	p.add(loadGIM("diff2.png", new GIMInfo(110, 18, 3, 16)));		// Alright
	return(p);
}
