function tex_briefing_pak()
{
	var p = new BinPAK(16, false, false);
	p.add(loadGIM("000.png", new GIMInfo(480, 14, 3, 16)));
	p.add(loadGIM("001.png", new GIMInfo(16, 16, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(480, 272, 3, 256)));
	p.add(loadGIM("003.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("005.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("009.png", new GIMInfo(177, 16, 3, 16)));
	p.add(loadGIM("010.png", new GIMInfo(188, 188, 3, 16)));
	p.add(loadGIM("011.png", new GIMInfo(10, 14, 3, 16)));
	p.add(loadGIM("012.png", new GIMInfo(41, 31, 3, 16)));
	p.add(loadGIM("013.png", new GIMInfo(128, 32, 3, 16)));
	p.add(loadGIM("014.png", new GIMInfo(64, 16, 3, 16)));
	p.add(loadGIM("015.png", new GIMInfo(220, 15, 3, 16)));
	p.add(loadGIM("016.png", new GIMInfo(220, 15, 3, 16)));
	p.add(loadGIM("017.png", new GIMInfo(220, 15, 3, 16)));
	p.add(loadGIM("018.png", new GIMInfo(220, 15, 3, 16)));
	p.add(loadGIM("019.png", new GIMInfo(256, 20, 3, 16)));
	p.add(loadGIM("020.png", new GIMInfo(256, 20, 3, 16)));
	p.add(loadGIM("021.png", new GIMInfo(256, 20, 3, 16)));
	p.add(loadGIM("022.png", new GIMInfo(256, 20, 3, 16)));
	p.add(loadGIM("023.png", new GIMInfo(480, 16, 3, 16)));
	p.add(loadGIM("024.png", new GIMInfo(16, 272, 3, 16)));
	p.add(loadGIM("025.png", new GIMInfo(120, 16, 3, 16)));
	p.add(loadGIM("026.png", new GIMInfo(120, 16, 3, 16)));
	return(p);
}
