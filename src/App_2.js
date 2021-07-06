import React, {useState, useEffect} from 'react';

const Number=(props)=>{
    const [val, setVal]=useState(0);

    const increment=()=>{
        setVal((prevState)=>prevState+1);
    }

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

    return(
        <>
            <p>props: {props.propVal}</p>
            <p>state: {val}</p>
            <button onClick={increment}>stateの加算</button>
        </>
    )
}

const MyComponent=()=>{
    const [propVal, setPropVal]=useState(0);
    const [isComponent, setIsComponent]=useState(false);

    const incrementProps=()=>{
        setPropVal((prevState)=>prevState+1);
    };
    const mountComponent=()=>{
        setIsComponent(!isComponent);
    };

    return(
        <>
            <button onClick={mountComponent}>Numberコンポーネントのマウント切り替え</button>
            {(()=>{
                if(isComponent){
                    return <Number propVal={propVal} />
                }else{
                    return null
                }
            })()}
            <button onClick={incrementProps}>Propsの加算</button>
        </>
    )
}
export default MyComponent;