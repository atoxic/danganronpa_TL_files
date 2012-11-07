function e01_001_007_lin()
{
	var s = new LINScript();
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x07, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Kyouko Kirigiri", 0, 0, 0);
	s.showSprite(1, "Celestia Rudenberg", 0, 0, 0);
	s.showSprite(3, "Aoi Asahina", 0, 0, 0);
	s.showSprite(8, "Byakuya Togami", 0, 0, 0);
	s.showSprite(9, "Chihiro Fujisaki", 0, 0, 0);
	s.showSprite(10, "Kiyotaka Ishimaru", 0, 0, 0);
	s.showSprite(14, "Reon Kuwata", 0, 0, 0);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x03, 0x00]);
	s.playBGM(32, 100, 0);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x40]);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>\"You can leave if you kill someone\"...\n<CLT>");    // "<CLT 4>『誰かを殺した生徒だけがここから出られる…』\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Those words grabbed my mind and body...\nand refused to let go.\n<CLT>");    // "<CLT 4>ボクの思考と体は…\nその言葉にすっかり絡め取られていた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 3: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Fear and anxiety permeated through my body...\nand took control.\n<CLT>");    // "<CLT 4>恐怖と不安が、ゆっくりと浸透していき…\n全身を支配していく。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 4: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>The heavy air mercilessly weighed down\non my head and shoulders.\n<CLT>");    // "<CLT 4>あたりに漂った重い空気が、\n容赦なく、ボクの頭や肩にのしかかる。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 5: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Holding up that weight took all that I had.\n<CLT>");    // "<CLT 4>その重みに耐えるだけで…精一杯だった。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 6: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.playBGM(255, 60, 0);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xBD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x40]);
	s.playSoundEffectB(1, 100);
	s.op(0x06, [0x02, 0xBD, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0xF0]);
	s.op(0x22, [0x01, 0x01, 0x40]);
	s.op(0x06, [0x02, 0xBD, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x33, [0x0F, 0x00, 0x00, 0x12]);
	s.playBGM(32, 100, 0);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Then, her blunt words pierced through this heavy atmosphere...\n<CLT>");    // "<CLT 4>そんな重苦しい空気…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 7: "Makoto Naegi"
	/*
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>それを打ち破ったのは…\n彼女の無愛想な一言だった。\n<CLT>");    // "<CLT 4>それを打ち破ったのは…\n彼女の無愛想な一言だった。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 8: "Kyouko Kirigiri"
	s.playBGM(255, 90, 0);
	s.setSpeaker("Kyouko Kirigiri");
	s.playVoice("Kyouko Kirigiri", 99, 3);
	s.showLine("So, what are we going to do now?\n");    // "それで、これからどうする気？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 9: "Kyouko Kirigiri"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xEA, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x1A, 0x08]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x14]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Kyouko Kirigiri", 1, 1, 2);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Kyouko Kirigiri");
	s.playVoice("Kyouko Kirigiri", 99, 8);
	s.showLine("Are we going to stare at each other forever?\n");    // "このまま…ずっと、にらめっこしている気？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 10: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.playBGM(255, 0, 0);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>彼女のトゲのある言葉は、\nその場の全員に向けられていた…\n<CLT>");    // "<CLT 4>彼女のトゲのある言葉は、\nその場の全員に向けられていた…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>だけど、そのトゲが…\nボクらを現実へと引き戻した。\n<CLT>");    // "<CLT 4>だけど、そのトゲが…\nボクらを現実へと引き戻した。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 12: "Kiyotaka Ishimaru"
	s.playBGM(3, 100, 0);
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Kiyotaka Ishimaru", 15, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 51);
	s.showLine("そうだな…確かにそうだ……\n");    // "そうだな…確かにそうだ……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 13: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 6, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 8);
	s.showLine("怖かろうと不安だろうと、\n歩を進めなければならぬ時がある！\n");    // "怖かろうと不安だろうと、\n歩を進めなければならぬ時がある！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 14: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 23, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 5);
	s.showLine("そんな簡単な事を忘れるなんて…\n僕は自分が情けない…許せない…\n");    // "そんな簡単な事を忘れるなんて…\n僕は自分が情けない…許せない…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 15: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 11);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("誰か殴ってくれないか！　僕は自分が許せないんだ！\n頼むから誰か僕を殴ってくれッ！！\n");    // "誰か殴ってくれないか！　僕は自分が許せないんだ！\n頼むから誰か僕を殴ってくれッ！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 16: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 1, 1, 4);
	s.playVoice("Mondo Oowada", 99, 37);
	s.showLine("騒いでるヒマがあんなら、\nさっさと体を動かせや…\n");    // "騒いでるヒマがあんなら、\nさっさと体を動かせや…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 17: "Hifumi Yamada"
	s.showSprite(0, "Hifumi Yamada", 5, 1, 4);
	s.playVoice("Hifumi Yamada", 99, 19);
	s.showLine("しかし、具体的にはどんなミッションを…？\n");    // "しかし、具体的にはどんなミッションを…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 18: "Reon Kuwata"
	s.showSprite(1, "Reon Kuwata", 14, 1, 1);
	s.playVoice("Reon Kuwata", 99, 42);
	s.showLine("バァカ！　逃げ道を探すに決まってんじゃん！\n");    // "バァカ！　逃げ道を探すに決まってんじゃん！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 19: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 4, 1, 3);
	s.playVoice("Junko Enoshima (fake)", 99, 19);
	s.showLine("ついでに、あのふざけたヌイグルミ操ってるヤツを\n見つけて、袋叩きっしょ。\n");    // "ついでに、あのふざけたヌイグルミ操ってるヤツを\n見つけて、袋叩きっしょ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 20: "Chihiro Fujisaki"
	s.showSprite(0, "Chihiro Fujisaki", 4, 1, 3);
	s.playVoice("Chihiro Fujisaki", 99, 16);
	s.showLine("…でもさぁ、その前に、\n電子生徒手帳っていうのを見ておこうよぉ…\n");    // "…でもさぁ、その前に、\n電子生徒手帳っていうのを見ておこうよぉ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 21: "Chihiro Fujisaki"
	s.showLine("動き回る前に、モノクマが言ってた<CLT 3>“校則”<CLT>を\n確認しておいた方がいいと思うんだ…\n");    // "動き回る前に、モノクマが言ってた<CLT 3>“校則”<CLT>を\n確認しておいた方がいいと思うんだ…\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 22: "Celestia Rudenberg"
	s.showSprite(1, "Celestia Rudenberg", 3, 1, 2);
	s.playVoice("Celestia Rudenberg", 99, 6);
	s.showLine("ルールも知らずに行動して、さっきのように\nドカンとなってしまったら困りますものね。\n");    // "ルールも知らずに行動して、さっきのように\nドカンとなってしまったら困りますものね。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 23: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 2, 1, 4);
	s.showLine("チッ…\n");    // "チッ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 24: "Junko Enoshima (fake)"
	s.showSprite(1, "Junko Enoshima (fake)", 1, 1, 2);
	s.playVoice("Junko Enoshima (fake)", 99, 7);
	s.showLine("じゃあ、さっそく、\nその校則ってのを確認しよっか…\n");    // "じゃあ、さっそく、\nその校則ってのを確認しよっか…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 25: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(1, "Junko Enoshima (fake)", 1, 3, 2);
	s.showSprite(0, "Mondo Oowada", 2, 3, 4);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x02, 0xEB, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.playSoundEffectB(20, 100);
	s.op(0x06, [0x02, 0xEB, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x5A]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>電子生徒手帳を起動させると、\n最初に、ボクの名前が浮かび上がった。\n<CLT>");    // "<CLT 4>電子生徒手帳を起動させると、\n最初に、ボクの名前が浮かび上がった。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>モノクマの言った通り、\nここには、持ち主本人の名前が表示されるようだ。\n<CLT>");    // "<CLT 4>モノクマの言った通り、\nここには、持ち主本人の名前が表示されるようだ。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 27: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>その後、表示されたメニュー画面の中から、<CLT>\n<CLT 3>“校則”<CLT><CLT 4>のアイコンを選択すると…<CLT>\n<CLT>");    // "<CLT 4>その後、表示されたメニュー画面の中から、<CLT>\n<CLT 3>“校則”<CLT><CLT 4>のアイコンを選択すると…<CLT>\n<CLT>"
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 28: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xEB, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x02, 0xEC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xEC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>画面上に浮かび上がる箇条書きの文章…\nこれが<CLT><CLT 3>“校則”<CLT><CLT 4>…<CLT>\n");    // "<CLT 4>画面上に浮かび上がる箇条書きの文章…\nこれが<CLT><CLT 3>“校則”<CLT><CLT 4>…<CLT>\n"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x04]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 29: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>つまり、ボクらに課せられたルール…\n<CLT>");    // "<CLT 4>つまり、ボクらに課せられたルール…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 30: "[No Name]"
	s.op(0x25, [0x02, 0x00]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>生徒達はこの学園内だけで共同生活を行いましょう。\n共同生活の期限はありません。\n<CLT>");    // "<CLT 23>生徒達はこの学園内だけで共同生活を行いましょう。\n共同生活の期限はありません。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 31: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x02, 0xEC, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x03, 0x97, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x97, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>夜１０時から朝７時までを<CLT><CLT 3>“夜時間”<CLT><CLT 23>とします。\n夜時間は立ち入り禁止区域があるので注意しましょう。\n<CLT>");    // "<CLT 23>夜１０時から朝７時までを<CLT><CLT 3>“夜時間”<CLT><CLT 23>とします。\n夜時間は立ち入り禁止区域があるので注意しましょう。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 32: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x03, 0x97, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x03, 0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>就寝は寄宿舎エリアに設けられた個室でのみ可能です。\n他の部屋での故意の就寝は居眠りとみなし罰します。\n<CLT>");    // "<CLT 23>就寝は寄宿舎エリアに設けられた個室でのみ可能です。\n他の部屋での故意の就寝は居眠りとみなし罰します。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 33: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x03, 0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x03, 0x99, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x99, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>希望ヶ峰学園について調べるのは自由です。\n特に行動に制限は課せられません。\n<CLT>");    // "<CLT 23>希望ヶ峰学園について調べるのは自由です。\n特に行動に制限は課せられません。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 34: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x03, 0x99, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x03, 0x9A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x9A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>学園長ことモノクマへの暴力を禁じます。\n監視カメラの破壊を禁じます。\n<CLT>");    // "<CLT 23>学園長ことモノクマへの暴力を禁じます。\n監視カメラの破壊を禁じます。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 35: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x03, 0x9A, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x03, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>仲間の誰かを殺したクロは<CLT><CLT 3>“卒業”<CLT><CLT 23>となりますが、\n自分がクロだと他の生徒に知られてはいけません。\n<CLT>");    // "<CLT 23>仲間の誰かを殺したクロは<CLT><CLT 3>“卒業”<CLT><CLT 23>となりますが、\n自分がクロだと他の生徒に知られてはいけません。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 36: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x08]);
	s.op(0x06, [0x03, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x06, [0x03, 0x9C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x9C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>なお、校則は順次増えていく場合があります。\n<CLT>");    // "<CLT 23>なお、校則は順次増えていく場合があります。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 37: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x9C, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>ボクは、軽いめまいを覚えながら、\n画面から顔を上げた。\n<CLT>");    // "<CLT 4>ボクは、軽いめまいを覚えながら、\n画面から顔を上げた。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 38: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>見ると、他のみんなも、\n一様に渋い表情を浮かべている…\n<CLT>");    // "<CLT 4>見ると、他のみんなも、\n一様に渋い表情を浮かべている…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 39: "Mondo Oowada"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(1, "Mondo Oowada", 4, 1, 2);
	s.playVoice("Mondo Oowada", 99, 9);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("ざけんな、何が校則だ！\nそんなモンに支配されてたまっかよ！\n");    // "ざけんな、何が校則だ！\nそんなモンに支配されてたまっかよ！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 40: "Celestia Rudenberg"
	s.showSprite(0, "Celestia Rudenberg", 2, 1, 3);
	s.playVoice("Celestia Rudenberg", 99, 7);
	s.showLine("でしたら、校則など気にせず\n行動してみたらいかがです？\n");    // "でしたら、校則など気にせず\n行動してみたらいかがです？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 41: "Celestia Rudenberg"
	s.showLine("わたくしとしても、校則を破った場合、\nどうなるのか知りたいところですし…\n");    // "わたくしとしても、校則を破った場合、\nどうなるのか知りたいところですし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 42: "Hifumi Yamada"
	s.showSprite(1, "Hifumi Yamada", 5, 1, 1);
	s.playVoice("Hifumi Yamada", 99, 19);
	s.showLine("しかし…そんな事になれば、\n大和田紋土殿は、残機ゼロ状態に…\n");    // "しかし…そんな事になれば、\n大和田紋土殿は、残機ゼロ状態に…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 43: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 9, 1, 2);
	s.showLine("………………\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 44: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 0, 1, 2);
	s.playVoice("Mondo Oowada", 99, 2);
	s.showLine("オレはなぁ…ガキん時から、\n兄貴にしつけーくらいに言われて育ったんだよ。\n");    // "オレはなぁ…ガキん時から、\n兄貴にしつけーくらいに言われて育ったんだよ。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 45: "Mondo Oowada"
	s.showLine("“男の約束”は死んでも守れってよぉ…\n");    // "“男の約束”は死んでも守れってよぉ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 46: "Junko Enoshima (fake)"
	s.showSprite(1, "Junko Enoshima (fake)", 8, 1, 3);
	s.playVoice("Junko Enoshima (fake)", 99, 20);
	s.showLine("…で？\n");    // "…で？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 47: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 1, 1, 2);
	s.playVoice("Mondo Oowada", 99, 8);
	s.showLine("オレには、まだ守りきれてねー約束があんだ…\n");    // "オレには、まだ守りきれてねー約束があんだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 48: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 5, 1, 2);
	s.playVoice("Mondo Oowada", 99, 10);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x03]);
	s.showLine("だから、ここで死ぬ訳にゃいかねーんだよッ！！\n");    // "だから、ここで死ぬ訳にゃいかねーんだよッ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 49: "Celestia Rudenberg"
	s.showSprite(1, "Celestia Rudenberg", 8, 1, 3);
	s.playVoice("Celestia Rudenberg", 99, 24);
	s.showLine("よくわかりませんが、\nとりあえず、校則は守るという事でよろしいですね？\n");    // "よくわかりませんが、\nとりあえず、校則は守るという事でよろしいですね？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 50: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 12, 1, 2);
	s.playVoice("Mondo Oowada", 99, 23);
	s.showLine("…ん？　\nあぁ…そうなるかな…\n");    // "…ん？　\nあぁ…そうなるかな…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 51: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 9, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 20);
	s.showLine("あの…ちょっといいですか…\n");    // "あの…ちょっといいですか…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 52: "Sayaka Maizono"
	s.showLine("校則の６番の項目なんですけど…\nこれって、どういう意味だと思います？\n");    // "校則の６番の項目なんですけど…\nこれって、どういう意味だと思います？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 53: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Sayaka Maizono", 9, 3, 2);
	s.showSprite(1, "Celestia Rudenberg", 8, 3, 3);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x03, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x9B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>仲間の誰かを殺したクロは<CLT><CLT 3>“卒業”<CLT><CLT 23>となりますが、\n自分がクロだと他の生徒に知られてはいけません。\n<CLT>");    // "<CLT 23>仲間の誰かを殺したクロは<CLT><CLT 3>“卒業”<CLT><CLT 23>となりますが、\n自分がクロだと他の生徒に知られてはいけません。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x97, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("後半の<CLT 3>『他の生徒に知られてはならない』<CLT>の\n部分だよね？\n");    // "後半の<CLT 3>『他の生徒に知られてはならない』<CLT>の\n部分だよね？\n"
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(2);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.showLine("確かに、ボクも気になったんだよね…\n");    // "確かに、ボクも気になったんだよね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 56: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 0, 1, 2);
	s.op(0x25, [0x01, 0x01]);
	s.playVoice("Byakuya Togami", 99, 4);
	s.showLine("…卒業したいなら、\n誰にも知られないように殺せという事だろう。\n");    // "…卒業したいなら、\n誰にも知られないように殺せという事だろう。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 57: "Touko Fukawa"
	s.showSprite(1, "Touko Fukawa", 6, 1, 0);
	s.playVoice("Touko Fukawa", 99, 10);
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("な、なんでよ…どうして？\n");    // "な、なんでよ…どうして？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 58: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 0, 1, 2);
	s.playVoice("Byakuya Togami", 99, 3);
	s.showLine("…そんな事、気にする必要はない。\n");    // "…そんな事、気にする必要はない。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 59: "Byakuya Togami"
	s.showLine("与えられたルールは守るもの…\nお前らは、それだけ覚えていればいいんだ…\n");    // "与えられたルールは守るもの…\nお前らは、それだけ覚えていればいいんだ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 60: "Byakuya Togami"
	s.showSprite(0, "Byakuya Togami", 6, 1, 2);
	s.playVoice("Byakuya Togami", 99, 45);
	s.showLine("他人に決めてもらわねば何も出来ないお前らが、\n偉そうに、疑問など口にするな。\n");    // "他人に決めてもらわねば何も出来ないお前らが、\n偉そうに、疑問など口にするな。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 61: "Touko Fukawa"
	s.showSprite(1, "Touko Fukawa", 2, 1, 0);
	s.playVoice("Touko Fukawa", 99, 25);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("…グッとくるわね。\n");    // "…グッとくるわね。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 62: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 1, 1, 1);
	s.playVoice("Reon Kuwata", 99, 11);
	s.showLine("グサッとじゃなく？\n");    // "グサッとじゃなく？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 63: "Aoi Asahina"
	s.showSprite(1, "Aoi Asahina", 1, 1, 3);
	s.playVoice("Aoi Asahina", 99, 4);
	s.showLine("…とりあえずさ、\n殺人がどうとかバカげた話は置いといて…\n");    // "…とりあえずさ、\n殺人がどうとかバカげた話は置いといて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 64: "Aoi Asahina"
	s.showSprite(1, "Aoi Asahina", 21, 1, 3);
	s.playVoice("Aoi Asahina", 99, 41);
	s.showLine("これで、校則もわかった事だし、\nそろそろ学園内を探索してみようよ！\n");    // "これで、校則もわかった事だし、\nそろそろ学園内を探索してみようよ！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 65: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 14, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 25);
	s.showLine("ここはどこなのか？　脱出口はないのか？\n食糧や生活品はあるのか？\n");    // "ここはどこなのか？　脱出口はないのか？\n食糧や生活品はあるのか？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 66: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 7, 1, 3);
	s.playVoice("Kiyotaka Ishimaru", 99, 12);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("僕らには、知らなければならない事が山積みだッ！\n");    // "僕らには、知らなければならない事が山積みだッ！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 67: "Reon Kuwata"
	s.showSprite(0, "Reon Kuwata", 11, 1, 1);
	s.playVoice("Reon Kuwata", 99, 34);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("うぉっしゃあ！\nさっそく、みんな一緒に探索すんぞー！\n");    // "うぉっしゃあ！\nさっそく、みんな一緒に探索すんぞー！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 68: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 14, 1, 2);
	s.playVoice("Byakuya Togami", 99, 4);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("…俺は１人で行くぞ。\n");    // "…俺は１人で行くぞ。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 69: "Junko Enoshima (fake)"
	s.showSprite(0, "Junko Enoshima (fake)", 8, 1, 3);
	s.playVoice("Junko Enoshima (fake)", 99, 22);
	s.showLine("はぁ！？　どうしてよ！\n流れ的におかしくない？\n");    // "はぁ！？　どうしてよ！\n流れ的におかしくない？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 70: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 6, 1, 2);
	s.playVoice("Byakuya Togami", 99, 4);
	s.showLine("すでに他人を殺そうと目論んでいるヤツが、\nこの中にいるかもしれない…\n");    // "すでに他人を殺そうと目論んでいるヤツが、\nこの中にいるかもしれない…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 71: "Byakuya Togami"
	s.showLine("そんなヤツと一緒に行動しろと言うのか？\n");    // "そんなヤツと一緒に行動しろと言うのか？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 72: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 9, 1, 1);
	s.playVoice("Sayaka Maizono", 99, 21);
	s.showLine("ちょ、ちょっと待ってください。\nそんな事…！\n");    // "ちょ、ちょっと待ってください。\nそんな事…！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 73: "Byakuya Togami"
	s.playBGM(255, 60, 0);
	s.showSprite(1, "Byakuya Togami", 3, 1, 2);
	s.playVoice("Byakuya Togami", 99, 5);
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("ないとは言い切れないはずだ。\n");    // "ないとは言い切れないはずだ。\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.waitForInput();


	// Line 74: "Byakuya Togami"
	s.showLine("だからこそ、お前らは卒業のルールを聞いて恐怖した。\n");    // "だからこそ、お前らは卒業のルールを聞いて恐怖した。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 75: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 2, 1, 2);
	s.playVoice("Byakuya Togami", 99, 7);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("…違うか？\n");    // "…違うか？\n"
	s.waitFrames(1);
	s.playBGM(6, 100, 0);
	s.waitForInput();


	// Line 76: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 2, 1, 1);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("そ、それは…\n");    // "そ、それは…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 77: "Sayaka Maizono"
	s.showLine("………………\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 78: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 14, 1, 2);
	s.playVoice("Byakuya Togami", 99, 4);
	s.showLine("…俺は自分の思った通りに行動させてもらう。\n");    // "…俺は自分の思った通りに行動させてもらう。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 79: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 6, 1, 4);
	s.playVoice("Mondo Oowada", 99, 12);
	s.showLine("待てコラ…んな勝手は許さねぇぞ…\n");    // "待てコラ…んな勝手は許さねぇぞ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 80: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 4, 1, 2);
	s.playVoice("Byakuya Togami", 99, 13);
	s.showLine("…どけよ、プランクトン。\n");    // "…どけよ、プランクトン。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 81: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 4, 1, 4);
	s.playVoice("Mondo Oowada", 99, 8);
	s.playSoundEffectA(25, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("ああッ！？　どういう意味だッ！？\n");    // "ああッ！？　どういう意味だッ！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 82: "Byakuya Togami"
	s.showSprite(1, "Byakuya Togami", 6, 1, 2);
	s.playVoice("Byakuya Togami", 99, 45);
	s.showLine("大海に漂う１匹のプランクトン…\n");    // "大海に漂う１匹のプランクトン…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 83: "Byakuya Togami"
	s.showLine("何をしようが、広い海に影響を及ぼす事のない\nちっぽけな存在だ…\n");    // "何をしようが、広い海に影響を及ぼす事のない\nちっぽけな存在だ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 84: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 6, 1, 4);
	s.playVoice("Mondo Oowada", 99, 13);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("…ころがされてぇみてーだな！\n");    // "…ころがされてぇみてーだな！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 85: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("ちょ、ちょっと待ってよ！\nケンカはマズイって！！\n");    // "ちょ、ちょっと待ってよ！\nケンカはマズイって！！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 86: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 6, 1, 4);
	s.playVoice("Mondo Oowada", 99, 8);
	s.showLine("あぁ？　なんだオメェ…\n今キレイ事言ったな？\n");    // "あぁ？　なんだオメェ…\n今キレイ事言ったな？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 87: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 4, 1, 4);
	s.playVoice("Mondo Oowada", 99, 15);
	s.playSoundEffectA(28, 100);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("そいつは説教かぁ？\nオレに教えを説くっつーのか！？\n");    // "そいつは説教かぁ？\nオレに教えを説くっつーのか！？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("い、いや、そんなつもりは…\n");    // "い、いや、そんなつもりは…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 89: "Mondo Oowada"
	s.showSprite(0, "Mondo Oowada", 5, 1, 4);
	s.playVoice("Mondo Oowada", 99, 11);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("るせぇっ！！\n");    // "るせぇっ！！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 90: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.playBGM(255, 0, 0);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.playSoundEffectA(211, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x0A, 0x3C, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(210, 100);
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>「ガンッ！！」\n<CLT>");    // "<CLT 23>「ガンッ！！」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 91: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x01, 0x01, 0x10]);
	s.showSprite(0, "Mondo Oowada", 5, 3, 4);
	s.showSprite(1, "Byakuya Togami", 6, 3, 2);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x10]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>殴られた…\n<CLT>");    // "<CLT 4>殴られた…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 92: "Makoto Naegi"
	s.playSoundEffectA(216, 100);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>そして吹っ飛んだ。\n<CLT>");    // "<CLT 4>そして吹っ飛んだ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 93: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>マンガみたいにキレイに吹っ飛んだ。\n<CLT>");    // "<CLT 4>マンガみたいにキレイに吹っ飛んだ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 94: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>なんの前ふりも伏線もなく、\n極めて唐突で突発的に…\n");    // "<CLT 4>なんの前ふりも伏線もなく、\n極めて唐突で突発的に…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 95: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>殴られて吹っ飛んだ……\n<CLT>");    // "<CLT 4>殴られて吹っ飛んだ……\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 96: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>そう言えば…ボクは忘れていたのかもしれない…\n<CLT>");    // "<CLT 4>そう言えば…ボクは忘れていたのかもしれない…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 97: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>そもそも、ボクが相手にしているのは、\nそういう人達だったんだよな…\n<CLT>");    // "<CLT 4>そもそも、ボクが相手にしているのは、\nそういう人達だったんだよな…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 98: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>今までのボクの常識なんてまるで通じない…\n“超高校級”なんて、非常識な集まり…\n<CLT>");    // "<CLT 4>今までのボクの常識なんてまるで通じない…\n“超高校級”なんて、非常識な集まり…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 99: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>当然、こんな非常識な展開もあり得る。\n<CLT>");    // "<CLT 4>当然、こんな非常識な展開もあり得る。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 100: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>それを…ボクは忘れてた……のかも……\n<CLT>");    // "<CLT 4>それを…ボクは忘れてた……のかも……\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 101: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>ボクの意識は、ゆっくりと遠のき…\n<CLT>");    // "<CLT 4>ボクの意識は、ゆっくりと遠のき…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 102: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>そこで途切れた。\n<CLT>");    // "<CLT 4>そこで途切れた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 103: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x15, [0x67, 0x01, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>そして、次に目を覚ました時、\nそこは…\n<CLT>");    // "<CLT 4>そして、次に目を覚ました時、\nそこは…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 103: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.playBGM(36, 100, 0);
	s.op(0x22, [0x65, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.goToScript(1, 1, 103);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
