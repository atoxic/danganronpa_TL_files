function e01_003_135_lin()
{
	var s = new LINScript();
	// Line 2: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x26, [0x0F, 0x20, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x87, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 0, 0, 0);
	s.op(0x25, [0x11, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x2B, [0x00]);
	s.showLine("【確認したい事】\n");    // "【確認したい事】\n"
	s.waitFrames(1);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("What did you want to confirm...?\n");    // "ボクに確認したい事って…何？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 3: "Sayaka Maizono"
	s.playBGM(255, 180, 0);
	s.showSprite(0, "Sayaka Maizono", 16, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 30);
	s.showLine("Naegi, did you go to the Sixth?\n");    // "苗木君って、\nひょっとすると六中じゃないですか？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 4: "Sayaka Maizono"
	// TODO: eliminated joke because no one would get it
	s.showLine("Were you in class 2...\nof Meguro City Sixth Middle School?\n");    // "根黒六中の…二組の……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 5: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Y-Yeah... I did...\n");    // "う、うん…そうだけど…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 6: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 6, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 15);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...I knew it!\n");    // "…やっぱり！\n"
	s.waitFrames(1);
	s.playBGM(10, 100, 0);
	s.waitForInput();


	// Line 7: "Sayaka Maizono"
	s.showLine("I went to the Sixth too!\nDid you know that I was in class 4?\n");    // "私も同じ根黒六中だったんです！\n四組にいたんですけど、知ってます？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 8: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("Can't say I didn't...\n");    // "知ってるも何も…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 9: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>While she was in middle school,\nshe was already super super famous...\n<CLT>");    // "<CLT 4>彼女は中学時代から、\n超が何個も付くほどの有名人だった…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 10: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There was no way for me to not know about her...\n<CLT>");    // "<CLT 4>ボクが知らないはずがない…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Anyway, the more surprising revelation...\n<CLT>");    // "<CLT 4>そんな事より、むしろ驚いたのは…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 12: "Makoto Naegi"
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>is the fact that she remembered me!\n<CLT>");    // "<CLT 4>彼女が、ボクを覚えててくれた事だ！\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 13: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>We weren't in the same class,\nand we never talked to each other before...\n<CLT>");    // "<CLT 4>同じクラスだった訳でもなく、\nまともに話した事すらないボクなんかの事を…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 14: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 0, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 2);
	s.showLine("What... is it...?\n");    // "どうか…しました…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 15: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("...No, I was just surprised.\nI didn't think that you would remember me...\n");    // "…いや、ちょっと驚いちゃってさ。\n舞園さんが、ボクを覚えてるとは思わなくて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 16: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.showLine("Of course I'd remember you!\nWe went to the same school, right?\n");    // "覚えてるに決まってるじゃないですか！\nだって、同じ中学校だったんですよ？\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 17: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("But there were lots of other people in our grade...\n");    // "同じ中学校って…\nでも、同級生ならたくさんいたし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 18: "Makoto Naegi"
	s.showLine("I didn't stand out at all...\n");    // "それに、ボクなんか、\nどこにでもいる目立たないヤツで…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.showLine("I was average at everything. My tastes are so\nnormal that mainstream doesn't even begin to...\n");    // "何事にも平均的で大抵の趣味がランキング１位だし、\n王道って言葉すら裸足で逃げ出す普通中の普通で…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 20: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 6, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 38);
	s.showLine("Jeez, what are you saying?\n");    // "もーうっ、何言ってんですかぁ？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 21: "Sayaka Maizono"
	s.showLine("You sure are strange, Naegi.\n");    // "苗木君って変わってますね。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 22: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("I-I'm not strange at all!\n");    // "か、変わってるなんて、そんなっ！\n"
	s.waitFrames(1);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 23: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 26);
	s.showLine("Ahaha...!\n");    // "アハハ…！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 24: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>She made a high-pitched laugh.\n<CLT>");    // "<CLT 4>彼女はケタケタと声を上げて笑っていた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 25: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Somehow, looking at her laugh\nmade me feel relaxed...\n<CLT>");    // "<CLT 4>それは、見ていると心が和んでいくような\n不思議な笑顔だった…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It was... the best of the best laughter.\n<CLT>");    // "<CLT 4>最高以外の表現が思いつかないほどの…\n最高の笑顔だった。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 27: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 6, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 13);
	s.showLine("...But it's great to hear\nthat I know someone here!\n");    // "…でも、ホントに良かったです！\n知ってる人がいてくれて…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 28: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 15);
	s.showLine("And I feel refreshed after talking to you, Naegi!\n");    // "それに、苗木君と話していたら、\nなんだか元気出てきたかも！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 29: "Sayaka Maizono"
	s.showLine("Naegi, you sure are amazing!\n");    // "苗木君って、すごいですね！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 30: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("No... I'm not that big of a...\n");    // "いや…ボクなんて…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 31: "Makoto Naegi"
	s.showLine("Compared to all of the \"super students\" here,\nI'm not amazing at all...\n");    // "“超高校級”なんて言われる他のみんなに比べたら、\n全然、大した事ない人間だし…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 32: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.showLine("But none of those \"super students\"\nhave made me feel better like you.\n");    // "でも、私を勇気付けられたのは苗木君だけですよ。\n他の“超高校級”の人達には出来なかった事です。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 33: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	// TODO: check
	s.showLine("Th-Thanks...\nYou make me sound like I'm amazing...\n");    // "あ、ありがとう…そんな風に言ってもらって……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 34: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 6, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 16);
	s.showLine("Okay! To thank you for making me feel better,\nI'm become a <CLT 3>\"super assistant\"<CLT>!\n");    // "よーし、勇気付けられたお礼に、\n私は<CLT 3>“超高校級の助手”<CLT>になっちゃお！\n"
	s.waitFrames(1);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 35: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("Huh? Assistant?\n");    // "は？　助手？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 36: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 26);
	s.showLine("Your assistant, Naegi!\n");    // "苗木君の助手です！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 37: "Sayaka Maizono"
	s.showLine("I'll do my best to help you get us out of here!\n");    // "私も精一杯、手伝いますから、\n一緒に、ここから出ましょうね！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 38: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Talking with Maizono...\nmakes me feel...\n<CLT>");    // "<CLT 4>舞園さんに…そんな風に言われると…\nなんだか…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 39: "Makoto Naegi"
	s.playBGM(255, 60, 0);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x04]);
	// TODO: lol-calization
	s.showLine("<CLT 4>like I'm 110% recharged and ready to go!\n<CLT>");    // "<CLT 4>がぜん、やる気が出てきたぞっ！\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 40: "Makoto Naegi"
	s.playBGM(3, 100, 0);
	s.op(0x26, [0x0F, 0x00, 0x01]);
	s.op(0x35, [0x0F, 0x01, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF5]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Well, nothing wrong with that...\n<CLT>");    // "<CLT 4>のはいいけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 41: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>In any case, everyone's so late...\n<CLT>");    // "<CLT 4>それにしても、みんな遅いな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 42: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>What time is it anyway?\n<CLT>");    // "<CLT 4>それに、そもそも、今って何時だ？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 43: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There should be a clock somewhere...\n<CLT>");    // "<CLT 4>どこかに時計があったはずだよな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 45: "Makoto Naegi"
	s.op(0x2A, [0x01, 0xF5]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF6]);
	s.op(0x26, [0x0F, 0x02, 0x01]);
	s.op(0x34, [0x00, 0x01]);
	s.op(0x2A, [0x01, 0xF6]);
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 5, 4, 2);
	s.op(0x2B, [0x01]);
	s.showLine("【自己紹介の時の続き】\n");    // "【自己紹介の時の続き】\n"
	s.waitFrames(1);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("自己紹介の時の続き…？\n");    // "自己紹介の時の続き…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 46: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 1, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("さっきは、途中で終わっちゃいましたけど、\n苗木君に聞いておきたい事があるんです。\n");    // "さっきは、途中で終わっちゃいましたけど、\n苗木君に聞いておきたい事があるんです。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 47: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>舞園さんがボクに聞きたい事なんて…\n<CLT>");    // "<CLT 4>舞園さんがボクに聞きたい事なんて…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 48: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>…なんだろう。気になるな。\n<CLT>");    // "<CLT 4>…なんだろう。気になるな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 50: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 1, 4, 2);
	s.op(0x2B, [0x02]);
	s.showLine("【紫色の言葉】\n");    // "【紫色の言葉】\n"
	s.waitFrames(1);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Oh, would you happen to already know\nabout <CLT><CLT 3>\"Reaction Talk\"<CLT><CLT 23>?\n<CLT>");    // "<CLT 23>おや、もしや、<CLT><CLT 3>“リアクショントーク”<CLT><CLT 23>については、\nご存知でいらっしゃいますか？\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 51: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>However, let me explain it again,\njust to make sure.\n<CLT>");    // "<CLT 23>ですが、念の為…ご説明させて頂きます。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 53: "[No Name]"
	s.op(0x2B, [0x03]);
	s.showLine("【学園生活】\n");    // "【学園生活】\n"
	s.waitFrames(1);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>So you've already mastered \"Reaction Talk.\"\nSplendid work.\n<CLT>");    // "<CLT 23>さっそくお使いになられましたか。\nお見事でございます。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 54: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Please use it whenever you can to set flags...\nI mean, to advance the story.\n<CLT>");    // "<CLT 23>フラグ…いえストーリーをお進め頂くためにも、\n積極的なご利用をお願い致します。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.op(0x2B, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.playBGM(3, 100, 0);
	s.op(0x33, [0x00, 0x00, 0x00, 0x04]);
	s.op(0x25, [0x0E, 0x01]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x03, 0x01]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>So this is the cafeteria, huh...\n<CLT>");    // "<CLT 4>ここが…寄宿舎の食堂か…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 56: "Sayaka Maizono"
	s.op(0x25, [0x1A, 0x07]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 0, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 3);
	s.showLine("It's a good thing that it's clean.\n");    // "清潔そうな食堂で良かったですよね。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 57: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 1, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 0);
	s.showLine("...Wait, this isn't the time to be happy.\nWe're trapped in here, after all.\n");    // "…って、喜んでいる場合じゃありませんね。\n閉じ込められているんですもんね。\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 58: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("That's right...\n");    // "確かに…そうだね……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 59: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...As far as I can tell,\nno one else is here yet.\n<CLT>");    // "<CLT 4>…見た限りだと、\n他のみんなはまだ来てないみたいだな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 60: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Well, I guess we gotta wait for them...\n<CLT>");    // "<CLT 4>仕方ない…少しここで待ってるか…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 61: "Sayaka Maizono"
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.showLine("...Yes, let's wait for them.\n");    // "…そうですね、待ってましょう。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 62: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...Huh!? You heard me!?\n");    // "…えっ！？　聞こえた！？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 63: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 3, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 8);
	s.showLine("I'm a psychic, after all.\n");    // "エスパーですから。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 64: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 26);
	s.showLine("...Just kidding. It's just my intuition.\n");    // "…冗談です。ただの勘です。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 65: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Is it really... her intuition?\n<CLT>");    // "<CLT 4>ホントに…ただの勘？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 66: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 5, 4, 2);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Pardon the interruption,\nbut this is the tutorial speaking.\n<CLT>");    // "<CLT 23>突然ですが、チュートリアルです。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 67: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>I'm here to explain the <CLT><CLT 3>\"Reaction Talk\"<CLT><CLT 23> mechanism.\n<CLT>");    // "<CLT 23>今回は<CLT><CLT 3>“リアクショントーク”<CLT><CLT 23>について\nご説明させて頂きます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 68: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>You are planning to talk to Sayaka Maizono\nafter this, are you not...?\n<CLT>");    // "<CLT 23>これからあなた様は、\n舞園さやか様に話かけるおつもりでしょう…？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 69: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>話しかけた際に、<CLT><CLT 1>【紫色の言葉】<CLT><CLT 23>が出てきます。\nこんな感じでございます。\n<CLT>");    // "<CLT 23>話しかけた際に、<CLT><CLT 1>【紫色の言葉】<CLT><CLT 23>が出てきます。\nこんな感じでございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x01]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 70: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x01]);
	s.showLine("<CLT 23><CLT><CLT 1>【紫色の言葉】<CLT><CLT 23>が表示されている時に、△ボタンを\nお押し頂くと、リアクションモードとなります。\n<CLT>");    // "<CLT 23><CLT><CLT 1>【紫色の言葉】<CLT><CLT 23>が表示されている時に、△ボタンを\nお押し頂くと、リアクションモードとなります。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 71: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23><CLT><CLT 3>方向キー<CLT><CLT 23>で、言葉を選択し、\n<CLT><CLT 3>○ボタン<CLT><CLT 23>を押して頂く事で…\n<CLT>");    // "<CLT 23><CLT><CLT 3>方向キー<CLT><CLT 23>で、言葉を選択し、\n<CLT><CLT 3>○ボタン<CLT><CLT 23>を押して頂く事で…\n<CLT>"
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


	// Line 72: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>その言葉に対し、さらに深く内容を<CLT><CLT 3>聞き返す<CLT><CLT 23>事が\n可能でございます。\n<CLT>");    // "<CLT 23>その言葉に対し、さらに深く内容を<CLT><CLT 3>聞き返す<CLT><CLT 23>事が\n可能でございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 73: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>お相手様の発言に対し聞き返す…\nこれが<CLT><CLT 3>“リアクショントーク”<CLT><CLT 23>でございます。\n<CLT>");    // "<CLT 23>お相手様の発言に対し聞き返す…\nこれが<CLT><CLT 3>“リアクショントーク”<CLT><CLT 23>でございます。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 74: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>では、有意義な<CLT><CLT 1>【学園生活】<CLT><CLT 23>をお楽しみください。\n<CLT>");    // "<CLT 23>では、有意義な<CLT><CLT 1>【学園生活】<CLT><CLT 23>をお楽しみください。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x01]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 75: "Sayaka Maizono"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF7]);
	s.op(0x27, [0x00]);
	s.op(0x25, [0x09, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x00]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF8]);
	s.showSprite(0, "Sayaka Maizono", 0, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 2);
	s.showLine("ところで、苗木君…\n");    // "ところで、苗木君…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 76: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.showLine("えっ、何…？\n");    // "えっ、何…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 77: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 3, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 3);
	s.showLine("えっと、あのですね…\n");    // "えっと、あのですね…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 78: "Sayaka Maizono"
	s.op(0x03, [0x01]);
	s.showLine("<CLT 1>【自己紹介の時の続き】<CLT>になっちゃうんですけど、\n苗木君に<CLT 1>【確認したい事】<CLT>があるんです。\n");    // "<CLT 1>【自己紹介の時の続き】<CLT>になっちゃうんですけど、\n苗木君に<CLT 1>【確認したい事】<CLT>があるんです。\n"
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.op(0x03, [0x01]);
	s.op(0x03, [0x00]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 79: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>…確認したい事？\n<CLT>");    // "<CLT 4>…確認したい事？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 80: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>なんだろう。話を聞いてみるべきかな…\n<CLT>");    // "<CLT 4>なんだろう。話を聞いてみるべきかな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 81: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 3, 4, 2);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x34, [0x01, 0xF9]);
	s.op(0x2A, [0x01, 0xF8]);
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 26);
	s.showLine("今から、私は“超高校級の助手”です！\n一緒に頑張って、ここから脱出しましょうね！\n");    // "今から、私は“超高校級の助手”です！\n一緒に頑張って、ここから脱出しましょうね！\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 82: "Makoto Naegi"
	s.showSprite(0, "Sayaka Maizono", 5, 4, 2);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x2A, [0x01, 0xF9]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>えっと、今の時刻は…\n<CLT>");    // "<CLT 4>えっと、今の時刻は…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 83: "Makoto Naegi"
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(27, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x25, [0x0D, 0x01]);
	s.showLine("えっ！？　７時…！？　\nそれって夕方の？\n");    // "えっ！？　７時…！？　\nそれって夕方の？\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 84: "Sayaka Maizono"
	s.op(0x25, [0x03, 0x02]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x00, 0x00, 0x00, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x03, 0x03]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x1A, 0x07]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.showSprite(0, "Sayaka Maizono", 9, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 6);
	s.showLine("苗木君…ずいぶん長い時間、\n気を失ってたんですよ…\n");    // "苗木君…ずいぶん長い時間、\n気を失ってたんですよ…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 85: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>…そうだったんだ。\n<CLT>");    // "<CLT 4>…そうだったんだ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 86: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>窓がないせいで、\n時間の感覚がまるで掴めなかった。\n<CLT>");    // "<CLT 4>窓がないせいで、\n時間の感覚がまるで掴めなかった。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 87: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>こんな環境にずっといたら…気が狂いそうだな。\n<CLT>");    // "<CLT 4>こんな環境にずっといたら…気が狂いそうだな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	s.op(0x26, [0x0F, 0x01, 0x01]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFA]);
	s.op(0x26, [0x0F, 0x02, 0x01]);
	s.op(0x34, [0x00, 0x01]);
	s.op(0x2A, [0x01, 0xFA]);
	s.op(0x25, [0x01, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 9, 4, 2);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>モノクマが写るモニター…\n今は校章が浮かんでいるだけだけど…\n<CLT>");    // "<CLT 4>モノクマが写るモニター…\n今は校章が浮かんでいるだけだけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 89: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>でも、またいつモノクマが出てくるかと思うと…\n<CLT>");    // "<CLT 4>でも、またいつモノクマが出てくるかと思うと…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 90: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("はあ……\n");    // "はあ……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 91: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>監視カメラ…\n<CLT>");    // "<CLT 4>監視カメラ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 92: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>こんなカメラで見られていると思うと、\n気分が悪いけど…\n<CLT>");    // "<CLT 4>こんなカメラで見られていると思うと、\n気分が悪いけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 93: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>校則によると、監視カメラを壊したらマズイんだよな。\nムカツクけど、放っておくしかない…\n<CLT>");    // "<CLT 4>校則によると、監視カメラを壊したらマズイんだよな。\nムカツクけど、放っておくしかない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 94: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x1E, 0x00, 0x00, 0x0A]);
	s.op(0x1B, [0x08, 0x1E, 0x00]);
	s.op(0x29, [0x16]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>うろちょろしないで、\n大人しく、ここで待っていよう…\n<CLT>");    // "<CLT 4>うろちょろしないで、\n大人しく、ここで待っていよう…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 95: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFE]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>今、ここから出てもしかたない。\nみんなを待たないと。\n<CLT>");    // "<CLT 4>今、ここから出てもしかたない。\nみんなを待たないと。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 96: "Sayaka Maizono"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF7]);
	s.op(0x2A, [0x00, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.showSprite(0, "Sayaka Maizono", 16, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 2);
	s.showLine("それにしても、みんな遅いですね。\nそろそろ来てもいいと思うんですけど…\n");    // "それにしても、みんな遅いですね。\nそろそろ来てもいいと思うんですけど…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 97: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>と言った矢先だった。\nタイミングよく食堂のドアが開け放たれ…\n<CLT>");    // "<CLT 4>と言った矢先だった。\nタイミングよく食堂のドアが開け放たれ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 98: "Kiyotaka Ishimaru"
	s.op(0x25, [0x01, 0x00]);
	s.playSoundEffectA(145, 100);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.showSprite(1, "Kiyotaka Ishimaru", 2, 1, 1);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.playVoice("Kiyotaka Ishimaru", 99, 42);
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("苗木くんと舞園くん！　君達が一番乗りだったか！\n");    // "苗木くんと舞園くん！　君達が一番乗りだったか！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 99: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 17, 1, 1);
	s.playVoice("Kiyotaka Ishimaru", 99, 52);
	s.showLine("残念だ…僕が最初だと思ったのだが…\n");    // "残念だ…僕が最初だと思ったのだが…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 100: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 3, 1, 1);
	s.playVoice("Kiyotaka Ishimaru", 99, 5);
	s.showLine("まだ…気合が足りんという事か…！\n");    // "まだ…気合が足りんという事か…！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 101: "Kiyotaka Ishimaru"
	s.showSprite(1, "Kiyotaka Ishimaru", 8, 1, 1);
	s.playVoice("Kiyotaka Ishimaru", 99, 13);
	s.playSoundEffectA(25, 100);
	s.op(0x25, [0x0D, 0x01]);
	s.op(0x20, [0x04, 0x00, 0x1E, 0x04, 0x02]);
	s.showLine("だが諦めんぞ。次は必ずや勝ってみせるッ！！\n正義は必ず勝つのだッ！！\n");    // "だが諦めんぞ。次は必ずや勝ってみせるッ！！\n正義は必ず勝つのだッ！！\n"
	s.waitFrames(2);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x0D, 0x00]);
	s.waitForInput();


	// Line 102: "Sayaka Maizono"
	s.showSprite(0, "Sayaka Maizono", 5, 1, 2);
	s.playVoice("Sayaka Maizono", 99, 12);
	s.showLine("もうっ、大げさですって！\n");    // "もうっ、大げさですって！\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 103: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x03, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.showSprite(0, "Sayaka Maizono", 5, 3, 2);
	s.showSprite(1, "Kiyotaka Ishimaru", 8, 3, 1);
	s.playBGM(255, 90, 0);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x30, [0x00, 0x00, 0x01]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x15, [0x87, 0x01, 0xFF]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>それから間もなく…\n<CLT>");    // "<CLT 4>それから間もなく…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 104: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>石丸クンに続くようにして、\n他のみんなも次々と食堂に集まってきて…\n<CLT>");    // "<CLT 4>石丸クンに続くようにして、\n他のみんなも次々と食堂に集まってきて…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 105: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>そして、数分後には…\n<CLT>");    // "<CLT 4>そして、数分後には…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 106: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>…ようやく全員が揃った。\n<CLT>");    // "<CLT 4>…ようやく全員が揃った。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 106: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x01]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x00]);
	s.op(0x22, [0x65, 0x01, 0x18]);
	s.op(0x30, [0x00, 0x00, 0x03]);
	s.goToScript(1, 4, 0);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
