loadScript("common.js");

function e01_002_101_lin()
{
	var s = new LINScript();
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x26, [0x0F, 0x20, 0x00]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x65, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.op(0x23, [0x2E, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x23, [0x2C, 0x01, 0x00, 0x01, 0x00]);
	s.op(0x33, [0x00, 0x00, 0x00, 0x04]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x10]);
	s.playBGM(255, 120, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I ran out to meet up with the others.\n<CLT>");    // "<CLT 4>他のみんなと合流する為、\nボクは部屋を飛び出した。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>However, what awaited me...\nwas a manga-esque situation.\n<CLT>");    // "<CLT 4>だけど、そこで、\nボクを待っていたのは…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 3: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>古いマンガのようなシチュエーションだった。\n<CLT>");    // "<CLT 4>古いマンガのようなシチュエーションだった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 4: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(210, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>\"Thud!\"\n<CLT>");    // "<CLT 23>「ドンッ！！」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 5: "Sayaka Maizono"
	s.setSpeaker("???");
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.playVoice("Sayaka Maizono", 99, 40);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("Gyah!\n");    // "きゃっ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 6: "Makoto Naegi"
	s.playBGM(10, 100, 90);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x10]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x06, [0x02, 0xED, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xED, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x01, 0x40]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playVoice("Makoto Naegi", 99, 2);
	s.showLine("Ah... Maizono!?\n");    // "あ……舞園さんっ！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 7: "Makoto Naegi"
	s.playVoice("Makoto Naegi", 99, 3);
	s.showLine("I-I'm so sorry!\nAre you okay!?\n");    // "ご、ごめん！　大丈夫！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 8: "Sayaka Maizono"
	s.setSpeaker("Sayaka Maizono");
	s.playVoice("Sayaka Maizono", 99, 41);
	s.showLine("N-No, it's my fault...\n");    // "い、いえ…私の方こそ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 9: "Sayaka Maizono"
	s.playVoice("Sayaka Maizono", 99, 42);
	s.showLine("Sorry...\n");    // "ごめんなさい…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 10: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She gave an awkward smile and got up.\n<CLT>");    // "<CLT 4>彼女は、照れ臭そうな笑みを浮かべながら、\nゆっくりと腰を上げた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x30]);
	s.op(0x06, [0x02, 0xED, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Sayaka Maizono", 0, 1, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x00, 0x01, 0x30]);
	s.op(0x25, [0x03, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Maizono... Are you okay?\nAre you hurt?\n");    // "舞園さん…本当に大丈夫？\n怪我はない？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 12: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.showLine("Ehehe, it's no big deal.\nI'm okay.\n");    // "うふふ、大袈裟ですって。\n私なら大丈夫ですから。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 13: "Sayaka Maizono"
	s.showLine("I'm stronger than I look.\nI can even leap right onto the stage!\n");    // "こう見えても、それなりに筋肉あるんですよ。\nステージ上を飛び跳ねたりしちゃうんですからっ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 14: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("That's good to hear...\n");    // "なら、よかったよ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 15: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 9, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 20);
	s.showLine("But are you okay, Naegi?\nUmm... Do you still feel Oowada's punch...\n");    // "でも、苗木君の方こそ大丈夫ですか？\nその…大和田君にやられた傷は…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 16: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Oh yeah, everyone saw me get knocked out...\n<CLT>");    // "<CLT 4>そっか、ボクはみんなの前で\n気を失っちゃったんだよな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 17: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I bet I looked lame...\n<CLT>");    // "<CLT 4>なんだか…いきなりカッコ悪いトコ見せちゃったな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 18: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 9, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 27);
	s.showLine("...Naegi?\n");    // "…苗木君？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Oh, I'm okay!\nI don't feel anything at all!\n");    // "あ、大丈夫だよ！\nボクなら、なんともないから！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 20: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 13);
	s.showLine("...I see. I was a little worried.\n");    // "…よかった。心配してたんですよ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 21: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("O-Oh...\n");    // "う、うん…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 22: "Makoto Naegi"
	s.showLine("By the way, what are you doing here, Maizono?\n");    // "ところで、舞園さんは、\nこんな所で何をしてたの？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 23: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 3, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("I came to get you.\n");    // "苗木君を呼びに来たんです。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 24: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Get... me...?\n");    // "ボクを…呼びに…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 25: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 0, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 4);
	s.showLine("Umm... If you're feeling well,\nthen you should come to the cafeteria...\n");    // "あのですね…もし具合がよければ、\n苗木君にも食堂に来て欲しいんですけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Cafeteria?\n");    // "食堂…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 27: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 3, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 9);
	s.showLine("After you got knocked out,\nwe ended up splitting up.\n");    // "苗木君が倒れた後、\n結局、別行動をする事になったんです。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 28: "Sayaka Maizono"
	s.showLine("We thought that splitting up and searching\nwas more efficient.\n");    // "手分けして調査した方が、\n効率的なんじゃないかって事で。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 29: "Sayaka Maizono"
	s.showLine("We promised to meet up and talk about what\nwe found, but...\n");    // "その後、みんなで集まって、\n調査の結果を話し合う約束なんですけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 30: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("It's almost time to meet up... right?\n");    // "その集合時間が…もうすぐって事？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 31: "Makoto Naegi"
	s.showLine("Then, let's go!\n");    // "そういう事なら、もちろん行くよ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 32: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 6, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 13);
	s.showLine("Thank goodness.\nThen I'll go on ahead to the cafeteria.\n");    // "よかった。\nじゃあ、私は先に食堂に行ってますね。\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(0, "Sayaka Maizono", 6, 5, 2);
	s.playBGM(255, 60, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x28]);
	s.waitForInput();


	// Line 33: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x09, 0x00]);
	s.op(0x26, [0x0F, 0x00, 0x01]);
	s.playBGM(3, 100, 0);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x27, [0x08]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Is this... the way to the classrooms?\n<CLT>");    // "<CLT 4>こっちは…教室とかある方か？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 34: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I don't need to go there right now.\nI gotta go to the cafeteria.\n<CLT>");    // "<CLT 4>今は用はなさそうだ。\nみんな集まってるだろうし、食堂へ行こう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 35: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(153, 100);
	s.op(0x03, [0x17]);
	s.showLine(common_line_locked);    // "<CLT 23>「ガタガタガタ！」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 36: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("It won't open...\nLooks like it's locked...\n");    // "開かない…\n鍵が掛かってるみたいだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 37: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x16]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF5]);
	s.op(0x15, [0x87, 0x01, 0xFF]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x25, [0x0F, 0x01]);
	s.playSoundEffectA(141, 100);
	s.goToScript(1, 3, 0);
	s.op(0x1A);
	s.op(0x34, [0x01, 0xF6]);
	s.op(0x2A, [0x01, 0xF5]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I'm curious to see where this door leads to,\nbut let's talk to the person right there first.\n<CLT>");    // "<CLT 4>あのドアがどこに続くのかは気になるけど、\n今は目の前の相手に話しかけよう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 38: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x2A, [0x01, 0xF6]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I gotta go meet up with everyone\nin the cafeteria.\n<CLT>");    // "<CLT 4>みんな集まってるだろうし、食堂へ行こう。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 39: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I gotta go meet up with everyone\nin the cafeteria.\n<CLT>");    // "<CLT 4>みんな集まってるだろうし、食堂へ行こう。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 40: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x19]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>So this is the men's toilet.\nGotta take note of this.\n<CLT>");    // "<CLT 4>ここが男子トイレか。\n覚えておこう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 41: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1A]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Looks like this is women's toilet...\nbut I have no business in there.\n<CLT>");    // "<CLT 4>ここは女子トイレみたいだけど…\nボクには縁がないよな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 42: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1B]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Looks like I can't go in there...\n<CLT>");    // "<CLT 4>ここには、入れないみたいだ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 43: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1C]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is the room I was in.\nMy name and face is on it...\n<CLT>");    // "<CLT 4>今、出て来た部屋だ。\nネームプレートにボクの名前と顔があるけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 44: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Anyway, I don't need to go back in there...\n<CLT>");    // "<CLT 4>とりあえず、ここで戻っても仕方ないな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 45: "Makoto Naegi"
	var line_door = "<CLT 4>There's a nameplate on this door...\nbut all of the doors look exactly the same...\n<CLT>";
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1D]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 46: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1E]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 47: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1F]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 48: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x20]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 49: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x21]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 50: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x22]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 51: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x23]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 52: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x24]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 53: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x25]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x26]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x27]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 56: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x28]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 57: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x29]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 58: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x2A]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_door);    // "<CLT 4>ネームプレートのような物が付いてるけど…\nみんな同じようなドアだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 59: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x2B]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Looks like a staircase...\nbut it's behind these shutters.\n<CLT>");    // "<CLT 4>階段…なんだろうけど……\nシャッターが降りてる。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 60: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I can't go up like this.\nThere's no point to these stairs...\n<CLT>");    // "<CLT 4>これじゃ、上れないな。\n階段の意味がない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 60: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
