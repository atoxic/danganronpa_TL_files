function e01_001_103_lin()
{
	var s = new LINScript();
	// Line 1: "Makoto Naegi"
	s.op(0x22, [0x01, 0x00, 0x01]);
	s.op(0x25, [0x0B, 0x01]);
	s.op(0x25, [0x07, 0x00]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x33, [0x02, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x03, 0x00, 0x00, 0x64]);
	s.op(0x33, [0x00, 0x00, 0x00, 0x04]);
	s.op(0x26, [0x0F, 0x20, 0x00]);
	s.op(0x26, [0x00, 0x0C, 0x00]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x15, [0x67, 0x00, 0xFF]);
	s.op(0x25, [0x09, 0x00]);
	s.op(0x23, [0x1E, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x23, [0x1F, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x23, [0x20, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x22, [0x00, 0x01, 0x80]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x03, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x25, [0x01, 0x01]);
	s.showLine("Ooh...Ooh...\n");    // "うっ…うぅ……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 2: "Makoto Naegi"
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("...H-...Huh?\n");    // "…あ…れ？　\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 3: "Makoto Naegi"
	s.showLine("Wh-...Where is this...?\n");    // "こ…ここは…？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 4: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Like clockwork,\nI woke up in a room I don't remember...\n<CLT>");    // "<CLT 4>当たり前のように、\n見覚えのない部屋だった…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 5: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("A-Anyway...\n");    // "と、とりあえず…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 6: "Makoto Naegi"
	s.showLine("...where is this?\n");    // "…ここは、どこなんだ？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 7: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x15, [0x65, 0x01, 0xFF]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x26, [0x00, 0x04, 0x01]);
	s.op(0x26, [0x00, 0x05, 0x00]);
	s.op(0x26, [0x00, 0x06, 0x00]);
	s.op(0x26, [0x00, 0x07, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>You can now use the <CLT><CLT 3>tablet menu<CLT><CLT 23>, which contains\ninformation you collect in this game.\n<CLT>");    // "<CLT 23><CLT><CLT 3>手帳メニュー<CLT><CLT 23>を使えるようになります。\nゲーム中のさまざまな情報をご確認頂けます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 8: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>You can turn on the <CLT><CLT 3>tablet menu<CLT><CLT 23>\nby pressing the <CLT><CLT 3>□ button<CLT><CLT 23>.\n<CLT>");    // "<CLT 23><CLT><CLT 3>□ボタン<CLT><CLT 23>で、<CLT><CLT 3>手帳メニュー<CLT><CLT 23>を開く事が\n可能でございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 9: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>From there, you can go read the <CLT><CLT 3>\"Rules\"<CLT><CLT 23>\nand <CLT><CLT 3>information on everyone else<CLT><CLT 23> in \"Contacts.\"\n<CLT>");    // "<CLT 23>手帳メニューでは<CLT><CLT 3>“校則”<CLT><CLT 23>や、皆様のプロフィールを\n記録した<CLT><CLT 3>“通信簿”<CLT><CLT 23>などがご確認頂けます。\n<CLT>"
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


	// Line 10: "[No Name]"
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.showLine("<CLT 23>Options like <CLT><CLT 3>\"Map\"<CLT><CLT 23> and <CLT><CLT 3>\"Ammo\"<CLT><CLT 23>\nmay not be used in certain situations.\n<CLT>");    // "<CLT 23><CLT><CLT 3>“マップ”<CLT><CLT 23>や<CLT><CLT 3>“言弾（コトダマ）”<CLT><CLT 23>などの、特定の項目は、\n場合によってお使い頂けない事もございます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 11: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>You can also use the <CLT><CLT 3>\"System\"<CLT><CLT 23> option\nto save and load.\n<CLT>");    // "<CLT 23>ゲームの中断セーブやロードも、手帳メニューで\nご利用頂けます。<CLT><CLT 3>“システム”<CLT><CLT 23>の項目をご確認ください。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 12: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>You can also view the <CLT><CLT 3>\"Log\"<CLT><CLT 23>\nusing the <CLT><CLT 3>Select button<CLT><CLT 23>.\n<CLT>");    // "<CLT 23>また、<CLT><CLT 3>ＳＥＬＥＣＴボタン<CLT><CLT 23>で、<CLT><CLT 3>“バックログ”<CLT><CLT 23>を\nご覧頂けます。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 13: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Everyone's words are recorded on the log,\nso please use it if you want to read them again.\n<CLT>");    // "<CLT 23>こちらでは皆様の発言を記録致しておりますので、\n読み返したい場合に、ご利用ください。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 14: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xF4]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x16]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This looks like the door out...\n<CLT>");    // "<CLT 4>こっちは、部屋から出るドアみたいだけど…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 15: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>but it's locked.\n<CLT>");    // "<CLT 4>このドアには鍵が掛かるみたいだ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 16: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("A locked room... Hm...\n");    // "鍵のある部屋…か…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 17: "Makoto Naegi"
	s.op(0x26, [0x0F, 0x00, 0x01]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01, 0x06, 0x0F, 0x04, 0x00, 0x01, 0x06, 0x0F, 0x06, 0x00, 0x01, 0x06, 0x0F, 0x0C, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF5]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF5]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("This looks like... the shower room.\n");    // "ここは…シャワールームみたいだな。\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 18: "[No Name]"
	var lines_door = ["<CLT 23>\"Clack clack clack!\"\n<CLT>",
						"Huh? It won't open...\n",
						"Looks like... it's locked...\n"];
	s.op(0x25, [0x02, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.playSoundEffectA(153, 100);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine(lines_door[0]);    // "<CLT 23>「ガタガタガタ！」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 19: "Makoto Naegi"
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine(lines_door[1]);    // "あれ？　開かないな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 20: "Makoto Naegi"
	s.showLine(lines_door[2]);    // "鍵が掛かってる…みたいだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 21: "Makoto Naegi"
	var line_lint = "<CLT 4>This... is a lint remover.\bWe have to clean our own messes, huh...\n<CLT>";
	s.op(0x26, [0x0F, 0x01, 0x01]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01, 0x06, 0x0F, 0x04, 0x00, 0x01, 0x06, 0x0F, 0x06, 0x00, 0x01, 0x06, 0x0F, 0x0C, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF6]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF6]);
	s.op(0x29, [0x1C]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_lint);    // "<CLT 4>これは…粘着テープクリーナーだな。\n掃除はご自由にって事か…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 22: "Makoto Naegi"
	var lines_drawer = ["<CLT 4>There's something in the drawer...\n<CLT>",
						"<CLT 4>This... is a tool kit, right?\n<CLT>",
						"<CLT 4>It's still in its wrapping.\nLooks like this is brand new...\n<CLT>",
						"<CLT 4>I don't need it for now, so I'll put it back.\n<CLT>"];
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1D]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[0]);    // "<CLT 4>引き出しの中に何か入っている…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 23: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xBA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[1]);    // "<CLT 4>これは…工具セットだな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 24: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[2]);    // "<CLT 4>ビニールの包装がされてる。\nまだ、新品の未開封品みたいだけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 25: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[3]);    // "<CLT 4>少なくとも、今は使わないし、\n戻しておこう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 26: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xBA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.op(0x26, [0x0F, 0x04, 0x01]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01, 0x06, 0x0F, 0x04, 0x00, 0x01, 0x06, 0x0F, 0x06, 0x00, 0x01, 0x06, 0x0F, 0x0C, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF7]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF7]);
	s.op(0x29, [0x1A]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There's a piece of paper tape to the wall.\nIt says...\n<CLT>");    // "<CLT 4>壁に紙が貼られている。\n書いてある内容は…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 27: "[No Name]"
	s.op(0x25, [0x02, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Notice from Principal Monokuma\n<CLT>");    // "<CLT 23>モノクマ学園長からのお知らせ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 28: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>The room locks are reinforced against lock picking.\n<CLT>");    // "<CLT 23>部屋の鍵には、ピッキング防止加工が施されています。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 29: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>It's quite difficult to make a new key,\nso please don't lose your key.\n<CLT>");    // "<CLT 23>鍵の複製は困難な為、\n紛失しないようにしてください。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 30: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Even though this room has its own shower room,\nplease note that <CLT><CLT 3>they don't work at night<CLT><CLT 23>.\n<CLT>");    // "<CLT 23>部屋には、シャワールームが完備されていますが、\n<CLT><CLT 3>夜時間は水が出ない<CLT><CLT 23>ので注意してください。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 31: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Also, only the shower rooms in girls' rooms\nare equiped with locks.\n<CLT>");    // "<CLT 23>また、女子の部屋のみ、\nシャワールームが施錠出来るようになっています。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 32: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Finally, I've prepared some small presents.\n<CLT>");    // "<CLT 23>最後に、ささやかなプレゼントを用意してあります。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 33: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Feminine <CLT><CLT 3>sewing kits<CLT><CLT 23> for girls...\n");    // "<CLT 23>女子生徒には女子らしく<CLT><CLT 3>裁縫セット<CLT><CLT 23>を…\n"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(1);
	s.waitForInput();


	// Line 34: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>and masculing <CLT><CLT 3>tool kits<CLT><CLT 23> for boys.\n<CLT>");    // "<CLT 23>男子生徒には男子らしく<CLT><CLT 3>工具セット<CLT><CLT 23>を\nご用意しました。\n<CLT>"
	s.op(0x03, [0x00]);
	s.op(0x03, [0x03]);
	s.op(0x03, [0x00]);
	s.op(0x03, [0x17]);
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 35: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>The sewing sets each have a map of the vital parts\nof the human body to help girls kill in one strike.\n<CLT>");    // "<CLT 23>裁縫セットには人体急所マップも付いているので、\n女子のみなさんは、針で一突きするのが効果的です。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 36: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>The tool kits can be used to bludgeon others.\n<CLT>");    // "<CLT 23>男子の工具セットを使用する場合は、\n頭部への殴打が有効的かと思われます。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 37: "[No Name]"
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Don't think! Feel!\nLet's enjoy this!\n<CLT>");    // "<CLT 23>ドントシンクだ！　フィールだ！！\nレッツエンジョイだ！！\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 38: "Makoto Naegi"
	s.op(0x25, [0x02, 0x01]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("..................\n");    // "………………\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 39: "Makoto Naegi"
	s.op(0x23, [0x1A, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I rolled up the piece of paper\nand threw it into the trash can.\n<CLT>");    // "<CLT 4>ボクは紙を丸め、ゴミ箱の中に投げ捨てた。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 40: "Makoto Naegi"
	var line_TV = "<CLT 4>There's a TV...\n<CLT>";
	s.op(0x26, [0x0F, 0x06, 0x01]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01, 0x06, 0x0F, 0x04, 0x00, 0x01, 0x06, 0x0F, 0x06, 0x00, 0x01, 0x06, 0x0F, 0x0C, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF8]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF8]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_TV);    // "<CLT 4>テレビモニターがある…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 41: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Hm...\n");    // "はあ……\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 42: "Makoto Naegi"
	var lines_camera = ["<CLT 4>A security camera...\n<CLT>",
						"<CLT 4>I feel sick when I think about\nhow I'm being watched through this camera...\n<CLT>",
						"<CLT 4>However, it's against the rules to break it...\nso I gotta leave it be, as frustrating as that is...\n<CLT>"];
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[0]);    // "<CLT 4>監視カメラ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 43: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[1]);    // "<CLT 4>こんなカメラで見られていると思うと、\n気分が悪いけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 44: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[2]);    // "<CLT 4>校則によると、監視カメラを壊したらマズイんだよな…\nムカツクけど、放っておくしかない…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 45: "Makoto Naegi"
	s.op(0x26, [0x0F, 0x0A, 0x01]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x21]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x06, [0x0B, 0xBB, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Is this the key to this room...?\n<CLT>");    // "<CLT 4>これは、この部屋の鍵か…？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 46: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>My name is written on the keychain...\nso it's my key, right?\n<CLT>");    // "<CLT 4>キーホルダーに、\nボクの名前が書かれているけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 47: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>ボクの名前があるって事は、\nボクの物…なんだよな？\n<CLT>");    // "<CLT 4>ボクの名前があるって事は、\nボクの物…なんだよな？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 48: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Anyway... I guess I'll take it with me...\n<CLT>");    // "<CLT 4>とりあえず…預かっておくか…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 49: "Makoto Naegi"
	s.op(0x23, [0x21, 0x00, 0x00, 0x00, 0x00]);
	s.op(0x06, [0x0B, 0xBB, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.op(0x26, [0x0F, 0x0C, 0x01]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x35, [0x0F, 0x00, 0x00, 0x01, 0x06, 0x0F, 0x01, 0x00, 0x01, 0x06, 0x0F, 0x04, 0x00, 0x01, 0x06, 0x0F, 0x06, 0x00, 0x01, 0x06, 0x0F, 0x0C, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xF9]);
	s.op(0x34, [0x00, 0x00]);
	s.op(0x2A, [0x01, 0xF9]);
	s.op(0x29, [0x22]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>A bed...\nThere's nothing strange with it...\n<CLT>");    // "<CLT 4>ベッド…\n特に変わった所はないみたいだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 50: "Makoto Naegi"
	var lines_trash = ["<CLT 4>A normal trash can...\nThere's nothing strange about it...\n<CLT>",
						"<CLT 4>The ball of paper I rolled up and threw away\nis still in here.\n<CLT>"];
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x23]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_trash[0]);    // "<CLT 4>特になんの仕掛けもない…\n普通のゴミ箱みたいだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 51: "Makoto Naegi"
	s.op(0x35, [0x0F, 0x06, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFA]);
	s.op(0x03, [0x04]);
	s.showLine(lines_trash[1]);    // "<CLT 4>ゴミ箱の中には、\nさっき丸めて捨てた張り紙だけが捨ててある。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 52: "Makoto Naegi"
	var lines_drawer = ["<CLT 4>It's a desk with a drawer.\n<CLT>",
						"<CLT 4>It feels like any other desk designed for students...\n<CLT>"];
	s.op(0x2A, [0x01, 0xFA]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x1E, 0x00, 0x00, 0x08]);
	s.op(0x1B, [0x08, 0x1E, 0x00]);
	s.op(0x29, [0x28]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[0]);    // "<CLT 4>引き出しのある机だ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 53: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[1]);    // "<CLT 4>よくある学生用って感じだな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 54: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1B]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Here's a memo pad.\n<CLT>");    // "<CLT 4>メモ帳がある。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 55: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Does this come with the room?\n<CLT>");    // "<CLT 4>これは、ここの備え付けって事かな？\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 56: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Looks like... there's a metal plate\nbolted onto this window.\n<CLT>");    // "<CLT 4>なんか…鉄板のような物が打ち付けられている。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 57: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x19]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There's a metal plate bolted onto the window.\nAre they trying to shut us in?\n<CLT>");    // "<CLT 4>鉄板のような物が打ち付けられている。\nボクらを閉じ込めようとしてる？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 58: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFE]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Anyway...\nlet's explore this room...\n<CLT>");    // "<CLT 4>とりあえず…\nこの部屋の事を調べてみよう…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 59: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xF4]);
	s.op(0x2A, [0x00, 0x00]);
	s.op(0x25, [0x1B, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x3C]);
	s.op(0x25, [0x10, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("I think... I get where this is now...\n");    // "なんとなく…わかってきたぞ。\nきっと、ここは…\n"
	s.waitFrames(2);
	s.waitForInput();


	// Line 60: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x25, [0x03, 0x02]);
	s.op(0x25, [0x06, 0x01]);
	s.op(0x06, [0x03, 0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x06, [0x03, 0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x1E]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x33, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine("<CLT 23>Students may only sleep within their rooms and\nwill be punished if they purposely sleep elsewhere.\n<CLT>");    // "<CLT 23>就寝は寄宿舎エリアに設けられた個室でのみ可能です。\n他の部屋での故意の就寝は居眠りとみなし罰します。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 61: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x33, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x22, [0x01, 0x01, 0x18]);
	s.op(0x06, [0x02, 0xEC, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]);
	s.op(0x25, [0x06, 0x00]);
	s.op(0x25, [0x03, 0x03]);
	s.op(0x22, [0x00, 0x01, 0x18]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.op(0x25, [0x03, 0x01]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>This... must be my room...\n<CLT>");    // "<CLT 4>ここが…その寄宿舎エリアにある個室…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 62: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>...Someone must've carried me here.\n<CLT>");    // "<CLT 4>…多分、気を失ったボクを\n誰かが運んで来てくれたんだろうな。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 63: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>That's one question down.\nThe next question is...\n<CLT>");    // "<CLT 4>最初の問題はこれでクリア。\nでは、次の問題…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 64: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine("what's everyone else doing?\n");    // "他のみんなは…どうしてるんだ？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 65: "Makoto Naegi"
	s.op(0x25, [0x00, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>In order to know,\nthere's only one thing I must do:\n<CLT>");    // "<CLT 4>それを知る為の方法は、たった１つ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 66: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>get out of here.\n<CLT>");    // "<CLT 4>ここから出る事…だな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 67: "Makoto Naegi"
	s.op(0x26, [0x00, 0x0C, 0x01]);
	s.op(0x25, [0x10, 0x01]);
	s.op(0x34, [0x01, 0xFB]);
	s.op(0x27, [0xFF]);
	s.op(0x29, [0x16]);
	s.op(0x34, [0x00, 0x01]);
	s.op(0x29, [0x17]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Is this... the shower room?\n");    // "ここは…シャワールームか？\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 68: "[No Name]"
	s.op(0x25, [0x02, 0x00]);
	s.op(0x33, [0x06, 0x00, 0x00, 0x0A]);
	s.playSoundEffectA(153, 100);
	s.setSpeaker("[No Name]");
	s.op(0x03, [0x17]);
	s.showLine(lines_door[0]);    // "<CLT 23>「ガタガタガタ！」\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 69: "Makoto Naegi"
	s.op(0x25, [0x02, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.playSoundEffectA(26, 100);
	s.op(0x1F, [0xFF, 0xFF, 0xFF, 0x04, 0x00, 0x1E, 0xFF]);
	s.showLine(lines_door[1]);    // "あれ？　開かないな…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 70: "Makoto Naegi"
	s.showLine(lines_door[2]);    // "鍵が掛かってる…みたいだ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 71: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1C]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_lint);    // "<CLT 4>これは…粘着テープクリーナーだな。\n掃除はご自由にって事か…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 72: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1D]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[0]);    // "<CLT 4>引き出しの中に何か入っている…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 73: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xBA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01]);
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[1]);    // "<CLT 4>これは…工具セットだな。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 74: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[2]);    // "<CLT 4>ビニールの包装がされてる。\nまだ、新品の未開封品みたいだけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 75: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[3]);    // "<CLT 4>とりあえず、ボクが使う事はないだろうな。\n戻しておこう。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 76: "Makoto Naegi"
	s.op(0x06, [0x0B, 0xBA, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1A]);
	s.op(0x29, [0x14]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(line_TV);    // "<CLT 4>テレビモニターがある…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 77: "Makoto Naegi"
	s.op(0x25, [0x00, 0x00]);
	s.setSpeaker("Makoto Naegi");
	s.showLine("Hm... How pointless...\n");    // "はぁ…無意味だ…\n"
	s.waitFrames(1);
	s.waitForInput();


	// Line 78: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x15]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[0]);    // "<CLT 4>監視カメラ…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 79: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[1]);    // "<CLT 4>こんなカメラで見られていると思うと、\n気分が悪いけど…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 80: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_camera[2]);    // "<CLT 4>校則によると、監視カメラを壊したらマズイんだよな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	/*
	// Line 81: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>ムカツクけど、放っておくしかない…\n<CLT>");    // "<CLT 4>ムカツクけど、放っておくしかない…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();
	// */


	// Line 82: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x21]);
	s.op(0x29, [0x22]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>It's a bed...\nIt looks normal... and feels normal...\n<CLT>");    // "<CLT 4>ベッド…\n特徴もない普通のものだ…寝心地も普通だし…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 83: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>I don't think the other students\nwant to hear me say that...\n<CLT>");    // "<CLT 4>なんて、ボクに言われたくないだろうな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 84: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x23]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_trash[0]);    // "<CLT 4>特になんの仕掛けもない…\n普通のゴミ箱みたいだ…\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 85: "Makoto Naegi"
	s.op(0x35, [0x0F, 0x06, 0x00, 0x01]);
	s.op(0x3C);
	s.op(0x34, [0x01, 0xFC]);
	s.op(0x03, [0x04]);
	s.showLine(lines_trash[1]);    // "<CLT 4>ゴミ箱の中には、\nさっき丸めて捨てた張り紙だけが捨ててある。\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 86: "Makoto Naegi"
	s.op(0x2A, [0x01, 0xFC]);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x33, [0x1E, 0x00, 0x00, 0x08]);
	s.op(0x1B, [0x08, 0x1E, 0x00]);
	s.op(0x29, [0x28]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[0]);    // "<CLT 4>引き出しのある机だ。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 87: "Makoto Naegi"
	s.op(0x03, [0x04]);
	s.showLine(lines_drawer[1]);    // "<CLT 4>よくある学生用って感じだな…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 88: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x1B]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Here's a memo pad.\nDoes this come with the room?\n<CLT>");    // "<CLT 4>メモ帳がある。\nこれは、ここの備え付けって事かな？\n<CLT>"
	s.waitFrames(2);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 89: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x18]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>Metals plates here... Metal plates there...\n<CLT>");    // "<CLT 4>こっちも鉄板…あっちも鉄板…\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 90: "Makoto Naegi"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0x19]);
	s.op(0x25, [0x0F, 0x00]);
	s.op(0x25, [0x00, 0x01]);
	s.op(0x25, [0x01, 0x01]);
	s.setSpeaker("Makoto Naegi");
	s.op(0x03, [0x04]);
	s.showLine("<CLT 4>There's a metal plate bolted onto this window.\n<CLT>");    // "<CLT 4>鉄板のような物が打ち付けられている。\n<CLT>"
	s.waitFrames(1);
	s.op(0x03, [0x00]);
	s.waitForInput();


	// Line 93: "[No Name]"
	s.op(0x25, [0x01, 0x00]);
	s.op(0x29, [0xFE]);
	s.op(0x2A, [0x00, 0x01]);
	s.op(0x25, [0x02, 0x00]);
	s.op(0x25, [0x01, 0x01]);
	s.op(0x25, [0x12, 0x00]);
	s.op(0x25, [0x12, 0x03]);
	s.op(0x34, [0x01, 0xFD]);
	s.op(0x2B, [0x01]);
	s.showLine("Yes\n");    // "はい\n"
	s.waitFrames(1);
	s.op(0x25, [0x01, 0x00]);
	s.op(0x25, [0x02, 0x01]);
	s.op(0x34, [0x00, 0x02]);
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
	s.op(0x2A, [0x01, 0xFD]);
	s.op(0x29, [0xFF]);
	s.op(0x2A, [0x01, 0xFB]);
	s.op(0x2A, [0x00, 0x02]);
	s.op(0x33, [0x08, 0x00, 0x00, 0x08]);
	s.playSoundEffectA(145, 100);
	s.op(0x22, [0x65, 0x01, 0x18]);
	s.goToScript(1, 2, 0);
	s.op(0x1A);
	s.op(0x1A);
	return(s);
}
