// useState: 関数に状態を持たせるためのReactの機能
import React, {useState} from 'react';
import './App.css';

function App() {
  const [numInp, setNumInp] = useState("");
  const [calcResult, setCalcResult] = useState(0);
  const [isNumInp, setIsNumInp] = useState(true);
  const mathClick = () => {
    // t/f判定処理を呼び出し
    const num = determineNum(numInp);

    setCalcResult(num*2);
  };

  // input
  const determineNum = (v:any) => {
    var num = 0;
    if(isFinite(v)){
      // 文字列を数値に変換
      num = parseInt(v);
        setIsNumInp(true); 
    } else {
        setIsNumInp(false); 
    }
    return num;
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Vercel test</p>
        <p>二倍にしたい値を入力するのだ！</p>
        <p>
          <input type="text" value={numInp} onChange={event => setNumInp(event.target.value)}/>
          <button className="calcButton" onClick={mathClick}>2倍にする</button>
        </p>
        <p>計算結果: {isNumInp && calcResult || "半角数字以外の入力が含まれています。"}</p>
      </header>
    </div>
  );
}

export default App;
