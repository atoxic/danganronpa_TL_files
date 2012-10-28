/**
 * Day zero: in gym lobby before meeting Monokuma
 * @method e00_005_004_lin
 **/
function e00_005_004_lin()
{
	var s = new LINScript();
	// Line 1: "Mondo Oowada"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x04, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(1, "Mondo Oowada", 0, 0, 0);
	s.showSprite(7, "Sayaka Maizono", 0, 0, 0);
	s.showSprite(4, "Kyouko Kirigiri", 0, 0, 0);
	s.showSprite(5, "Sakura Ookami", 0, 0, 0);
	s.showSprite(6, "Junko Enoshima (fake)", 0, 0, 0);
	s.playBGM(3, 100, 0);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x0E, 0x01]);
	s.op(0x25, [0x1A, 0x03]);
	s.op(0x25, [0x09, 0x01]);
	s.showSprite(0, "Mondo Oowada", 11, 1, 2);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Mondo Oowada");
	s.playVoice("Mondo Oowada", 99, 5);
	s.showLine("To think that Mount Hope Academy\nis such a dark place...\n");    // "それにしてもよぉ…\n希望ヶ峰学園がこんな辛気くせぇ場所だとはなぁ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 2: "Mondo Oowada"
	s.showLine("Just like the juvie I was in.\nNo, worse...\n");    // "どっちかっつーと、俺のいた鑑別所みてーだ。\nいや、それよりヒデーかもな…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 3: "Sayaka Maizono"
	s.showSprite(1, "Sayaka Maizono", 1, 1, 3);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("Besides... why isn't anyone else here?\nWe haven't seen anyone else...\n");    // "それに…どうして誰もいないんですかね？\n今だって校内を歩いてても、誰とも会わなかったし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 4: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 3, 1, 4);
	s.playVoice("Junko Enoshima (fake)", 99, 9);
	s.showLine("Doesn't this... feel like trouble?\n");    // "なんだかさ…マジでヤバいんじゃない？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 5: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 10, 1, 1);
	s.playVoice("Kiyotaka Ishimaru", 99, 17);
	s.showLine("Th-They must be trying to scare us!\nThey'll remove the metal plates after this...\n");    // "ぼ、僕らを驚かせようとしてるだけだろう！\nあの鉄板だって後で外してくれるに違いない…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 6: "Sakura Ookami"
	s.showSprite(0, "Sakura Ookami", 0, 1, 0);
	s.playVoice("Sakura Ookami", 99, 3);
	s.showLine("In any case, we should prepare for the worst.\nNothing ventured, nothing gained...\n");    // "どちらにせよ、腹をくくる他あるまい。\n虎穴に入らずんば虎児を得ず…だ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 7: "Mondo Oowada"
	s.showSprite(1, "Mondo Oowada", 7, 1, 2);
	s.playVoice("Mondo Oowada", 99, 14);
	s.showLine("Who're ya calling scared...\nLet's go...!\n");    // "別にビビってる訳じゃねーんだ…\n行ってやろうじゃねぇか…！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 8: "Mondo Oowada"
	s.showSprite(1, "Mondo Oowada", 5, 1, 2);
	s.playVoice("Mondo Oowada", 99, 3);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Grrah! Who was the bastard that\ndared to tell me where to go!?\n");    // "オラァ！　俺様を呼び出しやがったのは、\nどこのどいつだぁ！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.playSoundEffectA(142, 100);
	s.showSprite(1, "Mondo Oowada", 5, 5, 2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 9: "Kiyotaka Ishimaru"
	s.showSprite(0, "Kiyotaka Ishimaru", 7, 1, 1);
	s.playVoice("Kiyotaka Ishimaru", 99, 45);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("Hey, Oowada!\nNo running in the halls!\n");    // "おい、大和田くんッ！　校内を走ってはいけないぞ！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.playSoundEffectA(142, 100);
	s.showSprite(0, "Kiyotaka Ishimaru", 7, 5, 1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 10: "Sakura Ookami"
	s.showSprite(1, "Sakura Ookami", 5, 1, 0);
	s.playVoice("Sakura Ookami", 99, 34);
	s.showLine("Then, I'm going too...\n");    // "では、我も行くとしよう…\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(141, 100);
	s.showSprite(1, "Sakura Ookami", 5, 5, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();


	// Line 11: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 21, 1, 4);
	s.playVoice("Hifumi Yamada", 99, 58);
	s.showLine("Ah, wait!\nDon't leave me by myself!\n");    // "あぁ、待って！　１人にしないでッ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.playSoundEffectA(142, 100);
	s.showSprite(0, "Hifumi Yamada", 21, 5, 4);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 12: "[No Name]"
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Kiyotaka Ishimaru", 98, 0, 0);
	s.showSprite(1, "Mondo Oowada", 98, 0, 0);
	s.showSprite(2, "Hifumi Yamada", 98, 0, 0);
	s.showSprite(5, "Sakura Ookami", 98, 0, 0);
	s.op(0x15, [0x07, 0x01, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>This is <CLT><CLT 3>the tutorial<CLT><CLT 23> speaking.\n<CLT>");    // "<CLT 23>はい、<CLT><CLT 3>チュートリアル<CLT><CLT 23>でごさいます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 13: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>It's possible to use <CLT><CLT 3>the △ button<CLT><CLT 23>\nto <CLT><CLT 3>survey<CLT><CLT 23> a room.\n<CLT>");    // "<CLT 23>部屋の中では、<CLT><CLT 3>△ボタン<CLT><CLT 23>で、\n周囲を<CLT><CLT 3>観察<CLT><CLT 23>する事が可能でございます。\n<CLT>"
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


	// Line 14: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 3>Surveying<CLT><CLT 23> will allow you to easily\nfind objects to investigate.\n<CLT>");    // "<CLT 23><CLT><CLT 3>観察<CLT><CLT 23>によって、調査対象を簡単に発見できます。\nご連絡が遅れまして、申し訳ございません。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	
	
	// Line 14: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>Sorry for the late notice.\n<CLT>");    // "<CLT 23><CLT><CLT 3>観察<CLT><CLT 23>によって、調査対象を簡単に発見できます。\nご連絡が遅れまして、申し訳ございません。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 15: "Sayaka Maizono"
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x27, [0x07]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Sayaka Maizono", 1, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 3);
	s.showLine("Where are the other students...\nWhy are we freshmen the only ones here?\n");    // "他の生徒さん達はどこに行ったんですかね…？\nどうして、私達しかいないんですかね…？\n"
	s.waitFrames(2);
	s.waitForInput();
	s.showSprite(0, "Sayaka Maizono", 1, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 16: "Kyouko Kirigiri"
	s.op(0x27, [0x04]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Kyouko Kirigiri", 0, 1, 2);
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();
	s.op(0x25, [0x00, 0x01]);


	// Line 17: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Silence...\n<CLT>");    // "<CLT 4>無言…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 18: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She's the only one who's this calm...\n<CLT>");    // "<CLT 4>彼女は…なんだか１人だけ冷静のような…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>..Or am I imagining things?\n<CLT>");    // "<CLT 4>…気のせいか？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.showSprite(0, "Kyouko Kirigiri", 0, 4, 2);
	s.op(0x25, [0x01, 0x00]);


	// Line 20: "Junko Enoshima (fake)"
	s.op(0x27, [0x06]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.showSprite(0, "Junko Enoshima (fake)", 2, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 9);
	s.showLine("I'm getting bad vibes from this place...\n");    // "なんか…ヤバげな雰囲気なんですけど…\n"
	s.waitFrames(1);
	s.showSprite(0, "Junko Enoshima (fake)", 2, 4, 2);
	s.op(0x25, [0x01, 0x00]);
	s.waitForInput();


	// Line 21: "Makoto Naegi"
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This school sure has lots of TVs...\n<CLT>");    // "<CLT 4>この学園、ずいぶんテレビが多いな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 22: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Maybe they're for schoolwide broadcasts\nlike that strange one just now?\n<CLT>");    // "<CLT 4>さっきの変な校内放送のためじゃないよな？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 23: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>More security cameras...\nAll of these cameras make me nervous...\n<CLT>");    // "<CLT 4>ここにも監視カメラ…\n常に見られているようで落ち着かないな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 24: "Makoto Naegi"
	s.op(0x29, [0x16]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.playSoundEffectA(145, 100);
	s.op(0x25, [0x0F, 0x01]);
	s.goToScript(0, 6, 7);
	s.op(0x1A);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is a showcase, huh?\nThere are lots of trophies and plaques in here.\n<CLT>");    // "<CLT 4>これはショーウインドウかな？\nトロフィーやら楯やらが飾られている。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 25: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Well, all of the students here are super students...\n<CLT>");    // "<CLT 4>この学園に集まってくる生徒は、\n超高校級の人ばかりだし…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This is probably just a small portion of all awards...\n<CLT>");    // "<CLT 4>これはほんの一部なんだろうな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	s.op(0x25, [0x01, 0x00]);


	// Line 27: "Makoto Naegi"
	s.op(0x29, [0xFE]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Gotta go inside the gym...\n<CLT>");    // "<CLT 4>体育館に行かなきゃな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 27: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
