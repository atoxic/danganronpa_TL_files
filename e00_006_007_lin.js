loadScript("common.js");

/**
 * Day zero: all freshmen meet Monokuma
 * @method e00_006_007_lin
 **/
function e00_006_007_lin()
{
	var s = new LINScript();
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x07, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Kyouko Kirigiri", 0, 0, 0);
	s.showSprite(1, "Celestia Rudenberk", 0, 0, 0);
	s.showSprite(3, "Aoi Asahina", 0, 0, 0);
	s.showSprite(4, "Sakura Ookami", 0, 0, 0);
	s.showSprite(8, "Byakuya Togami", 0, 0, 0);
	s.showSprite(9, "Chihiro Fujisaki", 0, 0, 0);
	s.showSprite(10, "Kiyotaka Ishimaru", 0, 0, 0);
	s.showSprite(12, "Yasuhiro Hagakure", 0, 0, 0);
	s.showSprite(14, "Reon Kuwata", 0, 0, 0);
	s.playBGM(3, 100, 0);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I anxiously entered the gym like we were told.\n<CLT>");    // "<CLT 4>不安と恐怖を抱えながら、\n校内放送で指定された体育館へとやって来た。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>What awaited us inside was...\n<CLT>");    // "<CLT 4>そこで、ボクらを待ち受けていたのは…\n<CLT>" // TODO: awkward
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 3: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("This... looks like an entrance ceremony, right?\nNo matter how you look at it...\n");    // "入学式…みたいだね？　\nどっからどう見ても…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 4: "Yasuhiro Hagakure"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x1A, 0x06]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x14]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Yasuhiro Hagakure", 11, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Yasuhiro Hagakure");
	s.playVoice("Yasuhiro Hagakure", 99, 2);
	s.showLine("Look, I told you guys\nthat this is just a <CLT 3>\"normal\"<CLT> entrance ceremony.\n");    // "ほら、俺の言った通りだべ？\n実際のトコ<CLT 3>“普通”<CLT>の入学式じゃねーか。\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 5: "Makoto Naegi"
	s.showSprite(0, "Yasuhiro Hagakure", 11, 4, 2);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Then, right after Hagakure said that,\n<CLT>");    // "<CLT 4>と、葉隠クンが言った直後だった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 6: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>we witnessed something\nthat could not be described as <CLT><CLT 3>\"normal\"<CLT><CLT 4>...\n<CLT>");    // "<CLT 4>ボクらが<CLT><CLT 3>“普通じゃない”<CLT><CLT 4>光景を\n目の当たりにする事となるのは…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 7: "Monokuma"
	s.playBGM(255, 10, 0);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("???");
	s.playVoice("Monokuma", 99, 161);
	s.showLine("Hey, is everyone here!?\nThen, let's start!\n");    // "オーイ、全員集まった～！？\nそれじゃあ、そろそろ始めよっか！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 8: "Chihiro Fujisaki"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x25, [0x06, 0x01]);
	s.playBGM(255, 0, 0);
	s.playMovie(16, true);
	s.playBGM(8, 100, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Chihiro Fujisaki");
	s.playVoice("Chihiro Fujisaki", 99, 68);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh...?\nA stuffed animal...?\n");    // "え…？　ヌイグルミ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 9: "Monokuma"
	s.setSpeaker("???");
	s.playVoice("Monokuma", 99, 162);
	s.showLine("I'm not a stuffed animal!\n");    // "ヌイグルミじゃないよ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 10: "Monokuma"
	s.setSpeaker("Monokuma");
	s.playVoice("Monokuma", 99, 163);
	s.showLine("I'm Monokuma!\n");    // "ボクはモノクマだよ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 11: "Monokuma"
	s.playVoice("Monokuma", 99, 164);
	s.showLine("I'm your... This school's...\nprincipal!\n");    // "キミたちの…この学園の…\n学園長なのだッ！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 12: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My eyes have never been so fixated\non something before in my whole life.\n<CLT>");    // "<CLT 4>ここまで何かに視線を奪われたのは、\n生まれて初めてだったかもしれない。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 13: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>But I can't believe...\n<CLT>");    // "<CLT 4>だけど、その対象が…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 14: "Makoto Naegi"
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>that I'm seeing... this thing...!\n<CLT>");    // "<CLT 4>あんな…訳のわからない物体だなんて…！\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 15: "Monokuma"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x30, [0x00, 0xFF, 0x03]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x07, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(16, "Monokuma", 0, 0, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x1A, 0x0F]);
	s.op(0x25, [0x09, 0x01]);
	s.playSoundEffectA(133, 100);
	s.showSprite(0, "Monokuma", 0, 6, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Monokuma");
	s.playVoice("Monokuma", 99, 165);
	s.showLine("Nice to meet'cha!\n");    // "ヨロシクねッ！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 16: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This out-of-place bright voice...\nThis out-of-place nonchalant behavior...\n<CLT>");    // "<CLT 4>それは場違いなほど明るい声…\nそれは場違いなほど能天気な振る舞い…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 17: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My unease changed into limitless fear.\n<CLT>");    // "<CLT 4>ボクの抱いていた不快感は\nいつの間にか、底知れぬ恐怖へと変わっていた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 18: "Hifumi Yamada"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Hifumi Yamada", 10, 1, 3);
	s.playVoice("Hifumi Yamada", 99, 29);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.playSoundEffectA(29, 100);
	s.showLine("U-...Uwawawa...\nThe stuffed animal talked!\n");    // "う…うわわわ…\nヌイグルミが喋ったぁぁぁ！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 19: "Kiyotaka Ishimaru"
	s.showSprite(0, "Kiyotaka Ishimaru", 10, 1, 4);
	s.playVoice("Kiyotaka Ishimaru", 99, 17);
	s.showLine("Calm down...!\nThere's probably just a speaker inside it...!\n");    // "落ち着くんだ…！　ヌイグルミの中に\nスピーカーが仕込んであるだけだろう…！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 20: "Monokuma"
	s.showSprite(1, "Monokuma", 1, 1, 2);
	s.playVoice("Monokuma", 99, 28);
	s.showLine("I'm telling you guys...\nI'm not a stuffed animal...\n");    // "だからさぁ…\nヌイグルミじゃなくて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 21: "Monokuma"
	s.showSprite(1, "Monokuma", 5, 1, 2);
	s.playVoice("Monokuma", 99, 317);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("I'm Monokuma!\nAnd I'm the principal!\n");    // "モノクマなんですけど！\nしかも、学園長なんですけど！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 22: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 10, 1, 3);
	s.playVoice("Hifumi Yamada", 99, 29);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.playSoundEffectA(29, 100);
	s.showLine("Uwahhh!\nIt moved!\n");    // "うわぁぁぁぁ！　動いたぁぁぁ！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 23: "Mondo Oowada"
	s.showSprite(1, "Mondo Oowada", 7, 1, 4);
	s.playVoice("Mondo Oowada", 99, 14);
	s.showLine("Calm the fuck down!\nSomeone's just controlling it by radio...\n");    // "落ち着けっつってんだろ！　ラジコンかなんかだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 24: "Monokuma"
	s.showSprite(0, "Monokuma", 7, 1, 2);
	s.playVoice("Monokuma", 99, 38);
	s.playSoundEffectA(37, 100);
	s.showLine("Ow, ow... That hurt...\nDon't lump me together with children's toys.\n");    // "ラジコンなんて子供のおもちゃと一緒にしないで。\n深く深く…マリアナ海溝より深く傷付くよ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 25: "Monokuma"
	// TODO: Awkward!
	s.showSprite(0, "Monokuma", 9, 1, 2);
	s.playVoice("Monokuma", 99, 41);
	s.showLine("\"My remote control system is so advanced\nthat it can make NASA jealous\"...\n");    // "ボクには、ＮＡＳＡも真っ青の遠隔操作システムが\n搭載されてて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 26: "Monokuma"
	s.showSprite(0, "Monokuma", 5, 1, 2);
	s.playVoice("Monokuma", 99, 104);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
		// Reference: Persona 4, Teddie
	s.showLine("...Please don't say beary sad things like that\nthat can break children's dreams!\n");    // "…って、夢をデストロイするような発言を\nさせないで欲しいクマー！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 27: "Celestia Rudenberk"
	s.showSprite(1, "Celestia Rudenberk", 5, 1, 1);
	s.playVoice("Celestia Rudenberk", 99, 11);
	s.showLine("\"Beary\"...?\nNot very original, are we?\n");    // "クマ…？　ベタですわね？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 28: "Monokuma"
	s.showSprite(0, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 8);
		// Original reference was about Hiroshi Takigawa (Croquette)
		// Change to reference about Sonic (TODO better reference?)
	s.showLine("Well, we gotta go fast!\nLet's start!\n");    // "じゃあ、進行もおしてるんで、\nさっさと始めちゃうナリよ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 29: "Junko Enoshima (fake)"
	s.showSprite(1, "Junko Enoshima (fake)", 2, 1, 3);
	s.playVoice("Junko Enoshima (fake)", 99, 2);
	s.showLine("I can't keep up with his character...\n");    // "キャラがブレてない…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 30: "Monokuma"
	s.showSprite(0, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 3);
	s.showLine("Silence, silence...\nUmm, now then!\n");    // "ご静粛にご静粛に…\nえー、ではではっ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 31: "Sakura Ookami"
	s.showSprite(1, "Sakura Ookami", 0, 1, 0);
	s.playVoice("Sakura Ookami", 99, 3);
	s.showLine("...He gave up, huh.\n");    // "…諦めたな。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 32: "Monokuma"
	s.showSprite(0, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 61);
	s.showLine("Stand, bow!\nGood morning, you guys!\n");    // "起立、礼！　\nオマエラ、おはようございます！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 33: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 11);
	s.playSoundEffectA(29, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Stand, bow!\nGood morning, you guys!\n");    // "おはようございますっ！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 34: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 0, 1, 0);
	s.playVoice("Touko Fukawa", 99, 4);
	s.showLine("You don't... have to tell me...\n");    // "言わなくて…いいわよ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 35: "Monokuma"
	s.showSprite(1, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 3);
	s.showLine("Then, I would like to hold\na memorable entrance ceremony!\n");    // "では、これより記念すべき入学式を\n執り行いたいと思います！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 36: "Monokuma"
	s.showLine("First, let me talk about the life you guys\nwill be having inside this academy...\n");    // "まず最初に、これから始まる\nオマエラの学園生活について一言…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 37: "Monokuma"
	s.showLine("You guys are so full of talent\nthat you're the <CLT 3>\"hopes of the world\"<CLT>!\n");    // "えー、オマエラのような才能溢れる高校生は、\n<CLT 3>“世界の希望”<CLT>に他なりません！\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 38: "Monokuma"
	s.showLine("In order to protect such wonderful hopes,\nyou guys...\n");    // "そんな素晴らしい希望を保護する為、\nオマエラには…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 39: "Monokuma"
	s.showSprite(1, "Monokuma", 12, 1, 2);
	s.playVoice("Monokuma", 99, 98);
	s.playSoundEffectA(28, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x03]);
	s.showLine("will be living together in this school and <CLT 3>forbidden from going outside<CLT>!\n");    // "<CLT 3>“この学園内だけ”<CLT>で、\n共同生活を送ってもらいます！\n"
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 40: "Monokuma"
	s.showLine("Live in peace in here, you guys!\n");    // "みんな、仲良く秩序を守って暮らすようにね！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 41: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Huh...?\n<CLT>");    // "<CLT 4>は……？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 42: "Monokuma"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Monokuma", 9, 1, 2);
	s.playVoice("Monokuma", 99, 8);
	s.showLine("Umm, and...\nabout how long your stay will last...\n");    // "えー、そしてですね…\nその共同生活の期限についてなんですが…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 43: "Monokuma"
	s.showSprite(1, "Monokuma", 12, 1, 2);
	s.playVoice("Monokuma", 99, 79);
	s.playSoundEffectA(28, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("You guys will stay here <CLT 3>for the rest of your lives<CLT>!\n");    // "期限はありませんっ！！\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 44: "Monokuma"
	/*
	s.showLine("つまり、<CLT 3>一生ここで暮らしていく<CLT>のです！\nそれがオマエラに課せられた学園生活なのです！\n");    // "つまり、<CLT 3>一生ここで暮らしていく<CLT>のです！\nそれがオマエラに課せられた学園生活なのです！\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();
	// */


	// Line 45: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 6, 1, 0);
	s.playVoice("Touko Fukawa", 99, 10);
	s.showLine("What... did you say?\nFor the rest of our lives...?\n");    // "何て…言ったの？　一生ここで…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 46: "Monokuma"
	s.showSprite(1, "Monokuma", 13, 1, 2);
	s.playVoice("Monokuma", 99, 74);
	s.showLine("Yeah... Don't worry. We're loaded in funding,\nso we'll keep you guys comfy!\n");    // "あぁ…心配しなくても大丈夫だよ。\n予算は豊富だから、オマエラに不自由はさせないし！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 47: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 9, 1, 1);
	s.playVoice("Sayaka Maizono", 99, 21);
	s.showLine("Th-That's not what we're worried about...!\n");    // "そ、そういう心配じゃなくて…！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 48: "Junko Enoshima (fake)"
	s.showSprite(1, "Junko Enoshima (fake)", 2, 1, 3);
	s.playVoice("Junko Enoshima (fake)", 99, 17);
	s.showLine("I mean, what're you saying...?\nLiving here for the rest of my life...\n");    // "つーか、何言ってんの…？\nここで一生暮らすとか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 49: "Junko Enoshima (fake)"
	s.showLine("You're lying... right?\n");    // "ウソ…でしょ？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 50: "Monokuma"
	s.showSprite(0, "Monokuma", 5, 1, 2);
	s.playVoice("Monokuma", 99, 75);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("I'm not a liar!\nI'm confident that I'm not a liar!\n");    // "ボクはウソつきじゃない！　その自信がボクにはある！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 51: "Monokuma"
	s.showSprite(0, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 2);
	s.showLine("Ah, let me just point out... that you're completely\nisolated from the outside world!\n");    // "あ、ついでに言っておくけど…\n外の世界とは完全にシャットアウトされてますから！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 52: "Monokuma"
	s.showLine("So you don't need to worry about\nthe dirty world outside!\n");    // "だから、汚れた外の世界の心配なんて、\nもう必要ないからねっ！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 53: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Isolated...\n");    // "シャットアウトって…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.showLine("Then, the metal plates on the windows...!\n");    // "じゃあ、教室や廊下にあったあの鉄板は…！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.playSoundEffectA(30, 100);
	s.op(0x22, [0x01, 0x02, 0x08]);
	s.showSprite(0, "Monokuma", 0, 3, 2);
	s.showSprite(1, "Junko Enoshima (fake)", 2, 3, 3);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x02, 0x01]);
	s.op(0x22, [0x00, 0x02, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.playSoundEffectA(30, 100);
	s.op(0x22, [0x01, 0x02, 0x08]);
	s.op(0x30, [0x00, 0x02, 0x03]);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(0, "Monokuma", 0, 8, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x00, 0x02, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("are there... to keep us in here...?\n");    // "ボクたちを…閉じ込める為の…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 56: "Monokuma"
	s.showSprite(0, "Monokuma", 9, 1, 2);
	s.playVoice("Monokuma", 99, 42);
	s.showLine("That's right.\n");    // "そうなんだ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 57: "Monokuma"
	s.showLine("So help won't come,\nno matter how hard you yell.\n");    // "だから、いくら叫んだところで、\n助けなんて来ないんだよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 58: "Monokuma"
	s.showLine("That's why... you guys should make the most\nout of your lives in this school!\n");    // "そういう訳で…オマエラは思う存分、\nこの学園内だけで生活してくださーいっ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 59: "Reon Kuwata"
	s.showSprite(1, "Reon Kuwata", 6, 1, 1);
	s.playVoice("Reon Kuwata", 99, 23);
	s.showLine("Umm...\nWhat... is this...\n");    // "えぇーと…\nなんだよ…これ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 60: "Reon Kuwata"
	s.showLine("This is such a bad joke,\nfor Mount Hope Academy...\n");    // "希望ヶ峰学園が用意したにしては、\nいくらなんでも悪ふざけが過ぎるんじゃ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 61: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 7, 1, 4);
	s.playVoice("Mondo Oowada", 99, 16);
	s.showLine("Y-You... C'mon, don't mess with us too much...\nDon't take this too far, or else...\n");    // "テ、テメェ…大概にしろよ、コラ…\nそれ以上は冗談じゃすまさねぇぞ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 62: "Monokuma"
	s.showSprite(1, "Monokuma", 1, 1, 2);
	s.playVoice("Monokuma", 99, 15);
	s.showLine("\"Lies\"... \"Joke\"...\nYou guys sure are distrustful...\n");    // "さっきからウソだの…冗談だのって…\n疑い深いんだからっ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 63: "Monokuma"
	s.showSprite(1, "Monokuma", 3, 1, 2);
	s.playVoice("Monokuma", 99, 43);
	s.showLine("But I can't blame you... In this day and age, we've\ngotta be suspicious of anyone and everyone.\n");    // "でも、それもしょうがないかぁ。\n隣人を疑わなきゃ生き抜けないご時世だもんね。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 64: "Monokuma"
	s.showLine("Well, you guys can check my words\nfor yourselves after this.\n");    // "まぁ、ボクの言葉が本当かどうかは、\n後でオマエラ自身が確かめてみればいいよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 65: "Monokuma"
	s.showLine("Then you'll see\nthat I'm telling the 100% uncut truth!\n");    // "そうすれば、すぐにわかるから。\nボクの言葉が、純度１００％の真実だって事がさ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 66: "Celestia Rudenberk"
	s.showSprite(0, "Celestia Rudenberk", 4, 1, 1);
	s.playVoice("Celestia Rudenberk", 99, 9);
	s.showLine("Oh my... What a bother...\nLiving in this school forever...\n");    // "そんな…困りますわ…\nこんな学校でずっと暮らすなんて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 67: "Monokuma"
	s.showSprite(1, "Monokuma", 10, 1, 2);
	s.playVoice("Monokuma", 99, 46);
	s.showLine("Oh?\nYou guys sure are weird...\n");    // "おやおや…オマエラもおかしな人達だねぇ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 68: "Monokuma"
	s.showLine("I mean, you guys came here to Mount Hope\nAcademy because you wanted to, right?\n");    // "だって、オマエラは自ら望んで、\nこの希望ヶ峰学園にやって来たんでしょう？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 69: "Monokuma"
	s.showLine("And now, you guys want to go home in the middle\nof the entrance ceremony...\n");    // "それなのに、入学式の途中で、\nもう帰りたいとか言い出すなんてさぁ……\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 70: "Monokuma"
	s.showSprite(1, "Monokuma", 3, 1, 2);
	s.playVoice("Monokuma", 99, 5);
	s.showLine("Well, but...\n");    // "まぁ、だけど…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 71: "Monokuma"
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("To be honest,\nthere is a way to get out of here...\n");    // "ぶっちゃけた話、ない訳じゃないよ。\nここから出られる方法…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 72: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 6, 1, 0);
	s.playVoice("Touko Fukawa", 99, 10);
	s.showLine("R-Really...?\n");    // "ほ、本当…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 73: "Monokuma"
	s.showSprite(1, "Monokuma", 13, 1, 2);
	s.playVoice("Monokuma", 99, 11);
	s.showLine("As the principal, I have made <CLT 3>a special rule<CLT>\nfor students who want to get out!\n");    // "学園長であるボクは、学園から出たい人の為に、\n<CLT 3>ある特別ルール<CLT>を設けたのですっ！\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 74: "Monokuma"
	s.playSoundEffectA(28, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("It's the <CLT 3>\"Graduation Rule\"<CLT>!\n");    // "それが<CLT 3>『卒業』<CLT>というルール！！\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 75: "Monokuma"
	s.showSprite(1, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 3);
	s.showLine("Then, let me explain this special rule.\n");    // "では、この特別ルールについて\n説明していきましょーう。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 76: "Monokuma"
	s.showLine("You guys are responsible for protecting the \"peace\"\nof your lives together in this school...\n");    // "オマエラには、学園内での“秩序”を守った共同生活が\n義務付けられた訳ですが…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 77: "Monokuma"
	s.showLine("But if someone breaks that peace, then that person\nand only that person will be able to get out.\n");    // "もし、その秩序を破った者が現れた場合…\nその人物だけは、学園から出て行く事になるのです。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 78: "Monokuma"
	s.showLine("That's the <CLT 3>\"Graduation Rule\"<CLT>!\n");    // "それが<CLT 3>『卒業』<CLT>のルールなのですっ！\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 79: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 4, 1, 1);
	s.playVoice("Byakuya Togami", 99, 13);
	s.showLine("What do you mean...\n<CLT 3>\"breaking the peace\"<CLT>?\n");    // "その<CLT 3>“秩序を破る”<CLT>とは…何を意味するんだ？\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 80: "Monokuma"
	s.playBGM(255, 90, 0);
	s.showSprite(1, "Monokuma", 3, 1, 2);
	s.playVoice("Monokuma", 99, 29);
	s.showLine("Ehehe...\nBy that, I mean.........\n");    // "うぷぷ…それはね………\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.waitForInput();


	// Line 81: "Monokuma"
	s.playSoundEffectA(28, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 3>Killing someone<CLT>…\n");    // "<CLT 3>人が人を殺す事<CLT>だよ…\n"
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 82: "Makoto Naegi"
	s.playBGM(13, 100, 0);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(27, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("K-Kill...!?\n");    // "こ、殺す…ッ！？\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 83: "Monokuma"
	s.showSprite(1, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 9);
	s.showLine("Beating, impaling, decapitating, burning, crushing,\nstrangling, cursing... It doesn't matter how.\n");    // "殴殺刺殺撲殺斬殺焼殺圧殺絞殺惨殺呪殺…\n殺し方は問いません。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 84: "Monokuma"
	s.op(0x03, [0x03]);
	s.showLine("<CLT 3>\"You can get out if you kill someone\"<CLT>...\nThat's the rule, simple as that.\n");    // "<CLT 3>『誰かを殺した生徒だけがここから出られる…』<CLT>\nそれだけの簡単なルールだよ。\n"
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 85: "Monokuma"
	s.showSprite(1, "Monokuma", 12, 1, 2);
	s.playVoice("Monokuma", 99, 30);
	s.showLine("Please work hard to use the worst means\nto get the best end..\n");    // "最悪の手段で最良の結果を導けるよう、\nせいぜい努力してください。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 86: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I shuddered...\n<CLT>");    // "<CLT 4>ゾワリとした…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 87: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The words \"you can get out if you kill someone\"\nsent a chill up my spine all the way to my head.\n<CLT>");    // "<CLT 4>『誰かを殺した生徒だけがここから出られる』\nその言葉を聞いた途端…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	/*
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>猛烈な寒気が、足元から背中を通り、\n頭のてっぺんまで一気に駆け上がっていった。\n<CLT>");    // "<CLT 4>猛烈な寒気が、足元から背中を通り、\n頭のてっぺんまで一気に駆け上がっていった。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 89: "Monokuma"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Monokuma", 3, 1, 2);
	s.playVoice("Monokuma", 99, 29);
	s.showLine("Ehehe...\nThis level of excitement is on another level...\n");    // "うぷぷ…こんな脳汁ほとばしるドキドキ感は、\n鮭や人間を襲う程度じゃ得られませんな…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 90: "Monokuma"
	s.showLine("I said that you guys are the \"hopes of the world\"...\n");    // "さっきも言った通り、\nオマエラは言わば“世界の希望”な訳だけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 91: "Monokuma"
	s.showLine("But watching the <CLT 3>\"hopes\"<CLT>\nkill each other in <CLT 3>\"despair\"<CLT>...\n");    // "そんな<CLT 3>“希望”<CLT>同士が殺し合う、\n<CLT 3>“絶望”<CLT>的シチュエーションなんて…\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 92: "Monokuma"
	s.showSprite(1, "Monokuma", 4, 1, 2);
	s.playVoice("Monokuma", 99, 114);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Make my heart race!\n");    // "ドキドキする～！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 93: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 6, 1, 0);
	s.playVoice("Reon Kuwata", 99, 29);
	s.showLine("Wh-What the hell are ya saying!?\nKilling each other... What do you mean...\n");    // "な、何言ってんだっつーの！？\n殺し合うって……なんなんだよ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 94: "Monokuma"
	s.showSprite(1, "Monokuma", 10, 1, 2);
	s.playVoice("Monokuma", 99, 44);
	s.showLine("Killing each other:\nK-I-L-L-I-N-G...\n");    // "殺し合いは殺し合いだよ。\n辞書ならそこらに…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 95: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 14, 1, 3);
	s.playVoice("Aoi Asahina", 99, 51);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("I know what you said!\nI mean, why do we have to kill each other!?\n");    // "意味なら知ってるって！　そうじゃなくって、\nどうして私達が殺し合わなきゃいけないの！？\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 96: "Hifumi Yamada"
	s.showSprite(1, "Hifumi Yamada", 12, 1, 4);
	s.playVoice("Hifumi Yamada", 99, 29);
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("That's right! Stop making all of these bad jokes!\nJust let us go home already!\n");    // "そうだ、そうだ！　ふざけた事ばっかり言うな！\nさっさと家に帰せー！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 97: "Monokuma"
	s.showSprite(0, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 166);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...\"All of these bad jokes\"?\n");    // "…ばっかり？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 98: "Monokuma"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Monokuma", 0, 3, 2);
	s.showSprite(1, "Hifumi Yamada", 12, 3, 4);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE7, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x0A]);
	s.op(0x06, [0x02, 0xE7, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.showSprite(0, "Monokuma", 0, 3, 2);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Monokuma");
	s.playVoice("Monokuma", 99, 167);
	s.showLine("What you mean \"all of these bad jokes\"...\n");    // "ばっかりってなんだよ、ばっかりって…\nばっかりなんて言い草ばっかりするなっての！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 99: "Monokuma"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE7, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(1, "Monokuma", 1, 8, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Monokuma", 99, 97);
	s.showLine("You guys sure have thick skulls.\n");    // "ホントに物分かりの悪い連中だよ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 100: "Monokuma"
	s.showLine("What do you mean, \"Let me go home\"...\nYou guys have been saying the same thing\n");    // "何が帰してだ。\n同じ事を何度も何度も何度も何度も…\n"
	s.waitFrames(2);
	s.waitForInput();
	
	s.showLine("over and over and over and over and over and over\nand over and over and over and over and over...\n");    // "何が帰してだ。\n同じ事を何度も何度も何度も何度も…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 101: "Monokuma"
	s.showLine("Listen up. This school is going to be your home\nand your world, you know?\n");    // "いいかい？　これからは、\nこの学園が、オマエラの家であり世界なんだよ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 102: "Monokuma"
	s.showSprite(1, "Monokuma", 5, 1, 2);
	s.playVoice("Monokuma", 99, 33);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Kill all you want, then kill so more,\nand kill kill kill kill kill kill kill kill kill kill kill kill!\n");    // "殺りたい放題、殺らして殺るから、\n殺って殺って殺って殺りまくっちゃえっつーの！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 103: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 17, 1, 1);
	s.playVoice("Yasuhiro Hagakure", 99, 33);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Hey, hey...\nHow long are you gonna keep this up for...\n");    // "おいおい…いつまで続ける気だって…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 104: "Monokuma"
	s.showSprite(1, "Monokuma", 10, 1, 2);
	s.playVoice("Monokuma", 99, 80);
	s.showLine("Hm...?\n");    // "ん…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 105: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 1, 1, 1);
	s.playVoice("Yasuhiro Hagakure", 99, 3);
	s.showLine("You got us already,\nso why don't you just drop the joke?\n");    // "もう十分ビックリしたからよ、\nそろそろネタばらしにすんべ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 106: "Monokuma"
	s.showSprite(1, "Monokuma", 10, 1, 2);
	s.playVoice("Monokuma", 99, 44);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Drop the joke...?\n");    // "ネタばらし…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 107: "Yasuhiro Hagakure"
	s.showSprite(0, "Yasuhiro Hagakure", 11, 1, 1);
	s.playVoice("Yasuhiro Hagakure", 99, 28);
	s.showLine("Well...\nisn't this really an event designed to scare us?\n");    // "いや…だから…\nドッキリなんだろ？　実際…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 108: "Mondo Oowada"
	s.showSprite(1, "Mondo Oowada", 7, 1, 4);
	s.playVoice("Mondo Oowada", 99, 14);
	s.showLine("...Alright, enough is enough.\nOutta my way...\n");    // "…もういい。テメェは、どいてろ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 109: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Oowada pushed Hagakure aside and\nsurprised Monokuma with his boominga voice.\n<CLT>");    // "<CLT 4>葉隠クンを押しのけつつ最前列に立った大和田クンは、\nまるで地響きのような声でモノクマに凄んだ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 110: "Mondo Oowada"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Mondo Oowada", 4, 1, 4);
	s.playVoice("Mondo Oowada", 99, 13);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Your bad joke's gone too far!\nI'm not gonna forgive you now!\n");    // "オイコラ、今更謝ってもおせぇぞ！\nテメェの悪ふざけは度が過ぎたッ！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 111: "Monokuma"
	s.showSprite(0, "Monokuma", 10, 1, 2);
	s.playVoice("Monokuma", 99, 47);
	s.showLine("\"Bad joke\"...?\nYou mean your hairstyle?\n");    // "悪ふざけ…？　それってキミの髪型の事？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 112: "Mondo Oowada"
	s.showSprite(1, "Mondo Oowada", 5, 1, 4);
	s.playVoice("Mondo Oowada", 99, 11);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("HUUUHHHHHHHHH!?\n");    // "があぁぁぁあああッッ！？\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 113: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I could hear something explode during the roar.\n<CLT>");    // "<CLT 4>雄たけびと共に、\nドン、と何かが爆発したような音が響いた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 114: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It was the sound of Oowada kicking up the floor.\n<CLT>");    // "<CLT 4>大和田クンが、足元の床を げた音だった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 115: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>He jumped and lunged forward like a bullet.\n");    // "<CLT 4>跳躍した彼の体は、\n弾丸のように一直線に突き進んだ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 116: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>In a straight line to his prey...\n<CLT>");    // "<CLT 4>獲物へと向かって一直線に…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 117: "Mondo Oowada"
	s.playBGM(255, 0, 0);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.playSoundEffectA(223, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x14]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(1, "Mondo Oowada", 5, 3, 4);
	s.showSprite(0, "Monokuma", 10, 3, 2);
	s.playBGM(5, 100, 0);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x06, [0x02, 0xE8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Mondo Oowada");
	s.playVoice("Mondo Oowada", 99, 45);
	s.showLine("Gotcha!\nI don't care if you're a stuffed animal or a RC toy...\n");    // "捕まえたぞ、コラァ！！\nラジコンだかヌイグルミだか知らねぇが…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 118: "Mondo Oowada"
	s.setSpeaker("Mondo Oowada");
	s.playVoice("Mondo Oowada", 99, 46);
	s.showLine("I'm gonna crush you with my bare hands!\n");    // "バッキバキに捻り潰してやんよっ！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 119: "Monokuma"
	s.setSpeaker("Monokuma");
	s.playVoice("Monokuma", 99, 168);
	s.showLine("Kyah!\nViolence towards the principal is against the rules!\n");    // "キャー！　学園長への暴力は校則違反だよ～ッ！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 120: "Mondo Oowada"
	s.setSpeaker("Mondo Oowada");
	s.playVoice("Mondo Oowada", 99, 47);
	s.showLine("Shaddup! You're gonna let us out now,\nwhether you like it or not...!\n");    // "るせぇ！！　今すぐ俺らをここから出せッ！\nでなきゃ力ずくでも…！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 121: "Monokuma"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xE8, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.playBGM(255, 0, 60);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(0, "Monokuma", 7, 8, 4);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(203, 100);
	s.setSpeaker("Monokuma");
	s.showLine("..................\n");    // "…………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 122: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 6, 1, 4);
	s.playVoice("Mondo Oowada", 99, 3);
	s.showLine("Hey... Are you listenin' to me...!?\n");    // "おい…今更シカトかぁ…！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 123: "Monokuma"
	s.showSprite(0, "Monokuma", 7, 1, 4);
	s.showLine("..................\n");    // "…………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 124: "Mondo Oowada"
	s.playSoundEffectA(65535, 100);
	s.playSoundEffectA(204, 100);
	s.showSprite(0, "Mondo Oowada", 5, 1, 4);
	s.playVoice("Mondo Oowada", 99, 10);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Don't make weird sounds and say something!\n");    // "妙な機械音出してねぇで、\nなんとか言いやがれッ！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 125: "Kyouko Kirigiri"
	s.showSprite(1, "Kyouko Kirigiri", 13, 1, 2);
	s.playVoice("Kyouko Kirigiri", 99, 47);
	s.showLine("Watch out!\nThrow him...!\n");    // "危ない、投げて…ッ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 126: "Mondo Oowada"
	s.playSoundEffectA(65535, 100);
	s.playSoundEffectA(205, 100);
	s.showSprite(0, "Mondo Oowada", 7, 1, 4);
	s.playVoice("Mondo Oowada", 99, 18);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh...?\n");    // "あ…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 127: "Kyouko Kirigiri"
	s.showSprite(1, "Kyouko Kirigiri", 13, 1, 2);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.playSoundEffectA(25, 100);
	s.showLine("Just listen to me and throw him...!\n");    // "いいから早く…ッ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 128: "Makoto Naegi"
	s.showSprite(0, "Mondo Oowada", 7, 1, 4);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Pressured by her words,\nOowada did as she said...\n<CLT>");    // "<CLT 4>彼女の言葉に気圧されたのか、\n大和田クンは言われるままに…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 129: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>And threw Monokuma.\n<CLT>");    // "<CLT 4>モノクマを放り投げた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 130: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>A moment later...!\n<CLT>");    // "<CLT 4>と、次の瞬間…！！\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 131: "Mondo Oowada"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x10]);
	s.showSprite(0, "Mondo Oowada", 7, 3, 4);
	s.showSprite(1, "Kyouko Kirigiri", 13, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xE9, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x10]);
	s.op(0x06, [0x02, 0xE9, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.playSoundEffectA(65535, 100);
	s.playSoundEffectA(214, 100);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.op(0x22, [0x01, 0x02, 0x18]);
	s.op(0x06, [0x02, 0xE9, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.playBGM(6, 100, 0);
	s.op(0x25, [0x06, 0x00]);
	s.showSprite(1, "Mondo Oowada", 10, 8, 4);
	s.op(0x22, [0x00, 0x02, 0x40]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Mondo Oowada");
	s.playVoice("Mondo Oowada", 99, 19);
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Wha-...!?\n");    // "なっ…！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 132: "Mondo Oowada"
	s.playVoice("Mondo Oowada", 99, 20);
	s.showLine("Th-This ain't funny...\nIt-It... blew up...\n");    // "しゃ、洒落んなってねーぞ…\nば、爆発…しやがった…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 133: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My ears were still in pain from the noise...\nMy nose picked up the smell of gunpowder...\n<CLT>");    // "<CLT 4>痛みを伴う激しい耳鳴り…\nむせ返る火薬の匂い…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 134: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I've seen explosions in movies and TV shows,\nbut I've never seen it in real life.\n<CLT>");    // "<CLT 4>爆発なんて、映画やテレビじゃ当たり前かもしれない。\nだけど、生で本物を見たのは…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 135: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>もちろん、これが初めてだった。\n<CLT>");    // "<CLT 4>もちろん、これが初めてだった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 136: "Chihiro Fujisaki"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Chihiro Fujisaki", 6, 1, 3);
	s.playVoice("Chihiro Fujisaki", 99, 13);
	s.showLine("But that means...\nthat that stuffed animal... broke...\n");    // "でも、爆発したって事は…\nあのヌイグルミも…壊れて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 137: "Monokuma"
	s.showSprite(0, "Chihiro Fujisaki", 6, 4, 3);
	s.setSpeaker("Monokuma");
	s.playVoice("Monokuma", 99, 21);
	s.playSoundEffectA(28, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("I'm not a stuffed animal!\nI'm Monokuma!\n");    // "ヌイグルミじゃなくてモノクマ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 138: "Reon Kuwata"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(133, 100);
	s.showSprite(0, "Monokuma", 0, 6, 3);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.showSprite(1, "Reon Kuwata", 7, 1, 1);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Reon Kuwata");
	s.playVoice("Reon Kuwata", 99, 26);
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("Woah!\nHe came out from nowhere...\n");    // "うぉっ！　別のが出てきやがった…\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 139: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 8, 1, 4);
	s.playVoice("Mondo Oowada", 99, 16);
	s.showLine("Y-You...!\nYou seriously... tried to killed me just now...\n");    // "テ、テメェ…！\nさっきの…マジに俺を殺そうとしやがったな…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 140: "Monokuma"
	s.showSprite(1, "Monokuma", 2, 1, 2);
	s.playVoice("Monokuma", 99, 76);
	s.showLine("Of course I was seriously trying to kill you.\nYou broke the school rules, right?\n");    // "当たり前じゃん。マジに殺そうとしたんだもん。\n校則違反するのがイケナイんでしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 141: "Monokuma"
	s.showLine("That was just a special warning,\nbut be careful next time.\n");    // "今のは、特別に警告だけで許すけど、\n今後は気を付けてよね。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 142: "Monokuma"
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("Bad kids who break school rules\nwon't just get away with some spanking!\n");    // "校則違反をするような悪い子は、\nお尻ペンペンレベルの体罰じゃ済まさないからッ！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 143: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 3, 1, 3);
	s.playVoice("Junko Enoshima (fake)", 99, 9);
	s.showLine("H-Hey... Don't tell me that\nthere are lots of copies of you...?\n");    // "ね、ねぇ…ひょっとして、アンタみたいのって、\n他にもたくさんいたりするの…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 144: "Monokuma"
	s.showSprite(1, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 74);
	s.showLine("Monokumas are placed at various places\nthroughout this school.\n");    // "モノクマは、学園内の至る所に配置されております。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 145: "Monokuma"
	s.showLine("Also, security cameras are\nplaced all over the school.\n");    // "さらに、学園内には監視カメラも配備されております。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 146: "Monokuma"
	s.showLine("If anyone breaks the school rules,\nthey'll get a punishment like that!\n");    // "そして、校則を破る者を発見した場合は、\n今みたいなグレートな体罰を発動しちゃうからねっ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 147: "Monokuma"
	s.showSprite(1, "Monokuma", 3, 1, 2);
	s.playVoice("Monokuma", 99, 29);
	s.showLine("Ehehe... Next time, I won't miss...\nDon't let there be a next time!\n");    // "うぷぷ…次からは外さないから…\nそうならないように気をつけてね！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 148: "Aoi Asahina"
	s.showSprite(0, "Aoi Asahina", 9, 1, 3);
	s.playVoice("Aoi Asahina", 99, 18);
	s.playSoundEffectA(27, 100);
	s.showLine("Th-This is too much...\n");    // "む、無茶苦茶…だよ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 149: "Monokuma"
	s.showSprite(1, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 4);
	s.showLine("Then... finally, let me give you guys this present\nto celebrate your entrance into this school.\n");    // "じゃあ…最後に、入学祝いとして、\nオマエラにこれを渡しておきましょう。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 150: "Monokuma"
	s.op(0x06, [0x0B, 0xB9, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.showSprite(1, "Monokuma", 13, 1, 2);
	s.playVoice("Monokuma", 99, 98);
	s.showLine("This is your notepad.\nIsn't it cool?\n");    // "この学園の生徒手帳です。\nカッコイイでしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 151: "Monokuma"
	s.showLine("This digitalized notepad for students is called...!\n");    // "電子化された生徒手帳、\nその名も…なんとっ！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 152: "Monokuma"
	s.playSoundEffectA(29, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x03]);
	s.showLine("the <CLT 3>Student Tablet<CLT>!\n");    // "<CLT 3>電子生徒手帳<CLT>です！！\n"
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 153: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 154: "Monokuma"
	s.op(0x06, [0x0B, 0xB9, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.showSprite(1, "Monokuma", 0, 1, 2);
	s.playVoice("Monokuma", 99, 8);
	s.showLine("Ahem, as I was saying...\n");    // "コホン、気を取り直して…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 155: "Monokuma"
	s.showLine("Your Student Tablets are absolutely necessary\nfor your school life, so don't ever lose them!\n");    // "電子生徒手帳は学園生活に欠かす事の出来ない\n必需品だから、絶対になくさないようにね！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 156: "Monokuma"
	s.showLine("When you start it up, it shows your name,\nso make sure that the tablet belongs to you.\n");    // "それと、起動時に自分の本名が表示されるから、\nちゃんと確認しておいてね。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 157: "Monokuma"
	s.showSprite(1, "Monokuma", 3, 1, 2);
	s.playVoice("Monokuma", 99, 53);
	s.showLine("It's much more than just a simple tablet...\n");    // "単なる手帳以外の使い道もあるんでね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 158: "Monokuma"
	s.showSprite(1, "Monokuma", 13, 1, 2);
	s.playVoice("Monokuma", 99, 68);
	s.showLine("By the way, they're completely waterproof!\nThey'll be fine even if you dump them in water!\n");    // "ちなみに、その電子生徒手帳は完全防水で、\n水に沈めても壊れない優れ物！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 159: "Monokuma"
	s.showLine("It can also endure 10 tons of pressure!\n");    // "耐久性も抜群で、\n１０トンくらいの重さなら平気だよ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 160: "Monokuma"
	s.showLine("The <CLT 3>school rules<CLT> are also written in there,\nso take your time to read them!\n");    // "詳しい<CLT 3>“校則”<CLT>もここに書いてあるんで、\n各自、じっくりと読んでおくよーに！\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 161: "Monokuma"
	s.showSprite(1, "Monokuma", 1, 1, 2);
	s.playVoice("Monokuma", 99, 12);
	s.showLine("I've said it before...\nbut don't violate school rules!\n");    // "何度も言うけど…校則違反は許さないからね！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 162: "Monokuma"
	s.showSprite(1, "Monokuma", 12, 1, 2);
	s.playVoice("Monokuma", 99, 52);
	s.showLine("Rules tie people down to protect them.\nSociety can't function without laws, right?\n");    // "ルールは人を縛りもするけど守りもするんだ。\n社会でも、法律がないと平和は成立しないでしょ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 163: "Monokuma"
	s.showSprite(1, "Monokuma", 4, 1, 2);
	s.playVoice("Monokuma", 99, 9);
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Like laws, we need punishments\nfor those who break the rules!\n");    // "それと一緒！\nだから、違反者は厳しく罰する必要があるのです！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 164: "Monokuma"
	s.showLine("Then, that's all for the entrance ceremony!\n");    // "ではでは、入学式はこれで終了となります！！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 165: "Monokuma"
	s.playVoice("Monokuma", 99, 63);
	s.showLine("Please enjoy your rich and gloomy school lives!\nThen, see you later~!\n");    // "豊かで陰惨な学園生活をどうぞ楽しんでください！\nそれじゃあ、まったね～！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 166: "Makoto Naegi"
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.playSoundEffectA(133, 100);
	s.showSprite(1, "Monokuma", 0, 7, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Monokuma", 98, 0, 0);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...And just like that, Monokuma left.\nOnly we, the dumbfounded students, were left...\n<CLT>");    // "<CLT 4>…そして、モノクマは去って行った。\n呆然とするボクらだけを残して…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 167: "Kiyotaka Ishimaru"
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Kiyotaka Ishimaru", 15, 1, 2);
	s.playVoice("Kiyotaka Ishimaru", 99, 26);
	s.showLine("D-Do any of you...\nknow what that was?\n");    // "き、君達は…\n今のを一体どういうモノであると定義する？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 168: "Reon Kuwata"
	s.showSprite(1, "Reon Kuwata", 6, 1, 1);
	s.playVoice("Reon Kuwata", 99, 32);
	s.showLine("I don't... even...\nI don't understand a thing...\n");    // "どうも…何も…\nぜんっぜん、意味わかんねーよ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 169: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 8, 1, 0);
	s.playVoice("Touko Fukawa", 99, 9);
	s.showLine("L-Live here for the rest of our lives...?\nK-K-Kill...?\n");    // "こ、ここで一生暮らす…？\nこ、こ、殺す…？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 170: "Touko Fukawa"
	s.showSprite(0, "Touko Fukawa", 5, 1, 0);
	s.playVoice("Touko Fukawa", 99, 11);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Wh-What was that...?\nWhat is thaaaaaaaaaaaat!?\n");    // "な、なんなの…？\nなんなのよぉぉぉおッ！？\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 171: "Kyouko Kirigiri"
	s.showSprite(1, "Kyouko Kirigiri", 10, 1, 1);
	s.playVoice("Kyouko Kirigiri", 99, 35);
	s.showLine("Everyone... calm down...\n");    // "みんな…落ち着いて…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 172: "Kyouko Kirigiri"
	s.showLine("In any case, let's go over what happened again.\n");    // "とりあえず、今の話を\nもう１度まとめてみましょう。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 173: "Kyouko Kirigiri"
	s.showLine("According to what that \"Monokuma\" thing said,\nwe have <CLT 3>two choices<CLT>.\n");    // "あのモノクマとやらの発言によると、\n私達には<CLT 3>“２つの選択肢”<CLT>が与えられた事になる。\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 174: "Kyouko Kirigiri"
	s.showLine("The first choice is to live together in this school\nfor the rest of our lives...\n");    // "１つは、みんなと共に、\nこの学園内で“期限のない共同生活”を送るか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 175: "Kyouko Kirigiri"
	s.showLine("The other choice is...\n");    // "もう１つは…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 176: "Celestia Rudenberk"
	s.showSprite(0, "Celestia Rudenberk", 1, 1, 2);
	s.playVoice("Celestia Rudenberk", 99, 37);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("To kill another student and get out... right?\n");    // "生きて出る為に、\n“仲間の誰かを殺す”…でしたわね？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 177: "Chihiro Fujisaki"
	s.showSprite(1, "Chihiro Fujisaki", 5, 1, 3);
	s.playVoice("Chihiro Fujisaki", 99, 32);
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("\"K-Kill\"... No way......\n");    // "こ、殺すなんて…そんな……\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 178: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 5, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 21);
	s.showLine("Getting kidnapped all of a sudden...\nLocked in a school-like place...\n");    // "いきなり拉致られて…\n学校らしき場所に閉じ込められて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 179: "Hifumi Yamada"
	s.showLine("And told to kill each other...\n");    // "そんで、いきなり殺し合い…ってコレ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 180: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 10, 1, 2);
	s.playVoice("Hifumi Yamada", 99, 59);
	s.playSoundEffectA(29, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...What in heavens is this!?\n");    // "…ってコレ、なんなんですかーッ！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 181: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 12, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 21);
	s.showLine("No way... This can't be...\nThis must be a lie...!\n");    // "ウソだ…そんなバカげた話…\nウソに決まってるじゃないか…！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 182: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 0, 1, 1);
	s.playVoice("Byakuya Togami", 99, 4);
	s.showLine("The problem isn't whether it's true or not.\nThe problem is...\n");    // "本当かウソかが問題なのではない。\n問題となるのは…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 183: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 1, 1, 1);
	s.playVoice("Byakuya Togami", 99, 23);
	s.playSoundEffectA(28, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Whether or not there's someone among us\nwho thinks that it's true...\n");    // "この中に、その話を本気にするヤツが\nいるかどうかだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 184: "Makoto Naegi"
	s.playBGM(255, 60, 0);
	s.showSprite(0, "Byakuya Togami", 1, 4, 1);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Those words... made us silent yet again.\n<CLT>");    // "<CLT 4>その言葉に…ボクらは再び押し黙った。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 185: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Silently... we looked around at each other.\n<CLT>");    // "<CLT 4>押し黙ったまま…互いの顔を見回していた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 186: "Makoto Naegi"
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x30]);
	s.showSprite(1, "Kiyotaka Ishimaru", 12, 3, 3);
	s.playSoundEffectA(33, 100);
	s.op(0x25, [0x06, 0x01]);
	s.playBGM(12, 100, 0);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x30]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x78]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>We looked at each other with slight hostility\nwhile we tried to read each others' thoughts.\n<CLT>");    // "<CLT 4>互いの胸の内を探ろうとする視線からは、\n薄っすらとした敵意まで感じ取れた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 187: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Then...\n<CLT>");    // "<CLT 4>そして…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 188: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I finally realized the true terror\nof Monokuma's rule.\n<CLT>");    // "<CLT 4>そこで、ボクはモノクマが提示したルールの\n本当の恐ろしさを知ったんだ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 189: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"You can leave if you kill someone\"...\n<CLT>");    // "<CLT 4>『誰かを殺した生徒だけがここから出られる…』\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 190: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Those words planted a terrible thought\ndeep within my consciousness.\n<CLT>");    // "<CLT 4>その言葉は、ボクらの思考の奥深くに、\n“恐ろしい考え”を植え付けていた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 191: "Makoto Naegi"
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>The thought that <CLT><CLT 3>someone may betray us...\n<CLT>");    // "<CLT 3>『誰かが裏切るのでは？』<CLT><CLT 4>という疑心暗鬼を…\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 192: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x40]);
	s.playSoundEffectA(65535, 100);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That was how our school life began.\n<CLT>");    // "<CLT 4>こうして、ボクの新たな学園生活は始まった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 193: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Even though I came to this school\nwith many hopes and expectations...\n<CLT>");    // "<CLT 4>でも、期待に胸を膨らませてやって来た\nこの学園は…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 194: "Makoto Naegi"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>I realized that this place isn't the <CLT><CLT 3>\"Academy of Hope.\"\n<CLT>");    // "<CLT><CLT 3>“希望の学園”<CLT><CLT 4>なんかじゃなかった。\n"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 195: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This place...\n<CLT>");    // "<CLT 4>ここは……\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 196: "Makoto Naegi"
	s.op(0x03, [0x03]);
	s.showLine("<CLT 4>was the <CLT><CLT 3>\"Academy of Despair.\"\n<CLT>");    // "<CLT 3>“絶望の学園”<CLT><CLT 4>だったんだ。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 197: "[No Name]"
	s.playBGM(255, 120, 0);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x06, [0x03, 0x72, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x72, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0xB4]);
	s.op(0x22, [0x01, 0x01, 0x40]);
	s.op(0x06, [0x03, 0x72, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.playBGM(255, 0, 0);
	s.playBGM(255, 0, 0);
	s.playMovie(0, false);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x10]);
	s.op(0x0D, [0x5C, 0x01, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x06, [0x08, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x03, [0x17]);
	s.showLine(present_received("School Lapel Pin"));    // "<CLT 23>プレゼント<CLT><CLT 3>“校章バッジ”<CLT><CLT 23>を獲得しました。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0xB4]);
	s.waitForInput();


	// Line 197: "[No Name]"
	s.op(0x06, [0x08, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x22, [0x01, 0x01, 0x10]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.playBGM(255, 0, 0);
	s.op(0x25, [0x32, 0x00]);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x10]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x0C, 0x01]);
	s.goToScript(1, 0, 0);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
