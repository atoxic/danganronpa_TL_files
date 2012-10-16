function _00_system_pak()
{
	var p = new BinPAK(2, true, false);
	p.add("There is no memory stick inserted.");
	p.add("Not enough space on the memory stick.\nThere must be ○○KB of free space on\nthe memory stick.");
	p.add("本ゲームはオートセーブ機能に対応しています。\nオートセーブ中にはメモリースティック™アクセスランプが\n点滅しますので、その間はメモリースティック™を抜いたり、\n本体の電源を切ったりしないでください。");
	p.add("Failed to load save data.\nThe save data is corrupted.");
	p.add("体験版のセーブデータを保存しますか？\nこのセーブデータがあると、製品版で何かいいことが…？");
	p.add("Do you want to save?");
	p.add("Do you want to load the save data?");
	p.add("Do you want to save your progress?");
	p.add("Will you save your changed\nsave data?");
	p.add("Yes");
	p.add("No");
	p.add("OK");
	p.add("記録メディアの空き容量が不足しています。\nゲームデータをインストールするには空き容量が\nあと○○MB以上必要です。");
	p.add("メモリースティック™を抜くと、自動的に\nインストール機能が“無効”となります。\n再度“有効”にする場合は、オプションから\n変更してください。");
	p.add("記録メディアにインストールデータが\n既に存在します。\nインストールデータを削除して、\n再インストールしますか？");
	p.add("インストールデータが破損しています。\nインストールデータを削除して、\n再インストールしますか？");
	p.add("メモリースティック™のアクセスに失敗したため、\n\"UMD\"からゲームデータを読み込んでいます。\nインストールデータからゲームデータを\n読み込むには、オプションのインストール機能を\n“有効”にしてください。");
	p.add("インストールを中断しました。");
	p.add("データをインストールするメモリースティック™ を\n差し込んでから、“ＩＮＳＴＡＬＬ　ＤＡＴＡ”を\n選択してください。");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	p.add("");
	return(p);
}
