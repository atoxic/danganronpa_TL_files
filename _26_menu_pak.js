function _26_menu_pak()
{
	var p = new BinPAK(2, true, false);
	p.add("Start from Beginning of Chapter");	// チャプターの最初から始める
	p.add("Start from Class Trial");			// 学級裁判から始める
	p.add("Highest Class Trial Grade");			// 学級裁判の最高成績
	p.add("Start playing from the selected chapter?");
	p.add("Yes");
	p.add("No");
	p.add("OK");
	p.add("Start playing from where you left off?"); // 前回の続きからプレイを再開します。\nよろしいでしょうか？
	p.add("Prologue");
	p.add("Chapter 01");
	p.add("Chapter 02");
	p.add("Chapter 03");
	p.add("Chapter 04");
	p.add("Chapter 05");
	p.add("Chapter 06");
	p.add("Epilogue");
	p.add("End");
	p.add("School Life");
	p.add("(Ab)normal Days");
	p.add("(Ab)normal Days: Free Time");
	p.add("Abnormal Days");
	p.add("Abnormal Days: Investigation");
	p.add("After Trial");
	p.add("Save Point");
	p.add("Class Trial");
	p.add("Class Trial: Briefing");
	p.add("Class Trial: Recess");
	p.add("　");
	p.add("Choose the difficulty levels.");
	p.add("※");
	p.add("You'll get a small present if you load\nthe save data of the trial version.\nDo you want to load it?");
	p.add("It may not be much, but here\nis ten times the Monokuma medals\nyou got in the trial version.");			// 体験版で集めたモノクマメダルを、\n１０倍返しさせて頂きます。\n１枚は、ほんの気持ちです。
	p.add("Number of Medals");
	p.add("Medals");
	p.add("You don't have save data of the trial.");		// 体験版のセーブデータがございません。
	p.add("※");
	p.add("You must pay medals to view the extra\nmaterial. Will you pay?");
	p.add("Price:");
	p.add("Medal(s)");
	p.add("You don't have enough medals.");			// モノクマメダルが不足しております。
	p.add("Price");
	p.add("Medals");
	p.add("Will you save your changed\nsave data?");
	p.add("記録メディアにインストールデータが既に存在します。\nインストールデータを削除して、再インストールしますか？");
	p.add("※");
	p.add("※");
	p.add("※");
	p.add("※");
	p.add("※");
	p.add("※");
	p.add("Pick up from where you left off.");												// 前回保存した状態から、ゲームを再開致します。
	p.add("Play a chapter that you have already cleared.");									// 一度クリアしたチャプターを再度プレイする事ができます。
	p.add("View extras. More extras will be unlocked\nas you advance through the game.");	// 様々な特典を閲覧頂けます。\n特典内容はゲームを進めて頂くと、充実していきます。
	p.add("Customize the settings to fit your preferences.");								// あなた様にあった快適な環境を設定致します。
	p.add("Watch the event scenes.");
	p.add("Watch the movies.");
	p.add("View the artwork.");
	p.add("Listen to the music.");
	p.add("Win items from the Monomono Machine.");
	p.add("Change the volume of the music.");
	p.add("Change the volume of the sound effects.");
	p.add("Change the volume of the voices.");
	p.add("Install game data to Memory Stick.\nWARNING: THIS TRANSLATION PATCH DOES NOT SUPPORT THIS FEATURE!");
	p.add("Reset the options to their original settings.");
	return(p);
}
