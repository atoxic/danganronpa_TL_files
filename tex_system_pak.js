function tex_system_pak()
{
	var p = new BinPAK(16, false, true);
	p.add(loadGIM("000.png", new GIMInfo(64, 64, 3, 256)));
	p.add(loadGIM("001.png", new GIMInfo(16, 32, 3, 16)));
	p.add(loadGIM("002.png", new GIMInfo(16, 32, 3, 16)));
	p.add(loadGIM("003.png", new GIMInfo(16, 32, 3, 16)));
	p.add(loadGIM("004.png", new GIMInfo(34, 16, 3, 16)));
	p.add(loadGIM("005.png", new GIMInfo(32, 32, 3, 16)));
	p.add(loadGIM("006.png", new GIMInfo(32, 32, 3, 16)));
	p.add(loadGIM("007.png", new GIMInfo(32, 32, 3, 16)));
	p.add(loadGIM("008.png", new GIMInfo(32, 32, 3, 16)));
	p.add(loadGIM("009.png", new GIMInfo(64, 64, 3, 16)));
	p.add(loadGIM("010.png", new GIMInfo(95, 11, 3, 16)));		// Naegi
	p.add(loadGIM("011.png", new GIMInfo(124, 11, 3, 16)));		// Ishimaru
	p.add(loadGIM("012.png", new GIMInfo(111, 11, 3, 16)));		// Togami
	p.add(loadGIM("013.png", new GIMInfo(107, 11, 3, 16)));		// Mondo Oowada
	p.add(loadGIM("014.png", new GIMInfo(94, 11, 3, 16)));		// Leon Kuwata
	p.add(loadGIM("015.png", new GIMInfo(101, 11, 3, 16)));		// Yamada
	p.add(loadGIM("016.png", new GIMInfo(134, 11, 3, 16)));		// Hagakure
	p.add(loadGIM("017.png", new GIMInfo(112, 11, 3, 16)));		// Maizono
	p.add(loadGIM("018.png", new GIMInfo(102, 11, 3, 16)));		// Kirigiri
	p.add(loadGIM("019.png", new GIMInfo(81, 11, 3, 16)));		// Asahina
	p.add(loadGIM("020.png", new GIMInfo(101, 11, 3, 16)));		// Fukawa
	p.add(loadGIM("021.png", new GIMInfo(105, 11, 3, 16)));		// Oogami
	p.add(loadGIM("022.png", new GIMInfo(39, 11, 3, 16)));		// Celestia
	p.add(loadGIM("023.png", new GIMInfo(110, 11, 3, 16)));		// Junko
	p.add(loadGIM("024.png", new GIMInfo(109, 11, 3, 16)));		// Fujisaki
	p.add(loadGIM("025.png", new GIMInfo(72, 11, 3, 16)));		// Monokuma
	p.add(loadGIM("023.png", new GIMInfo(110, 11, 3, 16)));		// Junko (again)
	p.add(loadGIM("027.png", new GIMInfo(69, 11, 3, 16)));		// Alter Ego
	p.add(loadGIM("028.png", new GIMInfo(107, 11, 3, 16)));		// Genocider Shou
	p.add(loadGIM("029.png", new GIMInfo(63, 11, 3, 16)));		// Principal
	p.add(loadGIM("030.png", new GIMInfo(101, 11, 3, 16)));		// Makoto's Mom
	p.add(loadGIM("031.png", new GIMInfo(96, 11, 3, 16)));		// Makoto's Dad
	p.add(loadGIM("032.png", new GIMInfo(113, 11, 3, 16)));		// Makoto's Sister
	p.add(loadGIM("033.png", new GIMInfo(150, 11, 3, 16)));		// Ishimaru and Oowada
	p.add(loadGIM("034.png", new GIMInfo(92, 11, 3, 16)));		// Daia Oowada
	p.add(loadGIM("035.png", new GIMInfo(28, 11, 3, 16)));		// "???"
	p.add(loadGIM("036.png", new GIMInfo(69, 11, 3, 16)));		// Narration
	p.add(loadGIM("037.png", new GIMInfo(64, 64, 3, 16)));
	p.add(loadGIM("038.png", new GIMInfo(16, 16, 3, 256)));
	p.add(loadGIM("039.png", new GIMInfo(32, 64, 3, 16)));
	p.add(loadGIM("040.png", new GIMInfo(32, 64, 3, 16)));
	p.add(loadGIM("041.png", new GIMInfo(32, 64, 3, 16)));
	p.add(loadGIM("042.png", new GIMInfo(256, 32, 3, 256)));
	p.add(loadGIM("043.png", new GIMInfo(256, 32, 3, 256)));
	p.add(loadGIM("044.png", new GIMInfo(128, 32, 3, 256)));
	p.add(loadGIM("045.png", new GIMInfo(128, 32, 3, 256)));
	p.add(loadGIM("046.png", new GIMInfo(256, 32, 3, 256)));
	p.add(loadGIM("047.png", new GIMInfo(256, 32, 3, 256)));
	p.add(loadGIM("048.png", new GIMInfo(256, 32, 3, 256)));
	p.add(loadGIM("049.png", new GIMInfo(256, 32, 3, 256)));
	p.add(loadGIM("050.png", new GIMInfo(32, 32, 3, 256)));
	p.add(loadGIM("051.png", new GIMInfo(23, 39, 3, 16)));
	p.add(loadGIM("052.png", new GIMInfo(23, 39, 3, 16)));
	p.add(loadGIM("053.png", new GIMInfo(23, 39, 3, 16)));
	p.add(loadGIM("054.png", new GIMInfo(22, 39, 3, 16)));
	p.add(loadGIM("055.png", new GIMInfo(22, 39, 3, 16)));
	p.add(loadGIM("056.png", new GIMInfo(22, 39, 3, 16)));
	p.add(loadGIM("057.png", new GIMInfo(44, 39, 3, 16)));
	p.add(loadGIM("058.png", new GIMInfo(44, 39, 3, 16)));
	p.add(loadGIM("059.png", new GIMInfo(44, 39, 3, 16)));
	p.add(loadGIM("060.png", new GIMInfo(6, 17, 3, 16)));
	p.add(loadGIM("061.png", new GIMInfo(6, 17, 3, 16)));
	p.add(loadGIM("062.png", new GIMInfo(6, 17, 3, 16)));
	p.add(loadGIM("063.png", new GIMInfo(6, 17, 3, 16)));
	p.add(loadGIM("064.png", new GIMInfo(128, 13, 3, 16)));
	return(p);
}
