loadScript("chapter00_common.js");

/**
 * Day zero: Makoto wakes up in Mount Hope Academy
 * @method e00_002_000_lin
 **/
function e00_002_000_lin()
{
	var s = new LINScript();
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x26, [0x0D, 0x20, 0x00]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x00, 0x00, 0x00, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x11]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x0E, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.op(0x23, [0x1A, 0x00, 0x00, 0x00, 0x00]);
	s.playBGM(7, 100, 0);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("......\n");    // "……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.showLine("............\n");    // "…………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 3: "Makoto Naegi"
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 4: "Makoto Naegi"
	s.showLine("...Hm?\n");    // "…ん？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 5: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x06, [0x02, 0xE5, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x06, [0x02, 0xE5, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playVoice("Makoto Naegi", 99, 44);
	s.showLine("H-...Huh...?\n");    // "あ…れ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 6: "Makoto Naegi"
	s.showLine("Wh-Where is this...?\n");    // "こ、ここは…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 7: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I woke up on a wooden desk.\n<CLT>");    // "<CLT 4>ボクは硬い机の上で目を覚ました。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 8: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My body feels sluggish all over...\n<CLT>");    // "<CLT 4>体がやけにダルい…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 9: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Sure, I've slept through boring classes before...\n<CLT>");    // "<CLT 4>確かに、退屈な授業中には、\n居眠りをする事もあるボクだけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 10: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But...\nwhy was I sleeping on this desk?\n<CLT>");    // "<CLT 4>でも…今はどうして机の上で寝てるんだ？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>And I've never seen this classroom before...\n<CLT>");    // "<CLT 4>それに、そもそも見覚えのない教室…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 12: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("What's... going on...?\n");    // "どう…なってるんだ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 13: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.playBGM(255, 90, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE5, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.playBGM(32, 100, 60);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x25, [0x0E, 0x01]);
	s.op(0x15, [0x01, 0x01, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Welcome to Mount Hope Academy...\nFirst, let me explain the controls.\n<CLT>");    // "<CLT 23>希望ヶ峰学園へようこそ…\nまずは、簡単な操作説明をさせて頂きます。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 14: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>You can control the <CLT><CLT 3>cursor<CLT><CLT 23> with the analog pad.\n<CLT>");    // "<CLT 23>アナログパッドで、画面上の<CLT><CLT 3>照準<CLT><CLT 23>をご操作頂けます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 15: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>If the cursor reacts to something,\nyou can press <CLT><CLT 3>the " + config.getConfirmButton() + " button<CLT><CLT 23> to <CLT><CLT 3>investigate<CLT><CLT 23> it.\n<CLT>");    // "<CLT 23>照準に反応があった際に、<CLT><CLT 3>○ボタン<CLT><CLT 23>を押して頂くと、\nその対象を<CLT><CLT 3>調べる<CLT><CLT 23>事が可能でございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 16: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>You can also use <CLT><CLT 3>the D-pad and shoulder buttons<CLT><CLT 23>\nto control the <CLT><CLT 3>camera angle.\n<CLT>");    // "<CLT 23>また、<CLT><CLT 3>方向キー、Ｌボタン、Ｒボタン<CLT><CLT 23>で、\n<CLT><CLT 3>視点<CLT><CLT 23>をご操作頂けます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 17: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Please investigate this room.\n<CLT>");    // "<CLT 23>まずは、教室の中をお調べください。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 18: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[0]);    // "<CLT 4>テレビがある…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[1]);    // "<CLT 4>政府公認の学園なんだから、\n教室にテレビくらいあってもおかしくないけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 20: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[2]);    // "<CLT 4>なんだろう…\n何か異様な雰囲気を感じる。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 21: "Makoto Naegi"
	var lines_camera = ["<CLT 4>Is this... a security camera?\n<CLT>",
						"<CLT 4>Well, the world has been going to hell recently...\nMaybe they added them to prevent break-ins.\n<CLT>"];
	
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[0]);    // "<CLT 4>これって…監視カメラかな？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 22: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[1]);    // "<CLT 4>最近は物騒だし…\n不審者が入ってこないように設置してるのかも。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 23: "Makoto Naegi"
	var lines_clock = ["<CLT 4>The time is... somehow 8:00 A.M. now.\n<CLT>",
						"<CLT 4>When I came in, it was 7:10...\nSo it's been almost an hour...\n<CLT>"];
	
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x16]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_clock[0]);    // "<CLT 4>時刻は…いつの間にか８時を回っている。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 24: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_clock[1]);    // "<CLT 4>ボクが玄関ホールに入ったのが\n７時１０分くらいだったから…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 25: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>あれから１時間近く経っているのか…\n<CLT>");    // "<CLT 4>あれから１時間近く経っているのか…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 26: "Makoto Naegi"
	var lines_plate = ["Wh-What... is this...?\n",
						"<CLT 4>There should be a window here...\nInstead, there's...\n<CLT>",
						"<CLT 4>a metal plate bolted into the wall.\n<CLT>",
						"<CLT 4>When I knock on it...\n<CLT>",
						"<CLT 23>\"clang clang\"...\n<CLT>",
						"It's really a metal plate...\nA pretty thick one.\n",
						"<CLT 4>No, the details aren't important...\nWhy is there a metal plate here?\n<CLT>"];
	
	s.op(0x25, [0x01, 0x00]);
	s.op(0x26, [0x0D, 0x00, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x02, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF5]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF5]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[0]);    // "な、なんだよ…これ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 27: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[1]);    // "<CLT 4>本来の教室なら窓があるべき場所…\nだが、そこには…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 28: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[2]);    // "<CLT 4>鉄板のような物が打ち付けられていた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 29: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[3]);    // "<CLT 4>拳で叩いてみると…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 30: "Makoto Naegi"
	s.playSoundEffectA(219, 100);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x03, [0x17]);
	s.showLine(lines_plate[4]);    // "<CLT 23>「コンコン…」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 31: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[5]);    // "やっぱり鉄板…だな。\nしかも、かなり頑丈で分厚そうだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 32: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[6]);    // "<CLT 4>いや、そんな分析よりも…\nそもそも、どうして鉄板が？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();

	
	// Line 33: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x26, [0x0D, 0x01, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x02, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF6]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF6]);
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[0]);    // "な、なんだよ…これ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 34: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[1]);    // "<CLT 4>本来の教室なら窓があるべき場所…\nだが、そこには…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 35: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[2]);    // "<CLT 4>鉄板のような物が打ち付けられていた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 36: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[3]);    // "<CLT 4>拳で叩いてみると…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 37: "[No Name]"
	s.playSoundEffectA(219, 100);
	s.op(0x25, [0x02, 0x00]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine(lines_plate[4]);    // "<CLT 23>「コンコン…」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 38: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[5]);    // "やっぱり鉄板…だな。\nしかも、かなり頑丈で分厚そうだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 39: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>No, the details aren't important...\n<CLT>");    // "<CLT 4>いや、そんな分析よりも…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 40: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Why is there a metal plate here?\n<CLT>");    // "<CLT 4>そもそも、どうして鉄板が？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 41: "Makoto Naegi"
	var lines_desk = ["<CLT 4>There's still some drool on the desk\nI was sleeping on...\n<CLT>",
						"Gotta clean it later...\n",
						"<CLT 4>And on top of the desk is...\n<CLT>",
						"\"School... Guide\"?\n",
						"What a cheap-looking pamphlet...\nAnd it's even hand-written...\n",
						"<CLT 4>\"The new school year is upon us...\n<CLT>",
						"<CLT 4>so you guys should start fresh\nand make this school your new world.\"...\n<CLT>",
						"What is this...\nSome kind of a bad joke?\n"];
						
	
	s.op(0x25, [0x01, 0x00]);
	s.op(0x26, [0x0D, 0x01, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x02, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF7]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF7]);
	s.op(0x29, [0x19]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[0]);    // "<CLT 4>さっきまでボクが突っ伏していた机…\nヨダレの跡がくっきりと残っている。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 42: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_desk[1]);    // "後で拭いておかなきゃな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 43: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[2]);    // "<CLT 4>で、その机の上には…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x06, [0x0B, 0xB8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.waitForInput();


	// Line 44: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine(lines_desk[3]);    // "入学…案内……？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 45: "Makoto Naegi"
	s.showLine(lines_desk[4]);    // "安っぽいパンフレット…\nしかも手書きだし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 46: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[5]);    // "<CLT 4>『新しい学期が始まりました…』\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 47: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[6]);    // "<CLT 4>『心機一転、これからは、この学園内が\n　オマエラの新しい世界となります。』か…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 48: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xB8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_desk[7]);    // "なんだ、これ…\n誰かの悪ふざけか？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 49: "Makoto Naegi"
	var line_lookaround = "<CLT 4>I should look around first\nbefore leaving the classroom...\n<CLT>";
	
	s.op(0x25, [0x01, 0x00]);
	s.op(0x26, [0x0D, 0x02, 0x01]);
	s.op(0x35, [0x0D, 0x00, 0x00, 0x01, 0x06, 0x0D, 0x01, 0x00, 0x01, 0x06, 0x0D, 0x02, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF8]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF8]);
	s.op(0x29, [0x1B]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_lookaround);    // "<CLT 4>外に出る前に、教室の中を調べてみよう…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 50: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFE]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_lookaround);    // "<CLT 4>外に出る前に、教室の中を調べてみよう…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 51: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.op(0x2A, [0x00, 0x00]);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Umm, judging from this situation...\n");    // "えーっと、この状況から察するに…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 52: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I fainted in the entrance hall from anxiety,\nand somone carried me here... right?\n<CLT>");    // "<CLT 4>緊張のあまり玄関ホールで立ちくらみしたボクを\n誰かがこの教室まで運んでくれた…とか？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 53: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This means that this classroom is...\n<CLT>");    // "<CLT 4>とすると、この教室って…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>in Mount Hope Academy.\n<CLT>");    // "<CLT 4>希望ヶ峰学園の…教室って事になるよな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("But... even then...\n");    // "でも…それにしては…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 56: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...This is strange. Unbelievably strange.\n<CLT>");    // "<CLT 4>…異様だ。とてつもなく異様だ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 57: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The metal plates bolted to the windows...\nmakes me feel like I'm shut in a prison...\n<CLT>");    // "<CLT 4>窓に打ちつけられた鉄板…\nまるで牢獄のような圧迫感…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 58: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I don't understand this at all...\n<CLT>");    // "<CLT 4>意味不明で…理解不能…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 59: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Anyway... I should go back\nto the entrance hall...\n");    // "とりあえず…もう１度玄関ホールに戻ってみようかな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 60: "Makoto Naegi"
	s.showLine("It's past the time on the letter,\nso there may be other students there now...\n");    // "集合時間を過ぎてるし、\n他の新入生が集まっているかもしれない…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 61: "[No Name]"
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>You can exit rooms by pressing <CLT><CLT 3>the " + config.getCancelButton() + " button.\n<CLT>");    // "<CLT 23><CLT><CLT 3>×ボタン<CLT><CLT 23>を押して頂くと、\n部屋から出る事が可能でございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();

	// Same as 18-20
	// Line 62: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x26, [0x00, 0x0C, 0x01]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF9]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[0]);    // "<CLT 4>テレビがある…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 63: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[1]);    // "<CLT 4>政府公認の学園なんだから、\n教室にテレビくらいあってもおかしくないけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 64: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_TV[2]);    // "<CLT 4>なんだろう…\n何か異様な雰囲気を感じる。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 65: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[0]);    // "<CLT 4>これって…監視カメラかな？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 66: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[1]);    // "<CLT 4>最近は物騒だし…\n不審者が入ってこないように設置してるのかも。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 67: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x16]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_clock[0]);    // "<CLT 4>時刻は…いつの間にか８時を回っている。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 68: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_clock[1]);    // "<CLT 4>ボクが玄関ホールに入ったのが\n７時１０分くらいだったから…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();

	
	/*
	// Line 69: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>あれから１時間近く経っているのか…\n<CLT>");    // "<CLT 4>あれから１時間近く経っているのか…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 70: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[0]);    // "な、なんだよ…これ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 71: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[1]);    // "<CLT 4>本来の教室なら窓があるべき場所…\nだが、そこには…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 72: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[2]);    // "<CLT 4>鉄板のような物が打ち付けられていた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 73: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[3]);    // "<CLT 4>拳で叩いてみると…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 74: "Makoto Naegi"
	s.playSoundEffectA(219, 100);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x03, [0x17]);
	s.showLine(lines_plate[4]);    // "<CLT 23>「コンコン…」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 75: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[5]);    // "やっぱり鉄板…だな。\nしかも、かなり頑丈で分厚そうだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 76: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[6]);    // "<CLT 4>いや、そんな分析よりも…\nそもそも、どうして鉄板が？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 77: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[0]);    // "な、なんだよ…これ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 78: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[1]);    // "<CLT 4>本来の教室なら窓があるべき場所…\nだが、そこには…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 79: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[2]);    // "<CLT 4>鉄板のような物が打ち付けられていた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 80: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[3]);    // "<CLT 4>拳で叩いてみると…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 81: "Makoto Naegi"
	s.playSoundEffectA(219, 100);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x03, [0x17]);
	s.showLine(lines_plate[4]);    // "<CLT 23>「コンコン…」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 82: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_plate[5]);    // "やっぱり鉄板…だな。\nしかも、かなり頑丈で分厚そうだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 83: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_plate[6]);    // "<CLT 4>いや、そんな分析よりも…\nそもそも、どうして鉄板が？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 84: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x19]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[0]);    // "<CLT 4>さっきまでボクが突っ伏していた机…\nヨダレの跡がくっきりと残っている。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 85: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_desk[1]);    // "後で拭いておかなきゃな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 86: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[2]);    // "<CLT 4>で、その机の上には…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 87: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xB8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_desk[3]);    // "入学…案内……？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	s.showLine(lines_desk[4]);    // "安っぽいパンフレット…\nしかも手書きだし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 89: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[5]);    // "<CLT 4>『新しい学期が始まりました…』\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 90: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_desk[6]);    // "<CLT 4>『心機一転、これからは、この学園内が\n　オマエラの新しい世界となります。』か…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 91: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xB8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine(lines_desk[7]);    // "入学案内に“オマエラ”って……\nこれって誰かの悪ふざけか？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 97: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1B]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x12, 0x00]);
	s.op(0x25, [0x12, 0x03]);
	s.op(0x34, [0x01, 0xFA]);
	s.op(0x2B, [0x01]);
	s.showLine("Yes\n");    // "はい\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x34, [0x00, 0x01]);
	s.op(0x2B, [0x02]);
	s.showLine("No\n");    // "いいえ\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x2B, [0x12]);
	s.op(0x2B, [0x13]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Exit the room?\n<CLT>");    // "<CLT 23>外に出ますか？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x2B, [0xFF]);
	s.op(0x2A, [0x01, 0xFA]);
	s.op(0x29, [0xFE]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x12, 0x00]);
	s.op(0x25, [0x12, 0x03]);
	s.op(0x34, [0x01, 0xFB]);
	s.op(0x2B, [0x01]);
	s.showLine("Yes\n");    // "はい\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x34, [0x00, 0x01]);
	s.op(0x2B, [0x02]);
	s.showLine("No\n");    // "いいえ\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x2B, [0x12]);
	s.op(0x2B, [0x13]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Exit the room?\n<CLT>");    // "<CLT 23>外に出ますか？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x2B, [0xFF]);
	s.op(0x2A, [0x01, 0xFB]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF9]);
	s.op(0x2A, [0x00, 0x01]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x02]);
	s.playSoundEffectA(145, 100);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.goToScript(0, 3, 1);
	s.op(0x1A);
	s.op(0x1A);


	// Extra lines
	s.addLine("<CLT 23>Oh...?\n<CLT>");    // "<CLT 23>おやおや…？\n<CLT>"
	s.addLine("<CLT 23>It seems that you've already\nplayed through this game\n<CLT>");    // "<CLT 23>あなた様は、この世界を何周も\nプレイして頂いているようですね？\n<CLT>"
	return(s);
}
