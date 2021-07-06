### 質問事項

App_2.js内の以下のコードなのですが、

    useEffect(()=>{
        console.log('コンポーネントのマウント後　componentDidMountに相当する 一番初めに実行');
    }, []);
    // 第二引数にからの配列を入れてるから。初回だけ実行される。

    useEffect(()=>{
        console.log('コンポーネントがアップデートされた後　componentDidUpdateに相当する　第二引数（val）の変更があった時だけ実行');
        return (()=>{
            console.log('コンポーネントがアンマウントされた後　componentWillUnmountに相当する　表示をなくす、コンポーネントが消える時に実行');
        });
        // useEffectのreturn にはクリーナップ関数（前までの購読（連続して行ってた）処理を追加する時に前までのものを消せる力がある）
    },[val]);

    useEffectを２回繰り返しているので、これを一つにまとめる方法はありませんか？
    第二引数に異なる値を渡しているので厳しいかと思うのですが、方法はないかと思い聞いてみました！！

    以下で調べてみたのですが、該当する記事は見つかりませんでした。
    [useEffect 第二引数の使い分け](https://qiita.com/okonomiyaki11/items/9ca288b501258045350a)
    [【React】useEffectの第二引数による挙動の変化](https://zenn.dev/yumiyoshi/scraps/8069d8d7caee43)